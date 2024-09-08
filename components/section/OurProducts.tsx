import { flashSaleData } from "@/data/product-data";
import React from "react";
import { Product, ProductViewAllButton } from "../Product";
import {
  Carousel,
  CarouselNext,
  CarouselPrevious,
  CarouselContent,
} from "../ui/carousel";
import {
  SectionTitle,
  SectionTitleBig,
  SectionTitleWithTimer,
} from "../ui/section-title";

const OurProducts = () => {
  return (
    <>
      <div className="py-4">
        <SectionTitle title="Our Products" />
        <SectionTitleBig title="Explore Our Products" />
        {/* Flashsale Products */}
        <div className="grid grid-cols-5 justify-center items-center gap-4 py-4">
          {flashSaleData.slice(0, 10).map((product) => (
            <Product
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              description={product.description}
              discount={product.discount}
            />
          ))}
        </div>

        {/* View Button */}
        <div className="flex justify-center items-center py-5">
          {" "}
          <ProductViewAllButton />
        </div>
      </div>
    </>
  );
};

export default OurProducts;
