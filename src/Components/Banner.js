import React from "react";
import Image from "../assests/img/house-banner.png";
import Search from "./Search";

function Banner() {
  return (
    <section
      className="h-full 
                        max-h-[640px] 
                        mb-8 
                        xl:mb-24
                        
                        "
    >
      <div
        className=" flex
                      flex-col
                      lg:flex-row
                      "
      >
        <div
          className="lg:ml-8 
                        lg:mr-5
                        xl:mr-5
                        xl:ml-[135px] 
                        flex 
                        flex-col 
                        items-center 
                        lg:items-start 
                        text-center 
                        lg:text-left
                        justify-center 
                        flex-1
                        px-4
                        lg:px-0
                        "
        >
          <h1
            className="text-4xl
                         lg:text-[58px]
                         font-semibold 
                         leading-none
                         mb-6   
                        "
          >
            <span className="text-blue-700">Rent</span> Your Dream House With Us
          </h1>
          <p className="mx-w-[480px] mb-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repudiandae earum corrupti tempora veritatis explicabo quibusdam,
            eveniet similique soluta nihil necessitatibus ea magni sint aperiam
            amet corporis nemo! Sapiente, mollitia eos? Error dolorem quam
            molestias
          </p>
        </div>
        <div className="hidden flex-1 lg:flex justify-end items-end">
          <img src={Image} alt="banner-logo" />
        </div>
      </div>
      <Search />
    </section>
  );
}

export default Banner;
