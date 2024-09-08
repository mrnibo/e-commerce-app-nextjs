import Image from "next/image";
import Link from "next/link";
import React from "react";

const SpecialSale = () => {
  return (
    <>
      <div className="bg-neutral-900 py-4 text-white rounded-md shadow-md">
        <div className="flex justify-between items-center gap-2 p-8">
          <div className="flex flex-col justify-start items-start gap-4 w-2/5 px-8">
            <div className="text-sm text-primary">Categories</div>
            <div className="text-5xl text-pretty font-bold">
              Enhance Your Music Experience
            </div>
            <Link href={"/"}>
              <button className="bg-primary hover:bg-primary/80 text-white py-3 px-8 rounded-md duration-300 mt-4">
                Buy Now!
              </button>
            </Link>
          </div>
          <div className="flex justify-center items-center w-3/5">
            <Image
              src={"/special/01.png"}
              alt={"title"}
              width={600}
              height={420}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialSale;
