import React from "react";
import Image from "next/image";

export default function TwitterEmbed() {
  return (
    <>
      <section className="bg-[#141D26] h-screen">
        <div className="container bg-[#243447] mx-auto rounded-xl pb-8 mt-32 fixed z-50 overflow-x-hidden overflow-y-auto top-0 left-0 right-0">
          {/* header */}
          <div className="flex mt-16">
            <Image
              src="/images/beginner/avatar_beginner.png"
              alt=""
              width={70}
              height={70}
              className="rounded-full ml-32  text-base"
            />
            <div className="flex flex-col ml-8  leading-relaxed">
              <h1 className="font-bold text-2xl text-white">John Doe</h1>
              <p className="text-white text-xl ">@yafialhakim</p>
            </div>
            {/* <Image
            src="/images/beginner/twitter.png"
            width={80}
            height={80}
            alt=""
            className="mt-32"
          /> */}
          </div>
          {/* header */}

          {/* content */}

          <p className="text-white text-2xl font-normal mt-4 ml-32 leading-relaxed">
            Why do they call it 'debugging' when it feels more like 'wildly
            guessing and hoping for the best'? #programming #coding #debugging
          </p>
          <p className="text-gray-500 text-lg font-normal mt-4 ml-32 leading-relaxed">
            650 3:40 PM – Feb 24, 2022
          </p>
        </div>
      </section>
    </>
  );
}
