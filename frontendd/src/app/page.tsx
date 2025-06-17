import Image from "next/image";
import {Middle} from "./Componemts/Middle";
import { Header } from "./Componemts/Header";
import { Categories } from "./Componemts/Categories";
import {DisplayProducts} from "./Componemts/Mydisplay";
export default function Home() {
  return (
        <div className="relative">
      {/* Blurred Background Layer */}
      <div className="">
        <Header />
        <Middle />
        <div className="flex justify-center">
          <Categories />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <p>Only Premium Buyers can contact and view Sellers</p>
        <p>Get Premium</p>
      </div>

     



      <DisplayProducts category="Trending Now" />
      <DisplayProducts category="New Arrivals" />
      <DisplayProducts category="Best Sellers" />
      <DisplayProducts category="Bulk Deals & Offers" />
      <DisplayProducts category="Farmers & Sellers Spotlight" />
    </div>

   
  );
}
