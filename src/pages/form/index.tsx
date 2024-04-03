import Container from "@/components/Container";
import { useStateContext } from "@/context/ThemeContext";
import Link from "next/link";
import React, { useState } from "react";

const Form = () => {
  const { userDeatils, setUserDetails, account } = useStateContext();
  const [name, setName] = useState();

  return (
    <Container>
      <div className="bg-[#080714] w-full bg-opacity-[70%] h-[500px]">
        <p className="text-white text-center flex justify-center text-[29px] p-10">
          Before we dive in, help <br />
          help us know you better
        </p>
        <div className="pl-14">
          <div className="w-[90%] bg-[#080714]">
            <div
              className="bg-[#fff] h-1.5 rounded-full"
              style={{ width: "20%" }}
            ></div>
          </div>
          <p className="text-[20px] text-[#fff] pt-10">
            What should we call you?
          </p>
          <label
            htmlFor="Name"
            className="pt-10 block text-sm font-medium leading-6 text-[#fff]"
          >
            Name
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="search"
              id="search"
              className="block text-white w-[90%]  border-1 border-[#D7D7D7] py-1.5 px-3 bg-[#000000]"
              onInput={(e: any) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="pt-8 pl-14">
          <Link href="/form2">
            <button
              type="button"
              className="rounded w-[90%] bg-[#fff] px-2 py-2 text-sm font-semibold text-black"
              onClick={() => {
                setUserDetails((prevState: any) => ({
                  ...prevState,
                  Name: name,
                  Account: account
                }));
              }}
            >
              Continue
            </button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Form;
