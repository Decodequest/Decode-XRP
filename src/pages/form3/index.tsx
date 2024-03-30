import Container from "@/components/Container";
import React from "react";

const Form3 = () => {
  return (
    <Container>
      <div className="bg-[#080714] w-full bg-opacity-[70%] h-[600px]">
        {/* <p className="text-white">Connect wallet to start learning</p> */}
<div className=" flex flex-col p-6">
<p className="text-white text-center flex  text-[29px] pt-10">
          Before we dive in, help <br />
         &nbsp; help us know you better
        </p>
       
          <div className="pt-6">
            <div
              className="bg-[#fff] h-1.5 w-1 rounded-full"
              style={{ width: "20%" }}
            >

            </div>
        
          <p className="text-sm text-[#F5F5F5] pt-10 italic">
            How woyld you rate your current <br />
            knoweldge of blockchain technology?
          </p>
        </div>

        <div className="pt-10">
            <div
              className="bg-[#fff] h-1.5 w-1 rounded-full"
              style={{ width: "20%" }}
            ></div>
          </div>
          <div className="pt-10 pl-4">
          <button
        type="button"
        className="bg-black px-10 py-3 w-[140px] text-xs font-bold text-white border border-1 border-gray-600"
      >
        Beginner
      </button>
          </div>
        
        <div className="flex  pt-[124px]  gap-6">
        <button
        type="button"
        className="bg-black px-10 py-3 text-xs font-bold text-white border border-1 border-white"
      >
        Back
      </button>
      <button
        type="button"
        className="bg-white  w-[260px] text-sm font-bold text-black"
      >
        Continue
      </button>
        </div>
</div>
       
      </div>
    </Container>
  );
};

export default Form3;
