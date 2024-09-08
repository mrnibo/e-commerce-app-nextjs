import {
  IconHeadset,
  IconMoneybag,
  IconTruckDelivery,
} from "@tabler/icons-react";
import React from "react";

const Perks = () => {
  return (
    <>
      <div className="flex flex-row justify-evenly items-center gap-4">
        <div className="flex flex-col justify-center items-center gap-1">
          <div className="bg-black p-1 rounded-full border-8 border-gray-300">
            <IconTruckDelivery stroke={1} size={42} color="white" />
          </div>
          <div className="text-lg">FREE AND FAST DELIVERY</div>
          <div className="text-sm">Free delivery for all orders over $140</div>
        </div>
        <div className="flex flex-col justify-center items-center gap-1">
          <div className="bg-black p-1 rounded-full border-8 border-gray-300">
            <IconHeadset stroke={1} size={42} color="white" />
          </div>
          <div className="text-lg">24/7 CUSTOMER SERVICE</div>
          <div className="text-sm">Friendly 24/7 customer support</div>
        </div>
        <div className="flex flex-col justify-center items-center gap-1">
          <div className="bg-black p-1 rounded-full border-8 border-gray-300">
            <IconMoneybag stroke={1} size={42} color="white" />
          </div>
          <div className="text-lg">MONEY BACK GUARANTEE</div>
          <div className="text-sm">We reurn money within 30 days</div>
        </div>
      </div>
    </>
  );
};

export default Perks;
