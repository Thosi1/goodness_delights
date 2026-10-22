"use client";

import { useState } from "react";
import Image from "next/image";
import { Instagram } from "lucide-react";
import { GALLERY } from "@/data/images";
import { PipingDivider } from "./PipingDivider";

export function InstagramGallery() {
  const [expanded, setExpanded] = useState(false);
  const photos = expanded ? GALLERY : GALLERY.slice(0, 6);

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

      <div id="kitchen-gallery" className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {photos.map(({ src, alt }) => (
          <div key={src} className="group relative aspect-[4/5] overflow-hidden rounded-xl">
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(min-width: 1024px) 200px, (min-width: 640px) 30vw, 45vw"
              className="object-contain bg-cream-100"
            />
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <button
          type="button"
          aria-expanded={expanded}
          aria-controls="kitchen-gallery"
          onClick={() => setExpanded((value) => !value)}
          className="rounded-full border border-brown-700 px-6 py-3 font-body text-sm font-semibold text-brown-700 transition-colors hover:bg-brown-700 hover:text-white"
        >
          {expanded ? "Show fewer photos" : `View all ${GALLERY.length} photos`}
        </button>
      </div>
    </section>
  );
}

