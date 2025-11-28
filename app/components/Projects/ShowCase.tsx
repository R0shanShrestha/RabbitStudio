"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

const ShowCase = () => {
  gsap.registerPlugin(ScrollTrigger);

  const cards = [
    {
      url: "https://img.freepik.com/free-photo/professional-photo-studio_23-2148899871.jpg?w=740&q=80",
      title: "Professional Studio",
      desc: "A sleek studio setup ideal for portrait and product shoots.",
    },
    {
      url: "https://img.freepik.com/free-photo/film-production-lights_23-2148889464.jpg?w=740&q=80",
      title: "Cinematic Lighting",
      desc: "Lights arranged for cinematic and film‑style shoots.",
    },
    {
      url: "https://img.freepik.com/free-photo/modern-recording-studio_23-2148885432.jpg?w=740&q=80",
      title: "Audio Studio",
      desc: "Recording studio setup with modern equipment and acoustic design.",
    },
    {
      url: "https://img.freepik.com/free-photo/cyclorama-wall-studio_23-2148903412.jpg?w=740&q=80",
      title: "Cyclorama Studio",
      desc: "Clean cyclorama wall setup for product photography and clean shots.",
    },
    {
      url: "https://img.freepik.com/free-photo/studio-light-setup_23-2148891222.jpg?w=740&q=80",
      title: "Portrait Lighting",
      desc: "Professional light arrangement for portrait photography sessions.",
    },
    {
      url: "https://img.freepik.com/free-photo/video-production-studio_23-2149351987.jpg?w=740&q=80",
      title: "Video Production Studio",
      desc: "Full video production environment with camera rigs and lighting.",
    },
    {
      url: "https://img.freepik.com/free-photo/studio-backdrop-equipment_23-2148894432.jpg?w=740&q=80",
      title: "Backdrop Studio",
      desc: "Variety of backdrops and equipment for creative photo sessions.",
    },
    {
      url: "https://img.freepik.com/free-photo/music-studio-with-instruments_23-2148732188.jpg?w=740&q=80",
      title: "Music Recording Studio",
      desc: "Studio equipped for music production, vocals and instrument recording.",
    },
    {
      url: "https://img.freepik.com/free-photo/green-screen-studio_23-2148823341.jpg?w=740&q=80",
      title: "Green Screen Studio",
      desc: "Green‑screen room setup ready for VFX and video editing work.",
    },
  ];

  //
  const container: any = useRef(null);
  useGSAP(
    () => {
      const childCard = document.querySelectorAll(".card");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".anibox",
          // markers: true,
          start: "top 90%",
          end: "bottom 80%",
          scrub: 1,
        },
      });
      tl.to(".comeLeft", {
        duration: 0.6,
        opacity: 1,
        translateX: 0,
      });
      tl.to(".comeRight", {
        opacity: 1,
        duration: 0.6,
        translateX: 0,
      });
      tl.to(".comeDown", {
        opacity: 1,
        duration: 0.6,
        translateY: 0,
      });
      tl.to(".viewProject", {
        opacity: 1,
        duration: 0.6,
        translateY: 0,
      });

      childCard.forEach((crd) => {
        ScrollTrigger.create({
          trigger: crd,
          // markers: true,
          start: "top top",
          end: "top top",
          endTrigger: childCard[childCard.length - 1],
          pin: true,
          pinSpacing: false,
        });
      });
    },
    { scope: container }
  );

  return (
    <div
      className="h-full w-full flex flex-col items-center parent"
      ref={container}
    >
      {/* Heading */}
      <div className="flex flex-col gap-10 items-center  h-fit p-5 w-fit">
        <div className=" w-96 flex flex-col gap-5  anibox">
          <h1 className="text-6xl flex flex-col font-inter24 font-semibold">
            <span className="comeLeft -translate-x-full   opacity-0">OUR</span>
            <span className="px-15  opacity-0 comeRight translate-x-full">
              PROJECTS
            </span>
          </h1>
          <p className="font-light opacity-0 text-sm comeDown translate-y-10 ">
            Storytelling through design - a curated selection of over 100
            projects worldwide.
          </p>
        </div>
        <a
          href="#"
          className="underline viewProject uppercase text-sm  translate-y-10 opacity-0"
        >
          View Projects
        </a>
      </div>
      {cards.map((el, idx) => (
        <div
          className="h-full w-full  rounded-5xl z-10  card  relative flex flex-col items-center "
          key={idx}
        >
          <div className="flex justify-between items-center absolute text-white p-5 w-full top-10 left-0 z-20">
            <h1 className="text-4xl uppercase max-w-[400px] font-semibold">
              {el.title}
            </h1>
            <h2 className="text-xl max-w-[400px] text-right">{el.desc}</h2>
          </div>
          <img
            src={el.url}
            alt="na"
            className="w-full h-full rounded-2xl  max-h-svh object-cover object-top"
          />
        </div>
      ))}
    </div>
  );
};

export default ShowCase;
