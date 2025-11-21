import Footer from "./components/Footer";
import Hero from "./components/hero";
import Navbar from "./components/Navbar";
import Project from "./components/Projects/Project";

const Home = () => {
  return (
    <>
      <div className="h-screen relative   text-white">
        <Hero />
        <Project />
        {/* <Project />  */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
