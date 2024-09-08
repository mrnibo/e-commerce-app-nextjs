import { siteConfig } from "@/config/siteConfig";
import { navbarData } from "@/data/navbar-data";
import Link from "next/link";
import React from "react";
import { Input } from "./ui/input";
import { IconHeart, IconSearch, IconShoppingCart } from "@tabler/icons-react";

const Navbar = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex justify-between items-center gap-4 py-6">
          <div className="text-3xl font-bold uppercase">
            <Link href="/">{siteConfig.logo}</Link>
          </div>
          <div>
            <ul className="flex flex-row justify-center items-center gap-12">
              {navbarData.links.map((item, index) => (
                <Link
                  href={item.href}
                  key={index}
                  className="hover:border-b border-black text-md"
                >
                  <li>{item.name}</li>
                </Link>
              ))}
            </ul>
          </div>
          <div className="flex flex-row justify-center items-center gap-8">
            <div className="relative">
              <Input
                placeholder="Search"
                className="relative w-[300px] rounded-md p-4 focus:border-black"
              />

              <IconSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
            </div>
            <div>
              <Link href="/wishlist">
                <IconHeart />
              </Link>
            </div>
            <div>
              <Link href="/cart">
                <IconShoppingCart />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-gray-300" />
    </>
  );
};

export default Navbar;
