import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";

export default function SearchBar(): JSX.Element {
  return (
    <div className="w-full max-w-[720px] mx-auto my-[30px]">
      <Card className="w-full h-[70px] bg-[#ece6f0] rounded-[28px] border-none shadow-none">
        <CardContent className="flex items-center h-full p-1 gap-1">
          <div className="flex items-center justify-center w-12 h-12 ml-[15px]">
            <div className="p-2 rounded-full">
              <Search className="w-6 h-6 text-[#49454f]" />
            </div>
          </div>

          <div className="flex-1 ml-[15px] mr-[50px]">
            <Input
              className="border-none bg-transparent shadow-none h-full font-m3-body-large text-[#49454f] 
                         text-[length:var(--m3-body-large-font-size)] tracking-[var(--m3-body-large-letter-spacing)] 
                         leading-[var(--m3-body-large-line-height)] focus-visible:ring-0 focus-visible:ring-offset-0 
                         placeholder:text-[#49454f]"
              placeholder="Hinted search text"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
