"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, Clock, Leaf, ShieldCheck } from "lucide-react";
import { Product } from "@/types";
import { useCart } from "@/lib/cart-context";
import { formatCurrency } from "@/lib/utils";
import { QuantitySelector } from "./QuantitySelector";
import { ProductCard } from "./ProductCard";

const DIETARY_LABEL: Record<string, string> = {
  vegetarian: "Vegetarian",
  vegan: "Vegan",
  "gluten-free": "Gluten-Free",
  "nut-free": "Nut-Free",
  halal: "Halal",
};

export function ProductDetailClient({
  product,
  related,
}: {
  product: Product;
  related: Product[];
}) {
  const { addItem } = useCart();
  const [activeImage, setActiveImage] = useState(0);
  const [size, setSize] = useState(product.sizes[0]?.label);
  const [flavour, setFlavour] = useState(product.flavours[0]);
  const [message, setMessage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const sizePriceModifier = useMemo(
    () => product.sizes.find((s) => s.label === size)?.priceModifier ?? 0,
    [size, product.sizes]
  );
  const unitPrice = product.price + sizePriceModifier;

  const handleAddToCart = () => {
    if (!product.inStock) return;
    addItem({
      productId: product.id,
      name: product.name,
      image: product.images[0],
      unitPrice,
      quantity,
      size,
      flavour,
      personalisedMessage: message || undefined,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
      <nav aria-label="Breadcrumb" className="font-body text-xs text-brown-400">
        <Link href="/shop" className="hover:text-gold-500">Shop</Link>
        <span className="px-1.5">/</span>
        <Link href={`/shop?category=${encodeURIComponent(product.category)}`} className="hover:text-gold-500">
          {product.category}
        </Link>
        <span className="px-1.5">/</span>
        <span className="text-brown-600">{product.name}</span>
      </nav>

      <div className="mt-6 grid gap-10 lg:grid-cols-2">
        <div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-soft bg-blush-100">
            <Image
              src={product.images[activeImage]}
              alt={`${product.name} — image ${activeImage + 1}`}
              fill
              sizes="(min-width: 1024px) 560px, 90vw"
              className="object-contain bg-cream-100"
              priority
            />
          </div>
          {product.images.length > 1 && (
            <div className="mt-3 flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={img}
                  type="button"
                  onClick={() => setActiveImage(i)}
                  aria-label={`Show image ${i + 1}`}
                  className={`relative h-16 w-16 overflow-hidden rounded-lg ring-2 transition-colors ${
                    activeImage === i ? "ring-gold-500" : "ring-transparent"
                  }`}
                >
                  <Image src={img} alt="" fill sizes="64px" className="object-contain bg-cream-100" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div>
          <p className="font-body text-xs uppercase tracking-wide text-gold-500">{product.category}</p>
          <h1 className="mt-1 font-display text-3xl text-brown-800 sm:text-4xl">{product.name}</h1>
          <p className="mt-3 font-display text-2xl text-brown-700">{formatCurrency(unitPrice)}</p>
          <p className="mt-4 font-body text-sm leading-relaxed text-brown-600">{product.description}</p>

          {product.dietary.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-1.5">
              {product.dietary.map((tag) => (
                <span key={tag} className="inline-flex items-center gap-1 rounded-full bg-blush-100 px-2.5 py-1 font-body text-xs text-brown-600">
                  <Leaf className="h-3 w-3" /> {DIETARY_LABEL[tag]}
                </span>
              ))}
            </div>
          )}

          <div className="mt-6 flex items-center gap-2 font-body text-sm text-brown-600">
            <Clock className="h-4 w-4 text-gold-500" />
            Requires at least {Math.round(product.leadTimeHours / 24) || 1} day{product.leadTimeHours > 24 ? "s" : ""} notice
          </div>

          {!product.inStock && (
            <p className="mt-3 rounded-full bg-brown-700/10 px-4 py-2 font-body text-sm font-medium text-brown-700">
              Currently unavailable — check back soon, or get in touch for the next batch.
            </p>
          )}

          <div className="mt-6 space-y-5">
            <div>
              <label htmlFor="size" className="block font-body text-sm font-semibold text-brown-800">
                Size
              </label>
              <select
                id="size"
                value={size}
                onChange={(e) => setSize(e.target.value)}
                className="mt-2 w-full max-w-xs rounded-xl border border-blush-200 bg-white px-3 py-2.5 font-body text-sm text-brown-800 focus:border-gold-400"
              >
                {product.sizes.map((s) => (
                  <option key={s.label} value={s.label}>
                    {s.label}
                    {s.priceModifier ? ` (+${formatCurrency(s.priceModifier)})` : ""}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="flavour" className="block font-body text-sm font-semibold text-brown-800">
                Flavour
              </label>
              <select
                id="flavour"
                value={flavour}
                onChange={(e) => setFlavour(e.target.value)}
                className="mt-2 w-full max-w-xs rounded-xl border border-blush-200 bg-white px-3 py-2.5 font-body text-sm text-brown-800 focus:border-gold-400"
              >
                {product.flavours.map((f) => (
                  <option key={f} value={f}>{f}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block font-body text-sm font-semibold text-brown-800">
                Personalised message <span className="text-brown-400">(optional)</span>
              </label>
              <input
                id="message"
                type="text"
                maxLength={40}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="e.g. Happy Birthday Aisha!"
                className="mt-2 w-full max-w-sm rounded-xl border border-blush-200 bg-white px-3 py-2.5 font-body text-sm text-brown-800 placeholder:text-brown-400 focus:border-gold-400"
              />
              <p className="mt-1 font-body text-xs text-brown-400">{message.length}/40 characters</p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <div>
                <p className="mb-2 font-body text-sm font-semibold text-brown-800">Quantity</p>
                <QuantitySelector value={quantity} onChange={setQuantity} />
              </div>
              <button
                type="button"
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="mt-6 flex items-center gap-2 rounded-full bg-brown-700 px-7 py-3.5 font-body text-sm font-semibold text-white transition-colors hover:bg-brown-800 disabled:cursor-not-allowed disabled:bg-brown-400"
              >
                {added ? <Check className="h-4 w-4" /> : null}
                {added ? "Added to Cart" : "Add to Cart"}
              </button>
            </div>
          </div>

          <div className="mt-8 space-y-3 rounded-soft bg-cream-100 p-5">
            <div className="flex gap-2 font-body text-sm text-brown-600">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
              <p><strong className="text-brown-800">Allergen information: </strong>{product.allergenInfo}</p>
            </div>
            <div className="flex gap-2 font-body text-sm text-brown-600">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
              <p><strong className="text-brown-800">Storage &amp; serving: </strong>{product.storageGuidance}</p>
            </div>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="font-display text-2xl text-brown-800">You Might Also Like</h2>
          <div className="mt-6 grid grid-cols-2 gap-5 sm:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

