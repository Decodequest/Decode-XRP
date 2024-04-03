import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import { useStateContext } from "@/context/ThemeContext";
import React from "react";

const Form5 = () => {
  const { account, userDeatils } = useStateContext();
  const files = [
    {
      image: "Frame 46.png",
    },
    {
      image: "Frame 47.png",
    },

    {
      image: "Frame 48.png",
    },
    {
      image: "Frame 49.png",
    },
    {
      image: "Frame 50.png",
    },
  ];
  const Certificates = [
    {
      image: "solidityCertificate.png",
    },
    {
      image: "Rust.png",
    },

    {
      image: "XRPL.png",
    },
    {
      image: "cairo.png",
    },
  ];
  return (
    <main className="bg-background w-full bg-decode-black">
      <Navbar/>
      <div className="mx-auto max-w-6xl pt-14">
        <h1 className="font-normal text-white text-[29px] pb-6">My Profile</h1>
        <div className="">
          <div className="bg-[#070C14] px-12 py-8 rounded-xl">
            <div className="flex flex-col  pt-10">
              <div className="flex justify-between ">
                <div className="flex justify-between gap-2">
                  <img src="/Ellipse 4.png" alt="profile photo" />
                  <div>
                    <p className="pt-8 text-white">
                      {userDeatils.Name} <br />
                      Developer
                    </p>
                  </div>
                </div>
                <div>
                  <button
                    type="button"
                    className="bg-black px-10 py-2 text-xs font-bold text-white border border-1 border-white"
                  >
                    Edit Profile
                  </button>
                </div>
              </div>

              <div className="flex justify-between pt-5 ">
                <div className="text-white">MEMBER SINCE MAR, 2024</div>
                <div className="flex gap-2">
                  <img src="/LinkedinLogo.png" alt="likedin" />
                  <img src="/GithubLogo.png" alt="Github" />
                  <img src="/TwitterLogo.png" alt="Twitter" />
                  <img src="/InstagramLogo.png" alt="Instagram" />
                </div>
              </div>
              <div className="pt-5">
                <p className="text-md leading-1 text-white">Basic details</p>
                <div className="flex justify-between pt-5 text-[#ADADAD]">
                  <p className="text-sm">Primary Goal</p>
                  <p>Current knoweldge of blockchain technology</p>
                </div>
                <div className="flex justify-between  text-[#FFF]">
                  <p className="text-sm">Carrer Advancement</p>
                  <p className="px-[220px]">Beginner</p>
                </div>
              </div>
              <div className="pt-10">
                <p className="text-white text-sm">Learning stats for solidity</p>
                <div className="flex pt-4 gap-4">
                  {files.map((picture) => (
                    <div>
                      <img
                        src={picture.image}
                        alt="image"
                        className="w-[180px] h-[180px]"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-5">
                <p className="text-white text-sm">Certificates</p>
                <div className="flex gap-2 pt-3">
                  {Certificates.map((course) => (
                    <div>
                      <img src={course.image} alt="courses" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Form5;
