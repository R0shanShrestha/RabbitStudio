import Link from "next/link";
import logo from "../../public/logo.png";
const Navbar = () => {
  return (
    <nav className="uppercase h-fit  top-0 w-full p-5 fixed  z-20 py-7 px-10 flex justify-between items-center">
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
