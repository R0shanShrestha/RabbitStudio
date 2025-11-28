"use client";
import Link from "next/link";
import logo from "../../public/logo.png";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
const Navbar = ({ navRef }: { navRef: any }) => {
  // const navRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  // useGSAP(() => {
  //   gsap.to(navRef.current, {
  //     translateY: "-100%",
  //     scrollTrigger: {
  //       trigger: navRef.current,
  //       scrub: 1,
  //       start: "top top",
  //       markers: true,
  //       // end: "bottom 80%",
  //     },
  //   });
  // });

  return (
    <nav
      ref={navRef}
      className="uppercase  h-fit bg-linear-60 from-white/10 backdrop-blur-xs  to-black/10  top-0 w-full p-5 fixed  z-20 py-7 px-10 flex justify-between items-center"
    >
      <div>
        <img src={logo.src} alt="logo" />
      </div>
      <div className="text-sm hover:font-semibold ">
        <Link href={"work"}>Work</Link>
      </div>
      <div className="text-sm hover:font-semibold ">
        <Link href={"project"}>Project</Link>
      </div>
      <div className="text-sm hover:font-semibold ">
        <Link href={"about"}>About</Link>
      </div>
      <div className="text-sm hover:font-semibold ">
        <Link href={"contact"}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
