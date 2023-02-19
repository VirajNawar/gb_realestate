import React from "react";
import { BiBed, BiBath, BiArea } from "react-icons/bi";

function House({ house }) {
  const { image, type, country, address, bedrooms, bathrooms, surface, price } =
    house;

  return (
    <div
      className="bg-[#060822] 
                    shadow-1 
                    p-5 
                    rounded-lg 
                    w-full 
                    max-w-[352px] 
                    mx-auto
                    hover:shadow-2xl
                    hover:shadow-[#0d1142]
                    transition
                    "
    >
      <img className="mb-8" src={image} alt="" />
      <div className="mb-4 flex gap-x-2 text-sm">
        <div className="bg-blue-400 text-black rounded-full px-3"> {type} </div>
        <div className="bg-yellow-400 text-black rounded-full px-3">
          {" "}
          {country}{" "}
        </div>
      </div>
      <div className="text-lg font-light mx-w-[260px]">{address}</div>
      <div className="flex gap-x-4 my-4 ">
        <div className="flex items-center text-blue-300 gap-1">
          <div>
            <BiBed />
          </div>
          <div>{bedrooms}</div>
        </div>
        <div className="flex items-center text-blue-300 gap-1">
          <div>
            <BiBath />
          </div>
          <div>{bathrooms}</div>
        </div>
        <div className="flex items-center text-blue-300 gap-1">
          <div>
            <BiArea />
          </div>
          <div>{surface}</div>
        </div>
      </div>
      <div className="text-lg font-medium text-blue-700 mb-4">{price}</div>
    </div>
  );
}

export default House;
