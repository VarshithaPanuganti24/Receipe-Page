import React from "react";

export const Hero = () => {
  return (
    <div className="relative w-full h-72 md:h-96 bg-black overflow-hidden rounded-2xl">
      <img
        src="/oranges-85fb2b6.jpg"
        alt="Hero"
        className="w-full h-full object-cover opacity-60"
      />
      <div className=" absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold">
          Chefs Academy Secrets
        </h1>
        <p className="mt-2 md:mt-4 text-lg md:text-xl max-w-xl">
          New recipes to try out, with added fun and exploration.
        </p>
      </div>
    </div>
  );
};
