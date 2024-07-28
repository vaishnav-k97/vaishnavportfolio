import React from "react";
import { features } from "../constants";

export default function FeatureSection() {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[520px]">
      <div className="text-center">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          My
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            {" "}
            Skills
          </span>
        </h2>
      </div>
      <div className="container mx-auto p-4 mt-10 mb-20 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((feature, index) => (
          <div key={index} className="p-4 border rounded-lg border-orange-500">
            <div className="flex items-center p-5">
              <img src={feature.icon} alt={feature.text} className="h-12 w-12 ml-14 text-orange-500" />
              <span className="ml-8 text-xl">{feature.text}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
