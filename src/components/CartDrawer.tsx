"use client";

import Link from "next/link";
import Image from "next/image";
import { Minus, Plus, X } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { formatCurrency } from "@/lib/utils";

export function CartDrawer() {
  const { items, isDrawerOpen, closeDrawer, removeItem, updateQuantity, subtotal } =
    useCart();

  if (!isDrawerOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end" role="dialog" aria-modal="true" aria-label="Shopping cart">
      <button
        aria-label="Close cart"
        className="absolute inset-0 bg-brown-900/40 animate-fade-in"
        onClick={closeDrawer}
      />
      <div className="relative flex h-full w-full max-w-md flex-col bg-cream-50 shadow-soft animate-fade-up">
        <div className="flex items-center justify-between border-b border-blush-200 px-6 py-5">
          <h2 className="font-display text-xl text-brown-800">Your Cart</h2>
          <button
            aria-label="Close cart"
            onClick={closeDrawer}
            className="rounded-full p-1.5 hover:bg-blush-100"
          >
            <X className="h-5 w-5 text-brown-700" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
            <p className="font-display text-lg text-brown-700">Your cart is empty</p>
            <p className="max-w-xs font-body text-sm text-brown-500">
              Add a treat from the shop to get started — everything is baked fresh to order.
            </p>
            <Link
              href="/shop"
              onClick={closeDrawer}
              className="mt-2 rounded-full bg-brown-700 px-6 py-2.5 font-body text-sm font-medium text-white hover:bg-brown-800"
            >
              Browse the Shop
            </Link>
          </div>
        ) : (
          <>
            <div className="thin-scroll flex-1 overflow-y-auto px-6 py-4">
              <ul className="space-y-5">
                {items.map((line) => (
                  <li key={line.cartItemId} className="flex gap-4">
                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-blush-100">
                      <Image src={line.image} alt={line.name} fill sizes="80px" className="object-contain bg-cream-100" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <p className="font-body text-sm font-semibold text-brown-800">{line.name}</p>
                        <button
                          aria-label={`Remove ${line.name} from cart`}
                          onClick={() => removeItem(line.cartItemId)}
                          className="text-brown-400 hover:text-brown-700"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                      {(line.size || line.flavour) && (
                        <p className="mt-0.5 font-body text-xs text-brown-500">
                          {[line.size, line.flavour].filter(Boolean).join(" · ")}
                        </p>
                      )}
                      <div className="mt-2 flex items-center justify-between">
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
                        <p className="font-body text-sm font-semibold text-brown-800">
                          {formatCurrency(line.unitPrice * line.quantity)}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-blush-200 px-6 py-5">
              <div className="flex items-center justify-between font-body text-sm text-brown-600">
                <span>Subtotal</span>
                <span className="font-display text-lg text-brown-800">{formatCurrency(subtotal)}</span>
              </div>
              <p className="mt-1 font-body text-xs text-brown-400">
                Delivery or collection fees are calculated at checkout.
              </p>
              <div className="mt-4 flex flex-col gap-2">
                <Link
                  href="/checkout"
                  onClick={closeDrawer}
                  className="rounded-full bg-gold-500 px-6 py-3 text-center font-body text-sm font-semibold text-brown-900 hover:bg-gold-400"
                >
                  Checkout
                </Link>
                <Link
                  href="/cart"
                  onClick={closeDrawer}
                  className="rounded-full border border-brown-700 px-6 py-3 text-center font-body text-sm font-medium text-brown-700 hover:bg-brown-700 hover:text-white"
                >
                  View Cart
                </Link>
                <button
                  onClick={closeDrawer}
                  className="mt-1 font-body text-xs text-brown-500 underline hover:text-brown-700"
                >
                  Continue shopping
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

