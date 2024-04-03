import Container from "@/components/Container";
import Link from "next/link";
import React from "react";
import db from "../../../firebase-config";
import { doc, setDoc, collection, getDocs } from "@firebase/firestore";
import { useStateContext } from "@/context/ThemeContext";
import { useRouter } from 'next/router';

const Form4 = () => {
  const { userDeatils, setUserDetails, account } = useStateContext();
  const router = useRouter();

  const files = [
    {
      image: "Frame 522.png",
      name: "Solidity"
    },
    {
      image: "Frame 528.png",
      name: "Rust"
    },

    {
      image: "Frame 529.png",
      name: "Go"
    },
    {
      image: "Frame 530.png",
      name: "Javascript"
    },
    // {
    //   image: "Frame 531.png",
    // },
    // {
    //   image: "Frame 532.png",
    // },
  ];

  const AddData = async () => {
    console.log("userDeatils", userDeatils);
    
    try {
      await setDoc(doc(db, 'Decode', `${account}`), {
        ...userDeatils
      })
      console.log("Added to DB");
      router.push("/dashboard")
    }catch(err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <div className="bg-[#080714] w-full bg-opacity-[70%] h-[600px]">
        {/* <p className="text-white">Connect wallet to start learning</p> */}
        <div className="flex flex-col pl-4">
          <p className="text-white text-center flex  text-[29px] pt-8">
            You are alomst Done !
          </p>
          <div className="pt-6 pr-4">
            <div
              className="bg-[#fff] h-1.5 w-1 rounded-full"
              style={{ width: "100%" }}
            ></div>
            <p className="text-sm text-[#F5F5F5] pt-10 italic">
              Are there any specific blockchain platforms <br />
              or lnguages you're keen on exploring?
            </p>

            <div className="grid grid-cols-2 gap-y-0 ">
              {files.map((detail, index) => (
                <div key={index}>
                  <button onClick={() => setUserDetails((prevState: any) => ({
                  ...prevState,
                  Intrest: detail.name,
                }))
                }>
                    <img
                      src={detail.image}
                      alt="image"
                      className="w-[150px] h-[170px]"
                    />
                  </button>
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
                  className="bg-white px-10 py-3 text-sm font-bold text-black w-[260px]"
                  onClick={AddData}
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
