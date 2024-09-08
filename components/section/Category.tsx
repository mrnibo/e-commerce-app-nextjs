import React from "react";
import { SectionTitle, SectionTitleBig } from "../ui/section-title";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { flashSaleData } from "@/data/product-data";
import { Product, ProductViewAllButton } from "../Product";
import { CategoryPlaceholer } from "../CategoryPlaceholer";
import { categoryData } from "@/data/category-data";

const Category = () => {
  return (
    <>
      <div className="py-4">
        <SectionTitle title="Category" />
        <SectionTitleBig title="Browse By Category" />
        {/* Flashsale Products */}
        <Carousel
          opts={{
            align: "start",
          }}
          className="relative py-4"
        >
          <CarouselNext /> <CarouselPrevious />
          <CarouselContent className="gap-8">
            {categoryData.map((item) => (
              <CategoryPlaceholer
                key={item.id}
                icon={item.icon}
                text={item.text}
                id={item.id}
              />
            ))}
          </CarouselContent>
        </Carousel>
        {/* View Button */}
        <div className="flex justify-center items-center py-5">
          <ProductViewAllButton text="View All Categories" href="/category" />
        </div>
      </div>
    </>
  );
};

export default Category;
