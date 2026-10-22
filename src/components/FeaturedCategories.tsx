import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/products";
import {
  CAT_CAKES, CAT_CUPCAKES, CAT_COOKIES,
  CAT_BROWNIES,
} from "@/data/images";
import { PipingDivider } from "./PipingDivider";

const CATEGORY_IMAGES: Record<string, string> = {
  "Celebration Cakes": CAT_CAKES,
  Cupcakes: CAT_CUPCAKES,
  Cookies: CAT_COOKIES,
  Brownies: CAT_BROWNIES,
};

export function FeaturedCategories() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
      <div className="text-center">
        <h2 className="font-display text-3xl text-brown-800 sm:text-4xl">Shop by Category</h2>
        <p className="mx-auto mt-2 text-gold-500">
          <PipingDivider className="mx-auto" />
        </p>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {categories.map((category) => (
          <Link
            key={category}
            href={`/shop?category=${encodeURIComponent(category)}`}
            className="group flex flex-col items-center gap-3 rounded-soft bg-cream-100 p-4 text-center transition-transform hover:-translate-y-1"
          >
            <div className="relative h-20 w-20 overflow-hidden rounded-full ring-4 ring-blush-100">
              <Image
                src={CATEGORY_IMAGES[category]}
                alt={category}
                fill
                sizes="80px"
                className="object-contain bg-cream-100"
              />
            </div>
            <span className="font-body text-sm font-medium text-brown-700 group-hover:text-gold-500">
              {category}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

