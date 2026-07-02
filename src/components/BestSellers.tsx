import Link from "next/link";
import { products } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { PipingDivider } from "./PipingDivider";

export function BestSellers() {
  const bestsellers = products.filter((p) => p.bestseller).slice(0, 4);

  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
      <div className="flex flex-col items-center text-center">
        <h2 className="font-display text-3xl text-brown-800 sm:text-4xl">Our Bestsellers</h2>
        <p className="text-gold-500"><PipingDivider className="mx-auto" /></p>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-5 lg:grid-cols-4">
        {bestsellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/shop"
          className="rounded-full border border-brown-700 px-7 py-3 font-body text-sm font-semibold text-brown-700 hover:bg-brown-700 hover:text-white"
        >
          View All Treats
        </Link>
      </div>
    </section>
  );
}
