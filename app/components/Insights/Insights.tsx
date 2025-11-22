"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { BsArrowRight } from "react-icons/bs";

const Insights = () => {
  const mockupData = [
    {
      category: "design",
      label:
        "Best Practices for Using 3D Motion Design in Social Media Campaigns",
      time: "1 min read",
      date: "Jan 1, 2025",
    },
    {
      category: "development",
      label: "How to Build Faster Websites with Next.js in 2025",
      time: "2 min read",
      date: "Feb 12, 2025",
    },
    {
      category: "ui-ux",
      label: "Modern UI Patterns That Actually Improve User Experience",
      time: "3 min read",
      date: "Mar 5, 2025",
    },
    {
      category: "marketing",
      label: "Why Short-Form Content Dominates Social Media",
      time: "1 min read",
      date: "Apr 20, 2025",
    },
    {
      category: "branding",
      label: "How to Create a Strong Visual Identity for Your Product",
      time: "2 min read",
      date: "May 15, 2025",
    },
  ];

  return (
    <section className="px-10 z-40  py-20 gap-20 flex flex-col ">
      <div className="heading flex justify-between items-center">
        <h1 className="text-4xl font-semibold">Insights</h1>
        <h2 className="flex gap-1 items-center uppercase text-sm">
          More Thoughts <BsArrowRight className="-rotate-45" />
        </h2>
      </div>

      <div className="flex flex-col">
        {mockupData.map((item, idx) => {
          const bgRef = useRef(null);
          const hoverBoxRef = useRef(null);
          const bgCatg = useRef(null);

          return (
            <div
              key={idx}
              onMouseEnter={() => {
                gsap.to(bgRef.current, {
                  background: "white",
                  color: "black",
                });
                gsap.to(bgCatg.current, {
                  background: "white",
                  color: "black",
                  border: "none",
                });
                gsap.to(hoverBoxRef.current, {
                  display: "flex",
                  background: "white",
                  opacity: 0.2,
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  borderRadius: 0,
                  zIndex: -1,
                  top: 0,
                  left: 0,
                });
              }}
              onMouseLeave={() => {
                gsap.to(bgRef.current, {
                  background: "white",
                  color: "black",
                });
                gsap.to(bgCatg.current, {
                  background: "transparent",
                  color: "white",
                  border: "solid white 1px",
                });
                gsap.to(hoverBoxRef.current, {
                  display: "none",
                  width: 0,
                });
              }}
              className="flex justify-start  hover:border-none border-t gap-10 py-10 text-xl px-5 relative"
            >
              <div className="w-[400px] flex items-center">
                <div
                  ref={bgCatg}
                  className="border px-8 py-4 w-fit rounded-full catg"
                >
                  <h1>{item.category}</h1>
                </div>
              </div>

              <div className="flex w-full">
                <h1 className="text-3xl">{item.label}</h1>
              </div>

              <div className="flex gap-20 items-center w-[500px] justify-end">
                <div>
                  <h1>{item.time}</h1>
                  <h1>{item.date}</h1>
                </div>

                <div
                  ref={hoverBoxRef}
                  className="absolute bg-white h-full top-0 left-0 hidden"
                ></div>

                <div
                  ref={bgRef}
                  className="bg-white h-[50px] w-[50px] text-black rounded-full flex items-center justify-center font-bold"
                >
                  <BsArrowRight className="-rotate-45" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex gap-20  pt-10">
        <div className=" w-[30%]">
          <h1 className="text-4xl font-semibold">What we do</h1>
        </div>
        <div className="w-full">
          <h2 className="text-3xl font-light">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
            quas nam nihil animi culpa corrupti repellendus harum autem
            obcaecati nostrum.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Insights;
