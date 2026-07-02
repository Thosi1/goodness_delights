"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Search, SlidersHorizontal } from "lucide-react";
import { products, categories } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { cn } from "@/lib/utils";

type SortOption = "popularity" | "price-asc" | "price-desc" | "newest" | "bestselling";

const SORT_LABELS: Record<SortOption, string> = {
  popularity: "Most Popular",
  bestselling: "Best Selling",
  "price-asc": "Price: Low to High",
  "price-desc": "Price: High to Low",
  newest: "Newest",
};

export function ShopClient() {
  const params = useSearchParams();
  const initialCategory = params.get("category") ?? "All";
  const initialQuery = params.get("q") ?? "";

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [query, setQuery] = useState(initialQuery);
  const [sort, setSort] = useState<SortOption>("popularity");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let list = [...products];

    if (activeCategory !== "All") {
      list = list.filter((p) => p.category === activeCategory);
    }

    if (query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    switch (sort) {
      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        list.sort((a, b) => Number(b.isNew) - Number(a.isNew));
        break;
      case "bestselling":
        list.sort((a, b) => Number(b.bestseller) - Number(a.bestseller));
        break;
      default:
        list.sort((a, b) => b.popularity - a.popularity);
    }

    return list;
  }, [activeCategory, query, sort]);

  return (
    <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
      <div className="text-center">
        <h1 className="font-display text-4xl text-brown-800">Shop Our Treats</h1>
        <p className="mx-auto mt-2 max-w-xl font-body text-brown-600">
          Freshly baked celebration cakes, cupcakes, cookies, brownies, pastries and gift boxes — every order made by hand.
        </p>
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-xs">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brown-400" />
          <label htmlFor="shop-search" className="sr-only">Search products</label>
          <input
            id="shop-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products…"
            className="w-full rounded-full border border-blush-200 bg-white py-2.5 pl-9 pr-4 font-body text-sm text-brown-800 placeholder:text-brown-400 focus:border-gold-400"
          />
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setFiltersOpen((v) => !v)}
            className="flex items-center gap-2 rounded-full border border-blush-200 bg-white px-4 py-2.5 font-body text-sm text-brown-700 lg:hidden"
            aria-expanded={filtersOpen}
          >
            <SlidersHorizontal className="h-4 w-4" /> Filters
          </button>
          <label htmlFor="shop-sort" className="sr-only">Sort products</label>
          <select
            id="shop-sort"
            value={sort}
            onChange={(e) => setSort(e.target.value as SortOption)}
            className="rounded-full border border-blush-200 bg-white px-4 py-2.5 font-body text-sm text-brown-700 focus:border-gold-400"
          >
            {Object.entries(SORT_LABELS).map(([value, label]) => (
              <option key={value} value={value}>
                Sort: {label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-6 grid gap-8 lg:grid-cols-[220px_1fr]">
        <aside
          className={cn(
            "h-max rounded-soft border border-blush-200 bg-cream-100 p-5 lg:block",
            filtersOpen ? "block" : "hidden"
          )}
        >
          <p className="font-display text-base text-brown-800">Category</p>
          <ul className="mt-3 space-y-1">
            {["All", ...categories].map((category) => (
              <li key={category}>
                <button
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "w-full rounded-full px-3 py-2 text-left font-body text-sm transition-colors",
                    activeCategory === category
                      ? "bg-brown-700 text-white"
                      : "text-brown-600 hover:bg-blush-100"
                  )}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        <div>
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center gap-2 rounded-soft border border-dashed border-blush-300 py-16 text-center">
              <p className="font-display text-xl text-brown-700">No treats match just yet</p>
              <p className="max-w-sm font-body text-sm text-brown-500">
                Try a different category or search term — or browse our full menu.
              </p>
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setActiveCategory("All");
                }}
                className="mt-2 rounded-full bg-brown-700 px-5 py-2.5 font-body text-sm font-medium text-white hover:bg-brown-800"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
