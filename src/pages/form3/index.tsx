import Container from "@/components/Container";
import { useStateContext } from "@/context/ThemeContext";
import Link from "next/link";
import React, { useState } from "react";

const Form3 = () => {
  const { userDeatils, setUserDetails } = useStateContext();
  const [skills, setSkills] = useState("");

  const SkillsObj = ["Beginner", "Intermediate", "Advance"];
  return (
    <Container>
      <div className="bg-[#080714] w-full bg-opacity-[70%]">
        <div className=" flex flex-col p-8">
          <p className="text-white text-center flex  text-[29px] pt-10">
            Before we dive in, help <br />
            &nbsp; help us know you better
          </p>

          <div className="pt-6">
            <div
              className="bg-[#fff] h-1.5 w-1 rounded-full"
              style={{ width: "60%" }}
            ></div>
          </div>
          <div>
            <p className="w-full text-sm text-[#F5F5F5] pt-10 italic">
              How woyld you rate your current knoweldge of blockchain
              technology?
            </p>
          </div>
          <div className="pt-10 flex flex-col gap-y-10 w-full">
            {SkillsObj.map((item, index) => {
              return (
                <div
                  className={`w-full border  text-white p-4 bg-black ${
                    skills === item
                      ? " border-1 border-white"
                      : "border-gray-800"
                  }`}
                >
                  <label key={index} className="w-full items-center">
                    <input
                      type="radio"
                      name={item}
                      value={item}
                      onChange={() => setSkills(item)}
                      checked={skills === item}
                      className="mr-2 px-10"
                    />
                    {item}
                  </label>
                </div>
              );
            })}
          </div>
          <div className="flex pt-10 gap-6">
            <Link href="/form2">
              <button
                type="button"
                className="bg-black px-10 py-3 text-xs font-bold text-white border border-1 border-white"
              >
                Back
              </button>
            </Link>
            <Link href="/form4">
              <button
                type="button"
                className="bg-white px-8 py-3 w-[220px] text-sm font-bold text-black"
                onClick={() => {
                  setUserDetails((prevState: any) => ({
                    ...prevState,
                    Skills: skills,
                  }));
                }}
              >
                Continue
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Form3;
