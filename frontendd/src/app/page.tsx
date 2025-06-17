"use client";
import { Middle } from "./Componemts/Middle";
import { Header } from "./Componemts/Header";
import { Categories } from "./Componemts/Categories";
import { DisplayProducts } from "./Componemts/Mydisplay";
import { useSelector } from "react-redux";
import { Initials } from "./Componemts/redux";
import { SignUp } from "./Componemts/SignUp";

export default function Home() {
  
  const isLogin = useSelector((state: { user: Initials }) => state.user.sigUpMode);

  return (
    <div className="relative">

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



        {isLogin ? <SignUp /> : null}

 

      {/* <SignUp/> */}







      <DisplayProducts category="Trending Now" />
      <DisplayProducts category="New Arrivals" />
      <DisplayProducts category="Best Sellers" />
      <DisplayProducts category="Bulk Deals & Offers" />
      <DisplayProducts category="Farmers & Sellers Spotlight" />
    </div>


  );
}
