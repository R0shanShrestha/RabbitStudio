import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";
import Hero from "./components/hero";
import Insights from "./components/Insights/Insights";
import Navbar from "./components/Navbar";
import Project from "./components/Projects/Project";

const Home = () => {
  return (
    <>
      <div className="h-screen relative   text-white">
        <Hero />
        <Insights />
        <Project />
        {/* <Project />  */}
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Home;
