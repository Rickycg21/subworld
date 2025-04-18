import {
  ShoppingCart,
  Heart,
  Share2,
  MessageCircle,
  Bookmark,
} from "lucide-react";
import React from "react";

export default function MenuItemsSection(): JSX.Element {
  return (
    <section className="bg-white py-10">
      <div className="px-6">
        <div className="grid grid-cols-3 gap-[100px]">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="w-full max-w-[320px] mx-auto rounded-2xl shadow-md overflow-hidden flex flex-col bg-white"
            >
              <div className="px-6 pt-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold text-gray-800">
                    Sandwich #{i + 1}
                  </h3>
                  <div className="flex items-center gap-[15px]">
                    <Heart className="text-pink-500 w-5 h-5" />
                    <span className="text-sm text-gray-500">{800 + i * 12}</span>
                  </div>
                </div>
              </div>

              <img
                src={`https://via.placeholder.com/400x200?text=Sandwich+${i + 1}`}
                alt={`Sandwich ${i + 1}`}
                className="w-full h-48 object-cover mt-4"
              />

              <div className="flex justify-between items-center px-6 pb-3 text-gray-500 mt-[15px]">
                <div className="flex items-center">
                  <img
                    src="https://via.placeholder.com/40"
                    alt="Profile"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <span className="text-sm font-medium text-gray-700 ml-[15px]">
                    Mary Thomas
                  </span>
                </div>

                <div className="flex">
                  <ShoppingCart className="w-5 h-5 cursor-pointer mr-[10px]" />
                  <MessageCircle className="w-5 h-5 cursor-pointer mr-[10px]" />
                  <Bookmark className="w-5 h-5 cursor-pointer mr-[10px]" />
                  <Share2 className="w-5 h-5 cursor-pointer" />
                </div>
              </div>

              <div className="px-6 pb-6 mt-auto">
                <p className="text-sm text-gray-500">
                  Ingredients: Lettuce, Tomato, Cheese, Avocado
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
