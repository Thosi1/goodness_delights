"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Minus, Plus, X } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { formatCurrency } from "@/lib/utils";

export default function CartPage() {
  const { items, removeItem, updateQuantity, subtotal } = useCart();
  const [fulfilment, setFulfilment] = useState<"collection" | "delivery">("collection");
  const [notes, setNotes] = useState("");

  if (items.length === 0) {
    return (
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-3 px-5 py-24 text-center">
        <h1 className="font-display text-3xl text-brown-800">Your cart is empty</h1>
        <p className="font-body text-brown-500">
          Looks like you haven't added anything yet. Explore our menu to find something delicious.
        </p>
        <Link
          href="/shop"
          className="mt-3 rounded-full bg-brown-700 px-7 py-3 font-body text-sm font-semibold text-white hover:bg-brown-800"
        >
          Browse the Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8">
      <h1 className="font-display text-3xl text-brown-800">Your Cart</h1>

      <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_320px]">
        <ul className="divide-y divide-blush-200">
          {items.map((line) => (
            <li key={line.cartItemId} className="flex gap-4 py-5">
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-blush-100">
                <Image src={line.image} alt={line.name} fill sizes="96px" className="object-contain bg-cream-100" />
              </div>
              <div className="flex flex-1 flex-col justify-between">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-display text-lg text-brown-800">{line.name}</p>
                    {(line.size || line.flavour) && (
                      <p className="font-body text-xs text-brown-500">
                        {[line.size, line.flavour].filter(Boolean).join(" · ")}
                      </p>
                    )}
                    {line.personalisedMessage && (
                      <p className="font-body text-xs italic text-brown-500">
                        "{line.personalisedMessage}"
                      </p>
                    )}
                  </div>
                  <button
                    aria-label={`Remove ${line.name}`}
                    onClick={() => removeItem(line.cartItemId)}
                    className="text-brown-400 hover:text-brown-700"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 rounded-full border border-blush-200 px-2 py-1">
                    <button
                      aria-label="Decrease quantity"
                      onClick={() => updateQuantity(line.cartItemId, line.quantity - 1)}
                      className="text-brown-600 hover:text-brown-900"
                    >
                      <Minus className="h-3.5 w-3.5" />
                    </button>
                    <span className="w-5 text-center font-body text-sm">{line.quantity}</span>
                    <button
                      aria-label="Increase quantity"
                      onClick={() => updateQuantity(line.cartItemId, line.quantity + 1)}
                      className="text-brown-600 hover:text-brown-900"
                    >
                      <Plus className="h-3.5 w-3.5" />
                    </button>
                  </div>
                  <p className="font-display text-lg text-brown-800">
                    {formatCurrency(line.unitPrice * line.quantity)}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <aside className="h-max rounded-soft bg-cream-100 p-6">
          <h2 className="font-display text-lg text-brown-800">Order Summary</h2>

          <fieldset className="mt-5">
            <legend className="font-body text-sm font-semibold text-brown-800">Collection or delivery</legend>
            <div className="mt-2 flex gap-2">
              {(["collection", "delivery"] as const).map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setFulfilment(opt)}
                  className={`flex-1 rounded-full border px-3 py-2 font-body text-sm capitalize transition-colors ${
                    fulfilment === opt
                      ? "border-brown-700 bg-brown-700 text-white"
                      : "border-blush-200 bg-white text-brown-600"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </fieldset>

          <div className="mt-5">
            <label htmlFor="order-notes" className="font-body text-sm font-semibold text-brown-800">
              Order notes <span className="text-brown-400">(optional)</span>
            </label>
            <textarea
              id="order-notes"
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Allergies, delivery instructions, etc."
              className="mt-2 w-full rounded-xl border border-blush-200 bg-white px-3 py-2.5 font-body text-sm text-brown-800 placeholder:text-brown-400 focus:border-gold-400"
            />
          </div>

          <div className="mt-5 flex items-center justify-between border-t border-blush-200 pt-4 font-body text-sm text-brown-600">
            <span>Subtotal</span>
            <span className="font-display text-xl text-brown-800">{formatCurrency(subtotal)}</span>
          </div>
          <p className="mt-1 font-body text-xs text-brown-400">
            Delivery fees, if applicable, are calculated at checkout.
          </p>

          <Link
            href="/checkout"
            className="mt-5 block rounded-full bg-gold-500 px-6 py-3 text-center font-body text-sm font-semibold text-brown-900 hover:bg-gold-400"
          >
            Proceed to Checkout
          </Link>
          <Link
            href="/shop"
            className="mt-2 block rounded-full border border-brown-700 px-6 py-3 text-center font-body text-sm font-medium text-brown-700 hover:bg-brown-700 hover:text-white"
          >
            Continue Shopping
          </Link>
        </aside>
      </div>
    </div>
  );
}

