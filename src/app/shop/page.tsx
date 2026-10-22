import type { Metadata } from "next";
import { Suspense } from "react";
import { ShopClient } from "@/components/ShopClient";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Browse celebration cakes, cupcakes, cookies and brownies. Filter by category, dietary needs and more.",
};

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="py-24 text-center font-body text-brown-500">Loading…</div>}>
      <ShopClient />
    </Suspense>
  );
}

