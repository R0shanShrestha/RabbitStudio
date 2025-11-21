import React from "react";
import logo from "../../public/logo.png";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" overflow-hidden py-20 p-5 px-10 text-[16px]  h-fit grid grid-cols-3  justify-between">
      {/* 1 */}
      <div className="flex justify-between h-full flex-col gap-10">
        <h1 className="text-4xl font-semibold">
          I would love to <br /> hear from you.
        </h1>
        <p className="text-sm">
          Feel free to reach out if you want to <br /> collaborate with us, or
          simply have a chat.
        </p>
        {/* <div></div> */}
        <img src={logo.src} alt="logo" className="w-[100px]" />
      </div>
      {/* 2 */}
      <div className="flex flex-col justify-between items-center h-full gap-10 ">
        <div className="flex flex-col gap-10 ">
          <p>
            Kharaayo is a multidisciplinary ecosystem empowering individuals and
            businesses through education, technology, design and marketing.{" "}
          </p>
          <p>
            Kharaayo is a multidisciplinary ecosystem empowering individuals and
            businesses through education, technology, design and marketing.{" "}
          </p>
        </div>
        <strong className="text-sm">@2026 Studo,demo. All Right Reserve</strong>
      </div>
      {/* 3 */}
      <div className=" flex items-end flex-col justify-between h-full">
        <div className="flex flex-col gap-3 items-end uppercase">
          <Link href={"#"}>Home</Link>
          <Link href={"#"}>Work</Link>
          <Link href={"#"}>About</Link>
          <Link href={"#"}>Projects</Link>
        </div>
        <strong className="text-sm">Privacy . Terms</strong>
      </div>
    </footer>
  );
};

export default Footer;
