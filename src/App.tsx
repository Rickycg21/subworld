import React from "react";
import HeaderSection from "./Components/HeaderSection";
// import { MainContentSection } from "./Components/MainContentSection";
// import { MenuGridSection } from "./Components/MenuGridSection";
// import { MenuItemsSection } from "./Components/MenuItemsSection";
// import { SearchBarsection } from "./Components/SearchBarsection";

function App(): JSX.Element {
  return (
    <div className="min-h-screen w-full bg-white">
      <HeaderSection />
      {/* <MenuGridSection /> */}
      {/* <MenuItemsSection /> */}
      {/* <SearchBarsection /> */}
      {/* <MainContentSection /> */}
      <main className="p-8 text-center text-gray-600 text-xl">
      </main>
    </div>
  );
}

export default App;
