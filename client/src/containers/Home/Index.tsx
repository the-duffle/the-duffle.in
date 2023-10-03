import { useState } from "react";
import React from "react";
import { pageOptions } from "../../constants";

export const Home = () => {
  const [page, setPage] = useState<Number>(0);
  return (
    <div className="w-full h-3/4 ">
      <div className="h-[10%] flexCenter border-b-[1px] border-gray-700 text-gray-500 font-semibold">
        {pageOptions.map((opt, index) => (
          <div
            className={
              `w-1/2 h-full flexCenter cursor-pointer ` +
              (index === page ? "text-white border-b-[1.5px] boredr-white" : "")
            }
          >
            {opt}
          </div>
        ))}
        {

        }
      </div>
      <div className="h-[90%]"></div>
    </div>
  );
};
