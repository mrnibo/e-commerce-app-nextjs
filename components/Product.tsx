import { IconHeart } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProductProps {
  id: number;
  image: string;
  title: string;
  price: string;
  discount?: string;
}

export const Product: React.FC<ProductProps> = ({
  id,
  image,
  title,
  price,
  discount,
}) => {
  return (
    <div>
      <ProductCard
        id={id}
        image={image}
        title={title}
        discount={discount}
        price={price}
      />
      <div className="flex flex-col justify-start gap-2 px-1 py-2">
        <span className="font-semibold">{title}</span>
        {discount ? (
          <span className="text-red-500">{price}</span>
        ) : (
          <span className="text-primary font-semibold">{price}</span>
        )}
      </div>
    </div>
  );
};

interface ProductCardProps {
  id: number;
  image: string;
  title: string;
  price: string;
  discount?: string;
}
export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  image,
  title,
  discount,
}) => {
  return (
    <>
      <div className="relative w-[250px] h-[250px] bg-gray-100 rounded-md flex justify-center items-center group">
        <Image src={image} alt={title} width={150} height={150} />

        {/* discount badge */}
        {discount && (
          <div className="absolute top-3 left-2 bg-primary text-white rounded-md py-1 px-4">
            {discount}
          </div>
        )}
        {/* wishlist btn */}
        <div className="absolute top-2 right-2 bg-white text-black rounded-full p-2 hover:shadow-md duration-300 cursor-pointer">
          <IconHeart />
        </div>

        {/* add to cart btn */}

        <div className="absolute bottom-0 w-full bg-black text-white rounded-b-md p-2 hover:shadow-md opacity-0 group-hover:opacity-100 duration-300 text-center">
          <Link href={`/product/${id}`} className="border-b border-white">
            Add to cart
          </Link>
        </div>
      </div>
    </>
  );
};

interface ProductViewAllButtonProps {
  text?: string;
  href?: string;
}

export const ProductViewAllButton: React.FC<ProductViewAllButtonProps> = ({
  text = "View All Products",
  href = "#",
}) => {
  return (
    <Link
      href={href}
      className="bg-primary hover:bg-primary/80 text-white py-3 px-8 rounded-md duration-300"
    >
      {text}
    </Link>
  );
};
