import { Settings, ShoppingCart, User } from "lucide-react";
import Logo from "../assets/subworld-logo.png";
import React from "react";

export default function HeaderSection(): JSX.Element {
  return (
    <header className="sticky top-0 w-full bg-[#028940] py-4 z-50">
      <div className="mx-auto flex items-center justify-between px-6 md:px-12 max-w-screen-xl">
        <div className="flex items-center gap-[32px] pl-[40px]">
          <img
            className="h-[180px] w-[180px] object-contain"
            alt="SubWorld Logo"
            src={Logo}
          />
          <h1 className="font-normal text-[64px] tracking-[0.64px]">
            <span className="text-white">Sub</span>
            <span className="text-[#ffc20d]">World</span>
          </h1>
        </div>

        <div className="flex items-center gap-[20px] pr-[50px]">
          <ShoppingCart className="w-[50px] h-[50px] text-[#ffc20d] cursor-pointer" />
          <User className="w-[50px] h-[50px] text-[#ffc20d] cursor-pointer" />
          <Settings className="w-[50px] h-[50px] text-[#ffc20d] cursor-pointer" />
        </div>
      </div>
    </header>
  );
}
