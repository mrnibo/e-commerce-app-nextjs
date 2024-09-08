import { Product } from "@/components/Product";
import Category from "@/components/section/Category";
import FlashSale from "@/components/section/FlashSale";
import { Hero } from "@/components/section/Hero";
import NewArrival from "@/components/section/NewArrival";
import OurProducts from "@/components/section/OurProducts";
import Perks from "@/components/section/Perks";
import SpecialSale from "@/components/section/SpecialSale";
import { SpacerVertical } from "@/components/ui/spacer";
import { flashSaleData } from "@/data/product-data";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main>
        {/* Hero */}
        <div className="py-16">
          <Hero />
        </div>

        {/* FlashSale Section */}
        <div className="py-8">
          <FlashSale />
        </div>

        <SpacerVertical />

        {/* Category Section */}
        <div className="py-8">
          <Category />
        </div>

        <SpacerVertical />

        {/* SpecialSale Section */}
        <div className="py-8">
          <SpecialSale />
        </div>

        <SpacerVertical />

        {/* Our Products Section */}
        <div className="py-8">
          <OurProducts />
        </div>

        <SpacerVertical />

        {/* New Arrival Section */}
        <div className="py-8">
          <NewArrival />
        </div>

        {/* Perks Section */}
        <div className="py-16">
          <Perks />
        </div>
      </main>
    </>
  );
}
