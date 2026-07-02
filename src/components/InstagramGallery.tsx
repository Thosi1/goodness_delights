import Image from "next/image";
import { Instagram } from "lucide-react";
import { GALLERY } from "@/data/images";
import { PipingDivider } from "./PipingDivider";

const ALT_TEXTS = [
  "A sliced chocolate cake with flakes on a plate",
  "Retro cupcakes with pastel frosting swirls",
  "Freshly baked fudgy brownies on parchment",
  "French macarons in a white gift box",
  "Assorted colourful French macarons from Paris",
  "Hand-iced sugar cookies in pastel tones",
];

export function InstagramGallery() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
      <div className="text-center">
        <h2 className="font-display text-3xl text-brown-800 sm:text-4xl">From Our Kitchen</h2>
        <p className="text-gold-500"><PipingDivider className="mx-auto" /></p>
        <a
          href="https://instagram.com"
          className="mt-3 inline-flex items-center gap-1.5 font-body text-sm text-brown-600 hover:text-gold-500"
        >
          <Instagram className="h-4 w-4" /> @goodnessdelights
        </a>
      </div>

      <div className="mt-8 grid grid-cols-3 gap-3 sm:grid-cols-6">
        {GALLERY.map((src, i) => (
          <div key={src} className="group relative aspect-square overflow-hidden rounded-xl">
            <Image
              src={src}
              alt={ALT_TEXTS[i]}
              fill
              sizes="200px"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
