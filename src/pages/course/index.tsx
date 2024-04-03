import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import React from "react";

const Course = [
  {
    name: "Course1",
    image: "/xrpCourse/course1.png",
    heading: "What is XRP Ledger",
    details:
      "Skills to unlock: Blockchain Understanding, Security Practices, API Utilisation, Strategic Analysis",
    link: "/course/first-topic",
  },
  {
    name: "Course2",
    image: "/xrpCourse/course2.png",
    heading: "What is XRP and why is it valuable?",
    details:
      "Skills to unlock: Cryptocurrency Literacy, Fin tech Insight, Risk Management, Global Payment Systems",
    link: "/course/second-topic",
  },
  {
    name: "Course3",
    image: "/xrpCourse/course3.png",
    heading: "Wallets on XRP Ledger",
    details:
      "Skills to unlock: Wallet Management, Security Awareness, Technical Proficiency, Decision Making",
    link: "/course/third-topic",
  },
];

const LearnDashboard = () => {
  return (
    <div className="bg-[#070C14] pb-24">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="w-full pl-4">
          <div className="relative">
            <div className="text-blue">
              <img className="absolute pt-14" src="/landing.png" />
              <div className="absolute left-16 bottom-[130px] flex text-white">
                <Link href="/course/first-topic">
                  <button className="mr-8 bg-white text-black font-semibold rounded-md py-3 px-6">
                    Start Learning
                  </button>
                </Link>
                <button className="mr-8 text-[#9C9EA1] border border-[#9C9EA1] font-semibold rounded-md py-3 px-8">
                  <img className="inline pr-2" src="/mintImage.png" />
                  Mint NFT
                </button>
              </div>
            </div>
            <div className="flex justify-end">
              <img src="/firstStageEgg.png" />
            </div>
          </div>
          <div className="text-white pt-12">
            <p>Course Content</p>
            <div className="flex justify-between pr-12">
              <div>
                {Course.map((details, index): any => {
                  return (
                    <Link href={details.link}>
                      <div key={index} className="flex pt-6">
                        <img src={details.image} />
                        <div className="pl-4 w-[487px] mt-4">
                          <div className="flex justify-between">
                            <div>
                              <h1 className="text-[20px] inline">
                                {details.heading}
                              </h1>
                              <p className="bg-[#1E1E1E] w-[50px] inline ml-4 p-2 text-sm">
                                10XP
                              </p>
                            </div>
                            <div>
                              <img
                                className="inlinejustify-end"
                                src="/nextArrow.png"
                              />
                            </div>
                          </div>
                          <p className="pt-2 text-[16px] text-[#B8B8B8]">
                            {details.details}
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
              <div>
                <p>Skill Graph</p>
                <img src="/graph.png" />
                <div className="flex justify-center pt-8">
                  <button className="border border-white px-6 py-2 m-auto">
                    <img className="inline pr-2" src="/linkedin-icon.png" />
                    Share on Linkedln
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnDashboard;
