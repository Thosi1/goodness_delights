import Image from "next/image";
import Link from "next/link";
import { CUSTOM_CAKE_PROMO } from "@/data/images";

export function CustomCakePromo() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
      <div className="grid items-center gap-10 rounded-soft bg-blush-100 p-8 sm:p-12 lg:grid-cols-2">
        <div>
          <p className="font-body text-sm font-medium uppercase tracking-[0.2em] text-gold-500">
            Custom Cakes
          </p>
          <h2 className="mt-3 font-display text-3xl text-brown-800 sm:text-4xl">
            A cake designed entirely around your celebration
          </h2>
          <p className="mt-4 max-w-md font-body text-base leading-relaxed text-brown-600">
            Tell us about your event, share a few reference images, and our
            cake designers will bring your vision to life — from intimate
            birthdays to grand wedding tiers.
          </p>
          <Link
            href="/custom-cakes"
            className="mt-6 inline-block rounded-full bg-brown-700 px-7 py-3.5 font-body text-sm font-semibold text-white transition-colors hover:bg-brown-800"
          >
            Start Your Custom Cake Request
          </Link>
        </div>
        <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-soft shadow-soft">
          <Image
            src={CUSTOM_CAKE_PROMO}
            alt="A Goodness Delights pastel unicorn cake with rainbow decorations"
            fill
            sizes="(min-width: 1024px) 480px, 90vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

