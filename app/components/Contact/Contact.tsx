import NextVideo from "next-video";
import React from "react";
import hand from "@/public/gif/hand.gif";

const Contact = () => {
  return (
    <section className="h-screen flex flex-col items-center">
      {/* top */}
      <div className="grid grid-cols-2 w-full items-center gap-5  px-10  py-5 mt-20">
        <div className="flex gap-3 text-xl justify-start items-start">
          <div className="w-[140px] text-sm">
            <h4>Our Socials:</h4>
          </div>
          <div className="grid grid-cols-3 uppercase items font-semibold   text-sm w-full   ">
            <h3 className=" textce w-fit">Instagram</h3>
            <h3 className=" textce w-fit">Facebook</h3>
            <h3 className=" textce w-fit">Linkedin</h3>
            <h3 className=" textce w-fit">Twitter</h3>
            <h3 className=" textce w-fit">tiktok</h3>
          </div>
        </div>
        {/*  */}
        <div className="flex text-xl gap-3 justify-end">
          <div>
            <div className="text-sm">
              <h4>Work with us:</h4>
            </div>
          </div>
          <div className="text-sm font-semibold">
            <h1>rabbitstudio@gmail.com</h1>
            <h1>btm - 0</h1>
          </div>
        </div>
      </div>

      {/* Hand */}
      <div className="h-[400px]  w-[50%] ">
        <img
          src={hand.src}
          //   controls={false}
          //   autoplay
          //   loop
          //   muted
          className="h-full w-full object-contain "
        />
      </div>

      {/*  */}
      <div className="w-[75%] text-center">
        <h1 className="text-6xl font-semibold">
          Let's devise a plan and make a real impact.
          <span className="text-red-500">Let's make it big!</span>
        </h1>
      </div>
    </section>
  );
};

export default Contact;
