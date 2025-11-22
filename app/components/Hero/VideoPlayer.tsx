"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import video from "@/videos/ts.mp4";
import NextVideo from "next-video";
import Navbar from "../Navbar";

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
      margin: 0,
    });

    tl.to(videoStracher.current, {
      borderRadius: "1rem",
      duration: 5,
      ease: "power1.in",
      delay: 4,
      width: "90vw",
      height: "85vh",

      marginTop: "5rem",
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
        className="player w-[90vw]  mt-20 h-[85vh]    items-center my-5 rounded-2xl overflow-hidden"
      >
        <NextVideo
          src={video}
          controls={false}
          autoplay
          loop
          muted
          className="h-full w-full object-cover"
        />
        {/* <img src={t2.src} alt="test" className="h-full w-full object-cover" /> */}
      </div>
    </section>
  );
};

export default VideoPlayer;
