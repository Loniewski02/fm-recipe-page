import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import Ingredients from "./components/sections/Ingredients";
import Instructions from "./components/sections/Instructions";
import Nutrition from "./components/sections/Nutrition";
import Preparation from "./components/sections/Preparation";

const App: React.FC = () => {
  return (
    <>
      <main className=" wrapper bg-White md:my-24 md:overflow-hidden md:rounded-3xl">
        <Hero />
        <Header />
        <Preparation />
        <Ingredients />
        <div className="px-10">
          <div className="h-[1px] w-full bg-LightGrey" />
        </div>
        <Instructions />
        <div className="px-10">
          <div className="h-[1px] w-full bg-LightGrey" />
        </div>
        <Nutrition />
      </main>
    </>
  );
};

export default App;
