import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import React from "react";

  const Course = [
    { name: 'Course1', image:"/xrp/course1.png", link: "/course" },
    { name: 'Course2', image:"/xrp/course2.png", link: "#" },
    { name: 'Course3', image:"/xrp/course3.png", link: "#" },
    { name: 'Course4', image:"/xrp/course4.png", link: "#" },
  ]

const LearnDashboard = () => {
    return (
        <div className="bg-[#070C14] pb-24">
            <Navbar/>
            <div className="flex"> 
               <Sidebar/>
                <div className="pl-4 pt-14">
                    <img src="/dalle.png"/>
                    <div className="flex gap-x-6 pt-12">
                        <button className="bg-white text-[#070C14] text-md font-semibold rounded-full px-8 py-2" style={{ fontFamily: "josefin sans"}}>Not started (4)</button>
                        <button className="bg-transperant text-[#1C2129] border border-[#1C2129] text-md font-semibold rounded-full px-8 py-4" style={{ fontFamily: "Belleza"}}>On Going(0)</button>
                        <button className="bg-transperant text-[#1C2129] border border-[#1C2129] text-md font-semibold rounded-full px-8 py-4" style={{ fontFamily: "Belleza"}}>Completed(0)</button>
                    </div>
                    <div className="flex gap-x-6 pt-12">
                        {Course.map((details, index) => {
                            return (
                                <Link href={details.link}>
                                    <img key={index} src={details.image}/>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LearnDashboard;