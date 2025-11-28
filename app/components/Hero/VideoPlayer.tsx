"use client";
import React, { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import video from "@/videos/cini.mp4";
import NextVideo from "next-video";
import Navbar from "../Navbar";

const VideoPlayer = () => {
  const videoStracher = useRef(null);
  const framer = useRef(null);
  const navRef = useRef(null);
  const [mouseMovementTracker, setTacker] = useState({ x: 0, y: 0 });
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: framer.current,
        scrub: true,
        pin: true,
        // end: "bottom -100%",
        // markers: true,
      },
    });
    tl.to(navRef.current, {
      translateY: "-100%",
      duration: 1,
      ease: "power1.in",
      scrollTrigger: {
        trigger: navRef.current,
        scrub: 1,
        start: "top top",
        // markers: true,
        // end: "bottom 80%",
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
      borderRadius: "10px",
      duration: 5,
      ease: "power1.in",
      delay: 4,
      width: "95vw",
      height: "95vh",
      marginTop: "5rem",
    });
    tl.to(navRef.current, {
      translateY: 0,
      duration: 1,
      ease: "power1.in",
      scrollTrigger: {
        trigger: navRef.current,
        scrub: 1,
        start: "top top",
        // markers: true,
        end: "bottom 80%",
      },
    });
  }, []);

  const mouseRef = useRef(null);

  useEffect(() => {
    gsap.to(mouseRef.current, {
      translateX: mouseMovementTracker.x,
      translateY: mouseMovementTracker.y,
      ease: "power.in",
      opacity: 1,
      duration: 1,
    });
  }, [mouseMovementTracker]);

  return (
    <section
      ref={framer}
      onMouseMove={(e) => {
        setTacker({
          x: e.clientX,
          y: e.clientY,
        });
      }}
      className=" h-screen flex items-center  justify-center"
    >
      <Navbar navRef={navRef} />
      <div
        ref={videoStracher}
        className="player w-full  h-full rounded-2xl    items-center my-5 overflow-hidden"
      >
        <div
          ref={mouseRef}
          className={`absolute w-[50px] h-[50px]  opacity-0 translate-y-[50%] translate-x-[50%]  bg-white z-20 rounded-full text-black text-center flex items-center justify-center font-semibold uppercase shadow-2xl shadow-black cursor-pointer`}
        >
          <h4 className="text-sm">play</h4>
        </div>
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
