import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[90vh]">
      <img
        className="w-full h-full object-cover"
        src="https://images.pexels.com/photos/127673/pexels-photo-127673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Beach image"
      />
      <div className="max-w-[1140px] m-auto">
        <div className="absolute top-[40%] w-full md:-[50%] max-w-[600px] flex flex-col h-full text-white p-4 ">
          <h1 className="font-bold text-4xl">Find your special trip</h1>
          <h2 className="text-4xl py-4 italic">With Weekway</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
            placeat omnis eum dolorem facere magni earum temporibus architecto
            sed quasi fugit ducimus reiciendis facilis sit eos sunt ipsa
            nostrum. Adipisci.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
