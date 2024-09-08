import React from "react";
import { SectionTitle, SectionTitleWithTimer } from "../ui/section-title";
import { flashSaleData } from "@/data/product-data";
import { Product, ProductViewAllButton } from "../Product";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const FlashSale = () => {
  return (
    <>
      <div className="py-4">
        <SectionTitle title="Flash Sale" />
        <SectionTitleWithTimer title="Flash Sale" days={4} />
        {/* Flashsale Products */}
        <Carousel
          opts={{
            align: "start",
          }}
          className="relative py-4"
        >
          <CarouselNext /> <CarouselPrevious />
          <CarouselContent className="gap-4">
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
          </CarouselContent>
        </Carousel>
        {/* View Button */}
        <div className="flex justify-center items-center py-5">
          {" "}
          <ProductViewAllButton />
        </div>
      </div>
    </>
  );
};

export default FlashSale;
