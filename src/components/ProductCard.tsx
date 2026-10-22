"use client";

import Image from "next/image";
import Link from "next/link";
import { Leaf, ShoppingBag } from "lucide-react";
import { Product } from "@/types";
import { formatCurrency } from "@/lib/utils";
import { useCart } from "@/lib/cart-context";

const DIETARY_LABEL: Record<string, string> = {
  vegetarian: "Vegetarian",
  vegan: "Vegan",
  "gluten-free": "Gluten-Free",
  "nut-free": "Nut-Free",
  halal: "Halal",
};

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  const handleQuickAdd = () => {
    if (!product.inStock) return;
    addItem({
      productId: product.id,
      name: product.name,
      image: product.images[0],
      unitPrice: product.price,
      quantity: 1,
      size: product.sizes[0]?.label,
      flavour: product.flavours[0],
    });
  };

  return (
    <div className="group flex flex-col overflow-hidden rounded-soft bg-white shadow-card transition-transform duration-300 hover:-translate-y-1 hover:shadow-soft">
      <Link href={`/shop/${product.slug}`} className="relative block aspect-[4/5] overflow-hidden bg-blush-100">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, 50vw"
          className="object-contain bg-cream-100"
        />
        {product.bestseller && (
          <span className="absolute left-3 top-3 rounded-full bg-gold-500 px-3 py-1 font-body text-[11px] font-semibold uppercase tracking-wide text-white">
            Bestseller
          </span>
        )}
        {product.isNew && (
          <span className="absolute left-3 top-3 rounded-full bg-brown-700 px-3 py-1 font-body text-[11px] font-semibold uppercase tracking-wide text-white">
            New
          </span>
        )}
        {!product.inStock && (
          <span className="absolute inset-x-0 bottom-0 bg-brown-800/85 py-1.5 text-center font-body text-xs font-medium text-white">
            Currently Unavailable
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <p className="font-body text-xs uppercase tracking-wide text-gold-500">{product.category}</p>
        <Link href={`/shop/${product.slug}`}>
          <h3 className="mt-1 font-display text-lg text-brown-800 hover:text-gold-500">{product.name}</h3>
        </Link>
        <p className="mt-1 line-clamp-2 font-body text-sm text-brown-500">{product.shortDescription}</p>

        {product.dietary.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {product.dietary.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 rounded-full bg-blush-100 px-2.5 py-1 font-body text-[11px] text-brown-600"
              >
                <Leaf className="h-3 w-3" />
                {DIETARY_LABEL[tag]}
              </span>
            ))}
          </div>
        )}

        <div className="mt-4 flex items-center justify-between">
          <p className="font-display text-lg text-brown-800">{formatCurrency(product.price)}</p>
          <button
            type="button"
            onClick={handleQuickAdd}
            disabled={!product.inStock}
            aria-label={`Add ${product.name} to cart`}
            className="flex items-center gap-1.5 rounded-full bg-brown-700 px-4 py-2 font-body text-xs font-semibold text-white transition-colors hover:bg-brown-800 disabled:cursor-not-allowed disabled:bg-brown-400"
          >
            <ShoppingBag className="h-3.5 w-3.5" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

