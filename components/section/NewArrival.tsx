import React from "react";
import { SectionTitle, SectionTitleBig } from "../ui/section-title";
import Image from "next/image";
import Link from "next/link";
import { IconLink } from "@tabler/icons-react";

const NewArrival = () => {
  return (
    <>
      <div className="py-4">
        <SectionTitle title="Featured" />
        <SectionTitleBig title="New Arrival" />

        <div className="flex justify-evenly items-start gap-4 min-h-full py-8">
          <div className="relative bg-neutral-950 rounded-md p-8 w-1/2">
            <Image
              src={"/new-arival/01.png"}
              alt={"title"}
              width={511}
              height={511}
            />
            <div className="absolute bottom-3 left-3 text-white p-2">
              <div className="text-xl">PlayStation 5</div>
              <div>Black and White version of the PS5 coming out on sale.</div>
              <Link
                className="my-2 py-1 border-b border-white flex gap-2 w-fit items-center hover:translate-x-1 duration-500"
                href={"/"}
              >
                Shop Now <IconLink stroke={2} size={22} />
              </Link>
            </div>
          </div>
          <div className="w-1/2 flex flex-col gap-4">
            <div className="bg-neutral-950 rounded-md p-1 relative">
              <div></div>
              <div className="flex justify-end items-end">
                <Image
                  src={"/new-arival/02.png"}
                  alt={"title"}
                  width={432}
                  height={286}
                />
              </div>

              <div className="absolute bottom-3 left-3 text-white p-2">
                <div className="text-xl"> Womens Collections</div>
                <div>
                  Featured woman collections that give you another vibe.
                </div>
                <Link
                  className="my-2 py-1 border-b border-white flex gap-2 w-fit items-center hover:translate-x-1 duration-500"
                  href={"/"}
                >
                  Shop Now <IconLink stroke={2} size={22} />
                </Link>
              </div>
            </div>

            <div className="flex justify-evenly items-center gap-4 w-full max-h-full h-full min-h-full">
              <div className="relative bg-neutral-950 rounded-md p-8 w-full">
                <Image
                  src={"/new-arival/03.png"}
                  alt={"title"}
                  width={170}
                  height={200}
                />
                <div className="absolute bottom-3 left-3 text-white p-2">
                  <div className="text-xl">Speakers</div>
                  <div>Amazon wireless speakers</div>
                  <Link
                    className="my-2 py-1 border-b border-white flex gap-2 w-fit items-center hover:translate-x-1 duration-500"
                    href={"/"}
                  >
                    Shop Now <IconLink stroke={2} size={22} />
                  </Link>
                </div>
              </div>
              <div className="relative bg-neutral-950 rounded-md p-8 w-full">
                <Image
                  src={"/new-arival/04.png"}
                  alt={"title"}
                  width={200}
                  height={200}
                />
                <div className="absolute bottom-3 left-3 text-white p-2">
                  <div className="text-xl">Perfume</div>
                  <div>GUCCI INTENSE OUD EDP</div>
                  <Link
                    className="my-2 py-1 border-b border-white flex gap-2 w-fit items-center hover:translate-x-1 duration-500"
                    href={"/"}
                  >
                    Shop Now <IconLink stroke={2} size={22} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewArrival;
