import React from "react";
import cruise from "../assets/cruise.jpg";
import diving from "../assets/diving.jpg";
import nightHouse from "../assets/night-house.jpg";
const Activities = () => {
  return (
    <div className="max-w-[1140px] m-auto w-full md:flex mt-[-75px]">
      <div className="relative p-4">
        <h3 className=" absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold">Resorts</h3>
      <img className="w-full h-full object-cover relative border-4 border-white shadow-xl" src={nightHouse} alt="/" />
      </div>
      <div className="relative p-4">
        <h3 className=" absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold">Resorts</h3>
      <img className="w-full h-full object-cover relative border-4 border-white shadow-xl" src={cruise} alt="/" />
      </div>
      <div className="relative p-4">
        <h3 className=" absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold">Resorts</h3>
      <img className="w-full h-full object-cover relative border-4 border-white shadow-xl" src={diving} alt="/" />
      </div>
    </div>
  );
};

export default Activities;
