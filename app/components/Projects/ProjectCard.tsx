interface props {
  url: string;
  desc: string;
  title: string;
  idx: string;
}
const ProjectCard = ({ url, desc, title, idx }: props) => {
  return (
    <div
      key={idx}
      className="cardAnime z-10 w-full gap-50   bg-white text-black  px-20  py-10 text-8xl flex justify-between"
    >
      <div className="z-10">
        <h1 className="font-extrabold ">{idx}</h1>
      </div>
      <div className="z-10 w-full  px-32  h-full flex flex-col gap-10">
        <div className=" text-4xl font-semibold">
          <h1>{title}</h1>
        </div>
        <div className="max-h-[350px] z-10">
          <img
            src={url}
            alt="Loading..."
            className="w-full h-full object-cover"
          />
        </div>
        <div className=" text-3xl z-10 tracking-tight">
          <h1>{desc}</h1>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
