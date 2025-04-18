import React from "react";
import HeaderSection from "./components/HeaderSection";
import MenuItemsSection from "./components/MenuItemsSection";
import SearchBarSection from "./components/SearchBarSection";
import AddPostButton from "./components/AddPostButton";

function App(): JSX.Element {
  return (
    <div className="min-h-screen w-full bg-white text-gray-900">
      <HeaderSection />
      <main className="p-8 flex flex-col gap-8">
        <SearchBarSection />
        <MenuItemsSection />
      </main>

      <div className="fixed bottom-8 right-8 z-[9999]">
        <AddPostButton />
      </div>
    </div>
  );
}

export default App;
