import React, { useContext } from "react";
import { HouseContext } from "./HouseContext";
import House from "./House";
import { Link } from "react-router-dom";
import ShimmerUi from "./ShimmerUi";
import { toast } from "react-toastify";

function HouseList() {
  const { houses, loading } = useContext(HouseContext);

  if(loading){
    return (<ShimmerUi />)
  }

  if(houses.length < 1){
    return <h3 className='text-center text-blue-50 mt-48'>Sorry, nothing found...!!! <span className="hidden">`${toast.error("No data Found")}`</span></h3>
  }
  return (
    <section className="mb-20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14">
          {houses.map((house, index) => {
            return (
              <Link to={`/property/${house.id}`} key={index}>
                <House house={house} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HouseList;
