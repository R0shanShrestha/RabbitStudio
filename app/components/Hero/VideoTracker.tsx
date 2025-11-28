"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef, useState } from "react";
import Navbar from "../Navbar";

const VideoTracker = () => {
  const canvaRef = useRef(null);
  const parentRef = useRef(null);
  const [frame, setFrame] = useState({ currentFrame: 0, maxIndex: 223 });
  const [totalImages, setTotalImages] = useState(0);
  const [imagesArr, setImagesArr] = useState([]);

  //
  const imageCreator = () => {
    const tempArr: any = [];
    for (let i = 1; i <= frame.maxIndex; i++) {
      const imageUri = `/frames/robo${i.toString().padStart(3, "0")}.png`;
      const img = new Image();
      img.src = imageUri;
      img.onload = () => {
        console.log("images loaded");
        setTotalImages((n) => (n = n + 1));
      };
      tempArr.push(img);
    }
    setImagesArr(tempArr);
  };

  const imageLoader = (idx: number) => {
    const canvas: null | any = canvaRef.current;

    if (!canvas || !imagesArr[idx]) {
      return;
    }
    const ctx = canvas.getContext("2d");
    const img: any = imagesArr[idx];

    const scale = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * scale;
    canvas.height = window.innerHeight * scale;

    // const scaleX = canvas.width / img.width;
    // const scaleY = canvas.height / img.height;
    // const Scale = Math.max(scaleX, scaleY);

    ctx.scale(scale, scale);

    // const newWidth = img.width * Scale;
    // const newHeight = img.height * Scale;

    // const dx = (canvas.width - newWidth) / 2;
    // const dy = (canvas.height - newHeight) / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width / scale, canvas.height / scale);

    setFrame({
      currentFrame: frame.currentFrame++,
      maxIndex: frame.maxIndex,
    });
  };

  const animateFrames = () => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: parentRef.current,
        start: "top top",
        end: `+=5000px`,
        scrub: 1,
        // markers: true,
        pin: true,
        // pinSpacing: false,
        invalidateOnRefresh: true,
      },
    });

    tl.to(frame, {
      currentFrame: frame.maxIndex - 1,
      onUpdate: () => {
        imageLoader(Math.floor(frame.currentFrame));
      },
    });
  };
  useEffect(() => {
    imageCreator();
  }, []);

  useEffect(() => {
    if (totalImages === frame.maxIndex) {
      imageLoader(frame.currentFrame);
      animateFrames();
    }
  }, [totalImages]);
  return (
    <section ref={parentRef} className="w-full h-screen border overflow-hidden">
      <Navbar />
      <canvas ref={canvaRef} className="w-full h-full object-cover" />
    </section>
  );
};

export default VideoTracker;
