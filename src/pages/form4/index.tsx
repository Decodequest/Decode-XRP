import Container from "@/components/Container";
import Link from "next/link";
import React from "react";

const Form4 = () => {
  const files = [
    {
      image: "Frame 522.png",
    },
    {
      image: "Frame 528.png",
    },

    {
      image: "Frame 529.png",
    },
    {
      image: "Frame 530.png",
    },
    // {
    //   image: "Frame 531.png",
    // },
    // {
    //   image: "Frame 532.png",
    // },
  ];
  return (
    <Container>
      <div className="bg-[#080714] w-full bg-opacity-[70%] h-[600px]">
        {/* <p className="text-white">Connect wallet to start learning</p> */}
        <div className=" flex flex-col pl-4">
          <p className="text-white text-center flex  text-[29px] pt-8">
            You are alomst Done !
          </p>
          <div className="pt-6">
          
              <div
                className="bg-[#fff] h-1.5 w-1 rounded-full"
                style={{ width: "20%" }}
              ></div>
              <p className="text-sm text-[#F5F5F5] pt-10 italic">
                Are there any specific blockchain platforms <br />
                or lnguages you're keen on exploring?
              </p>
         
            <div className="grid grid-cols-2 gap-y-0 ">
              {files.map((detail) => (
                <div>
                  <img src={detail.image} alt="image"  className="w-[150px] h-[170px]"/>
                </div>
              ))}
            </div>
            <div className="flex  pt-1 pl-4 gap-6">
              <Link href="/form3">
                <button
                  type="button"
                  className="bg-black px-10 py-2 text-xs font-bold text-white border border-1 border-white"
                >
                  Back
                </button>
              </Link>
              <button
                type="button"
                className="bg-white  w-[240px] text-sm font-bold text-black"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Form4;
