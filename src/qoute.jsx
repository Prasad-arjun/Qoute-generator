import React from "react";
import bg from "./bg.css";
import qouteApi from "./qouteApi";


function Qoute() {
  return (
    
    <div className="h-[100vh] w-[100vw]  flex flex-col justify-center items-center absolute overflow-hidden bg">
      <div className="mb-6 text-[2rem] text-white font-semibold head">
        <h1>" Qoute of the day "</h1>
      </div>
      <div className="h-[0.2vh] w-[20rem] bg-white relative bottom-5"></div>
      <div className="h-[25vh] w-[90vw] bg-[#a2d2ff] rounded-lg flex justify-center items-center ">
      <div className="qoute h-[20vh] w-[80vw] qoute"></div>
         
      </div>
      <div className="mt-8  text-[1.4rem] text-white ">
        <span className="right-[15vw] relative">
          <button className=" head border-2 border-sky-50  h-[2.4rem] w-[7rem] text-[1.2rem] rounded-md hover:bg-[#1389f1] ">
            Previous
          </button>
        </span>
        <span className="left-[15vw] relative head text-[1rem]">
          <button className="text-[1.2rem] head border-2 border-sky-50  h-[2.4rem] w-[7rem] rounded-md  hover:bg-[#1389f1] next">
            Next
          </button>
        </span>
      </div>
    </div>
  );
}

export default Qoute;
