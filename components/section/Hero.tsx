import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { heroData } from "@/data/hero-data";
import Link from "next/link";
import Image from "next/image";
import {
  IconArrowNarrowRight,
  IconCaretRightFilled,
  IconExternalLink,
} from "@tabler/icons-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const Hero = () => {
  return (
    <>
      <div className="flex justify-between items-center gap-2">
        <div className="">
          <HeroMenu />
        </div>

        <div className="w-9/12">
          <HeroSlider />
        </div>
      </div>
    </>
  );
};

export const HeroMenu = () => {
  return (
    <>
      <div className="flex flex-col justify-start items-start gap-4 w-full">
        {heroData.menu.map((item, index) =>
          item.subMenu ? (
            <>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    {" "}
                    <Link
                      href={item.href}
                      key={index}
                      className="text-lg flex flex-row items-center gap-2"
                    >
                      {" "}
                      {item.name} <IconCaretRightFilled />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent
                    side="right"
                    className="bg-gray-100 w-64 shadow-xl flex flex-col justify-center items-start gap-2"
                  >
                    {item.subMenu.map((item, index) => (
                      <Link
                        href={item.href}
                        key={index}
                        className="text-lg flex flex-row items-center gap-2 text-gray-600 hover:text-black duration-300 "
                      >
                        {" "}
                        <IconArrowNarrowRight size="12" /> {item.name}
                      </Link>
                    ))}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </>
          ) : (
            <Link
              href={item.href}
              key={index}
              className="text-lg flex flex-row items-center gap-2"
            >
              {" "}
              {item.name}
            </Link>
          )
        )}
      </div>
    </>
  );
};

export const HeroSlider = () => {
  return (
    <div>
      <Carousel className="relative">
        <CarouselContent>
          {heroData.slider.map((item, index) => (
            <CarouselItem key={index} className="w-full h-[400px] rounded-md">
              <div
                className="h-full w-full rounded-md text-white flex justify-center items-center"
                style={{ backgroundColor: item.bgColor }}
              >
                <div className="flex justify-center items-center gap-12">
                  <div className="flex flex-col justify-start items-start gap-6 p-5">
                    <div className="text-6xl text-pretty font-bold w-96 leading-tight">
                      {item.text}
                    </div>
                    <div>
                      <Link
                        href={item.btnHref}
                        className="border-b border-white font-bold text-xl flex flex-row items-center gap-2 leading-relaxed"
                      >
                        {" "}
                        {item.btnText}
                        <IconExternalLink />
                      </Link>
                    </div>
                  </div>

                  <div>
                    <Image
                      src={item.img}
                      width={500}
                      height={350}
                      alt="iphone"
                    />
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-10 right-20">
          <CarouselNext /> <CarouselPrevious />
        </div>
      </Carousel>
    </div>
  );
};
