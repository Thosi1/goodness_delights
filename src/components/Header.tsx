"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/custom-cakes", label: "Custom Cakes" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { itemCount, openDrawer } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        scrolled
          ? "bg-cream-50/95 backdrop-blur shadow-card"
          : "bg-cream-50/70 backdrop-blur-sm"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Link
          href="/"
          className="font-display text-2xl tracking-wide text-brown-800"
          aria-label="Goodness Delights home"
        >
          Goodness&nbsp;Delights
        </Link>

        <nav
          className="hidden items-center gap-8 font-body text-sm font-medium text-brown-700 lg:flex"
          aria-label="Primary"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative py-1 transition-colors hover:text-gold-500"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            aria-label="Search products"
            onClick={() => setSearchOpen((v) => !v)}
            className="rounded-full p-2 text-brown-700 transition-colors hover:bg-blush-100"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label={`Open cart, ${itemCount} item${itemCount === 1 ? "" : "s"}`}
            onClick={openDrawer}
            className="relative rounded-full p-2 text-brown-700 transition-colors hover:bg-blush-100"
          >
            <ShoppingBag className="h-5 w-5" />
            {itemCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-gold-500 text-[11px] font-semibold text-white">
                {itemCount}
              </span>
            )}
          </button>
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
            className="rounded-full p-2 text-brown-700 transition-colors hover:bg-blush-100 lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {searchOpen && (
        <div className="border-t border-blush-200 bg-cream-50 px-5 py-3 sm:px-8">
          <form
            role="search"
            action="/shop"
            className="mx-auto flex max-w-3xl items-center gap-2"
          >
            <label htmlFor="site-search" className="sr-only">
              Search products
            </label>
            <input
              id="site-search"
              name="q"
              type="search"
              placeholder="Search cakes, cupcakes, cookies…"
              className="w-full rounded-full border border-blush-200 bg-white px-4 py-2 text-sm text-brown-800 placeholder:text-brown-400 focus:border-gold-400"
            />
            <button
              type="submit"
              className="rounded-full bg-brown-700 px-4 py-2 text-sm font-medium text-white hover:bg-brown-800"
            >
              Search
            </button>
          </form>
        </div>
      )}

      {mobileOpen && (
        <nav
          aria-label="Mobile"
          className="border-t border-blush-200 bg-cream-50 px-5 py-4 lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-2 py-3 font-body text-base text-brown-700 hover:bg-blush-100"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
