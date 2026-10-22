import Image from "next/image";
import Link from "next/link";
import { HERO } from "@/data/images";
import { PipingDivider } from "./PipingDivider";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream-100">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-2 lg:py-24">
        <div className="order-2 lg:order-1">
          <p className="font-body text-sm font-medium uppercase tracking-[0.2em] text-gold-500">
            Goodness Delights Bakehouse
          </p>
          <h1 className="mt-4 font-display text-4xl leading-tight text-brown-800 sm:text-5xl lg:text-6xl">
            Beautifully Baked for Every Occasion
          </h1>
          <p className="mt-5 max-w-md font-body text-base leading-relaxed text-brown-600">
            Made by hand, created for your moment. From everyday indulgences
            to unforgettable celebrations, every order is baked with care in
            our Cape Town kitchen.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/shop"
              className="rounded-full bg-brown-700 px-7 py-3.5 font-body text-sm font-semibold text-white transition-colors hover:bg-brown-800"
            >
              Shop Our Treats
            </Link>
            <Link
              href="/custom-cakes"
              className="rounded-full border border-brown-700 px-7 py-3.5 font-body text-sm font-semibold text-brown-700 transition-colors hover:bg-brown-700 hover:text-white"
            >
              Order a Custom Cake
            </Link>
          </div>
          <div className="mt-10 text-gold-500">
            <PipingDivider className="!mx-0" />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-soft shadow-soft">
            <Image
              src={HERO}
              alt="A Goodness Delights white celebration cake with orchids, gold lettering and ruffles"
              fill
              priority
              sizes="(min-width: 1024px) 480px, 90vw"
              className="object-contain bg-cream-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

