"use client";
import React, { useRef } from "react";
import t2 from "../../public/project1.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import video from "../../videos/ts.mp4";
import NextVideo from "next-video";
import Navbar from "./Navbar";

const VideoPlayer = () => {
  const videoStracher = useRef(null);
  const framer = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: framer.current,
        scrub: true,
        pin: true,
        end: "bottom -100%",

        // markers: true,
      },
    });
    tl.to(videoStracher.current, {
      borderRadius: 0,
      duration: 5,
      height: "100vh",
      width: "100vw",
      padding: 0,
      margin: 0,
    });

    tl.to(videoStracher.current, {
      borderRadius: 0,
      duration: 5,
      ease: "power1.in",
      delay: 4,
      width: "95vw",
      height: "95vh",
      paddingTop: "50px",
      margin: 0,
    });
  }, []);
  return (
    <section
      ref={framer}
      className=" h-screen   flex items-center  justify-center"
    >
      <Navbar />

      <div
        ref={videoStracher}
        className="player w-[95vw] pt-[50px]  h-[95vh] my-5 rounded-2xl overflow-hidden"
      >
        <NextVideo src={video} className="h-full w-full object-cover" />
        {/* <img src={t2.src} alt="test" className="h-full w-full object-cover" /> */}
      </div>
    </section>
  );
};

export default VideoPlayer;
