import Container from "@/components/Container";
import React from "react";

const Form2 = () => {
  const files = [
    {
      image: "Frame 22.png",
    },
    {
      image: "Frame 22.png",
    },

    {
      image: "Frame 23.png",
    },
    {
      image: "Frame 24.png",
    },
  ];
  return (
    <Container>
      <div className="bg-[#080714] w-full bg-opacity-[70%] h-[650px]">
        {/* <p className="text-white">Connect wallet to start learning</p> */}

        <p className="text-white text-center flex justify-center text-[29px] pt-10">
          Before we dive in, help <br />
          help us know you better
        </p>
        <div className="p-4">
          <div className="w-[90%] bg-[#080714]">
            <div
              className="bg-[#fff] h-1.5 rounded-full"
              style={{ width: "20%" }}
            ></div>
          </div>
          <p className="text-sm text-[#F5F5F5] pt-10 italic">
            What's your primary role in learning <br />
            blockchain technology
          </p>
        </div>

        <div className="grid grid-cols-2 pt-4 px-2 gap-2">
          {files.map((detail) => (
            <div>
              <img src={detail.image} alt="image" />
            </div>
          ))}
        </div>
        <div className="flex  pt-6 pl-4 gap-6">
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
    </Container>
  );
};

export default Form2;
