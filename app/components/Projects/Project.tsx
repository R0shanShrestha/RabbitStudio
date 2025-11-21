"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import ProjectCard from "./ProjectCard";
gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const imageArr = [
    {
      id: "01",
      url: "https://plus.unsplash.com/premium_photo-1675074446323-7d464b551c48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3R1ZGlvfGVufDB8fDB8fHww",
      title: "Quiet Study Corner",
      desc: "A tranquil study space bathed in soft light, made for deep focus and inspiration.",
    },
    {
      id: "02",
      url: "https://images.unsplash.com/photo-1763306934825-876255865f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D",
      title: "Golden Hour Desk",
      desc: "A cozy workspace glowing with warm golden light, hinting at productivity and peace.",
    },
    {
      id: "03",
      url: "https://plus.unsplash.com/premium_photo-1763378519176-eaa8c8e41233?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D",
      title: "Design Studio Vibes",
      desc: "A bright and modern studio, buzzing with creative energy and minimalist design.",
    },
    {
      id: "04",
      url: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=500&auto=format&fit=crop&q=60",
      title: "Minimal Workspace",
      desc: "Clean and minimal desk setup with natural light, perfect for creative work.",
    },
    {
      id: "05",
      url: "https://plus.unsplash.com/premium_photo-1763306455744-1155dfb62773?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OHx8fGVufDB8fHx8fA%3D%3D",
      title: "Afternoon Focus",
      desc: "A student focused on assignments, with books and laptop arranged neatly.",
    },
    {
      id: "06",
      url: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=500&auto=format&fit=crop&q=60",
      title: "Modern Tech Desk",
      desc: "A stylish workspace with tech gadgets and bright daylight shining through.",
    },
    {
      id: "07",
      url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&auto=format&fit=crop&q=60",
      title: "Creative Lab",
      desc: "Artistic studio space filled with colors, sketches, and inspiration everywhere.",
    },
    {
      id: "08",
      url: "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJlZXJ8ZW58MHx8MHx8fDA%3D",
      title: "Evening Study",
      desc: "Warm-lit study area with books stacked neatly and laptop open for learning.",
    },
    {
      id: "09",
      url: "https://plus.unsplash.com/premium_photo-1763306455744-1155dfb62773?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OHx8fGVufDB8fHx8fA%3D%3D",
      title: "Morning Workspace",
      desc: "A calm and fresh morning studio setup, ready for a day of creativity.",
    },
    {
      id: "10",
      url: "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJlZXJ8ZW58MHx8MHx8fDA%3D",
      title: "Brew & Work",
      desc: "A cozy beer‑themed corner with a rustic table, perfect for laid‑back brainstorming.",
    },
  ];

  const container = useRef(null);

  useGSAP(
    () => {
      const Cards = document.querySelectorAll(".cardAnime");

      Cards.forEach((card, idx) => {
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          end: "bottom top",
          pin: true,
          pinSpacing: idx === Cards.length - 1,
        });

        if (idx < Cards.length - 1) {
          ScrollTrigger.create({
            trigger: Cards[idx + 1],
            start: "top bottom",
            end: "top top",
            onUpdate: (self) => {
              const t = self.progress;
              gsap.set(card, {
                scale: 1 - t * 0.25,
                rotation: (idx % 2 === 0 ? 5 : -5) * t,
                "--after-opacity": t,
              });
            },
          });
        }
      });
    },
    { scope: container }
  );

  return (
    <section ref={container} className="  overflow-hidden my-5 ">
      <div className="intro flex px-10  w-full py-10">
        <h1 className="text-4xl font-semibold uppercase">Featured work ( +100 projects )</h1>
      </div>
      {imageArr.map((Crd, idx) => (
        <ProjectCard
          key={idx}
          desc={Crd.desc}
          idx={Crd.id}
          title={Crd.title}
          url={Crd.url}
        />
      ))}
    </section>
  );
};

export default Project;
