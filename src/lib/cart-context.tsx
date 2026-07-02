"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";
import { CartLineItem } from "@/types";

interface CartContextValue {
  items: CartLineItem[];
  addItem: (item: Omit<CartLineItem, "cartItemId">) => void;
  removeItem: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, quantity: number) => void;
  clearCart: () => void;
  subtotal: number;
  itemCount: number;
  isDrawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

// NOTE: Cart state currently lives in localStorage for this mock build.
// When a backend is connected, replace this with a server-persisted cart
// (e.g. tied to a customer session or account) and sync on add/remove/update.
const STORAGE_KEY = "petal-and-crumb-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartLineItem[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {
      // ignore corrupted storage
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, hydrated]);

  const addItem: CartContextValue["addItem"] = (item) => {
    setItems((prev) => {
      const existing = prev.find(
        (line) =>
          line.productId === item.productId &&
          line.size === item.size &&
          line.flavour === item.flavour &&
          line.personalisedMessage === item.personalisedMessage
      );
      if (existing) {
        return prev.map((line) =>
          line.cartItemId === existing.cartItemId
            ? { ...line, quantity: line.quantity + item.quantity }
            : line
        );
      }
      return [
        ...prev,
        { ...item, cartItemId: `${item.productId}-${Date.now()}` },
      ];
    });
    setIsDrawerOpen(true);
  };

  const removeItem = (cartItemId: string) =>
    setItems((prev) => prev.filter((line) => line.cartItemId !== cartItemId));

  const updateQuantity = (cartItemId: string, quantity: number) =>
    setItems((prev) =>
      prev.map((line) =>
        line.cartItemId === cartItemId
          ? { ...line, quantity: Math.max(1, quantity) }
          : line
      )
    );

  const clearCart = () => setItems([]);

  const subtotal = useMemo(
    () => items.reduce((sum, line) => sum + line.unitPrice * line.quantity, 0),
    [items]
  );

  const itemCount = useMemo(
    () => items.reduce((sum, line) => sum + line.quantity, 0),
    [items]
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        subtotal,
        itemCount,
        isDrawerOpen,
        openDrawer: () => setIsDrawerOpen(true),
        closeDrawer: () => setIsDrawerOpen(false),
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
