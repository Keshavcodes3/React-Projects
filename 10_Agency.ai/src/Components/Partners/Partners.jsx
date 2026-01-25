import React from "react";
import { company_logos } from "../../assets/assets";


const Partners = () => {

  return (
    <div>
      <div className="flex flex-col items-center justify-center flex-wrap gap-10 m-4">
        <h3 className={`font-semibold text-xl`}>Trusted by Leading Companies</h3>
        <div className="flex flex-wrap gap-x-10 p-5 justify-center items-center ">
          {company_logos.map(function (val) {
            return <img src={val} alt="" className="w-17 mt-1 lg:w-25" />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Partners;
