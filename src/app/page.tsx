import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { FeaturedCategories } from "@/components/FeaturedCategories";
import { BestSellers } from "@/components/BestSellers";
import { CustomCakePromo } from "@/components/CustomCakePromo";
import { OurStory } from "@/components/OurStory";
import { Testimonials } from "@/components/Testimonials";
import { InstagramGallery } from "@/components/InstagramGallery";
import { Newsletter } from "@/components/Newsletter";

export const metadata: Metadata = {
  title: "Goodness Delights Bakehouse | Handmade Cakes & Custom Cake Design",
  description:
    "Browse celebration cakes, cupcakes, cookies, brownies and pastries, or request a custom cake for your next occasion. Based in Cape Town.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedCategories />
      <BestSellers />
      <CustomCakePromo />
      <OurStory />
      <Testimonials />
      <InstagramGallery />
      <Newsletter />
    </>
  );
}
