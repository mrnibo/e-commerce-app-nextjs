import { offerData } from "@/data/offer-data";
import Link from "next/link";
import React from "react";

const OfferBanner = () => {
  return (
    <>
      <div className="bg-black py-4 text-white text-md">
        <div className="flex justify-center items-center gap-3">
          <div>{offerData.text}</div>
          <div>
            <Link className="underline font-semibold" href={offerData.btnHref}>
              {offerData.btnText}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default OfferBanner;
