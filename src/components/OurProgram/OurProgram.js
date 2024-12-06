import React from "react";
import ProgramCard from "./ProgramCard";

export default function OurProgram() {
  //   const programs = [
  //     { title: "National forum lifelong learning forum", icon: "💬" },
  //     { title: "Lifelong Learning Centers", icon: "🏢", isGreen: true },
  //     { title: "Lifelong Learning Club", icon: "📖" },
  //     { title: "Lifelong learning City", icon: "🏙️" },
  //     { title: "Engagement", icon: "🖼️", isGreen: true },
  //     { title: "Voluntary", icon: "🤲" },
  //   ];

  return (
    <div >
      <div className=" flex flex-col items-center justify-center text-[#0F69B7]">
        <h1 className="text-3xl font-bold ">Our Program</h1>
        <p className="py-4">
          Our programs empower lifelong learning by offering diverse
          opportunities for continuous growth and development.
        </p>
      </div>
      {/* <div className="grid grid-cols-3 gap-4 mx-10">
        <ProgramCard />
      </div> */}
    </div>
  );
}
