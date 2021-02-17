import React from "react";

import Image from "next/image";
export default function Hero() {
  return (
    <div className="flex  mt-48">
      <div className="w-1/2 min-w-1/2">
        <div className="flex justify-center">
          <Image
            width={600}
            height={600}
            src="/images/cupthree.png"
            objectFit="cover"
            quality={100}
          />
        </div>
      </div>
      <div className="w-1/2 h-auto">
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-8xl font-semibold">Your Best</h1>
          <h1 className="text-8xl font-semibold">
            Co-work/Study <br /> Space
          </h1>
        </div>
      </div>
    </div>
  );
}
