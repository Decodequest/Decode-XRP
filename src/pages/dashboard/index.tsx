import React from "react";
import Navbar from "./Navbar";

const Dashboard = () => {
    const CourseAdavanceDetails = [
        {
            name: "Xrp",
            image: "/XRP.png"
        },
        {
            name: "Solidity",
            image: "/Solidity.png"
        },
        {
            name: "Rust",
            image: "/RustCourse.png"
        },
        {
            name: "Cario",
            image: "/Cario.png"
        }
    ]

    const CourseBeginnerDetails = [
        {
            name: "XrpBasics",
            image: "/XrpBasics.png"
        },
        {
            name: "SolidityBasics",
            image: "/SolidityBasics.png"
        },
        {
            name: "RustBasics",
            image: "/RustBasics.png"
        }
    ]

    return (
        <main className="bg-black w-full">
            <Navbar/>
            <div className="mx-auto max-w-6xl pt-14">
                <div className="flex justify-between p-8 border border-black rounded-xl bg-[#0C0D13] shadow-lg">
                    <div className="flex flex-col justify-between text-white">
                        <div>
                            <h1 className="text-2xl pb-6">Woohhhoooo! You’ve earned your first NFT! Start minting now.</h1>
                            <p className="text-sm italic"> Here’s how to get started with your first NFT minting</p>
                                <ul className="text-sm italic">
                                <li>lorem ipsum dolor sit amet</li>
                                <li>lorem ipsum dolor sit amet</li>
                                <li>lorem ipsum dolor sit amet</li>
                            </ul>
                        </div>
                        <div>
                            <button className="bg-white px-8 py-3 text-black rounded-lg">Mint NFT</button>
                        </div>
                        
                        
                    </div>
                    <div>
                        <img src="/Frame.png"/>
                    </div>
                </div>
                <div className="pt-[48px]">
                    <p className="text-white text-[25px] pb-6">Get started on your quests</p>
                    <div className="flex gap-x-6">
                        {CourseAdavanceDetails.map((details, index) => {
                            return <img src={details.image} className="w-[270px] h-[350px]"/>
                        })}
                    </div>
                </div>
                <div className="pt-[48px]">
                    <p className="text-white text-[25px] pb-6">Compete with your fellow warriors</p>
                    <div className="flex gap-x-6">
                        {CourseBeginnerDetails.map((details, index) => {
                            return <img src={details.image} className="w-[270px] h-[350px]"/>
                        })}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Dashboard;