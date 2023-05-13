import React from "react";
import Beach from "../assets/beach.jpg";

const Hero = () => {
  return (
    <div className='w-full h-[90vh]'>
      <img src={Beach} alt='/' className='w-full h-full object-cover' />
      <div className="max-w-[1140px] m-auto">
        <div className="absolute top-[40%] w-full max-w-[600px] h-full flex flex-col text-white p-4">
          <h1 className="font-bold text-4xl">Find Your Special Trip</h1>
          <h2 className="text-4xl py-4 italic">With Weekaway</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque,
            doloribus? Rem repellendus excepturi nihil exercitationem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
