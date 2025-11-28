import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";
import Project from "./components/Projects/Project";
import Insights from "./components/Insights/Insights";
import VideoPlayer from "./components/Hero/VideoPlayer";
import VideoTracker from "./components/Hero/VideoTracker";
import Works from "./components/Works/Works";
import ShowCase from "./components/Projects/ShowCase";

const Home = () => {
  return (
    <>
      {/* Testing 1 */}

      <VideoPlayer />
      {/* Testing 2 */}
      {/* <VideoTracker /> */}
      {/* Insights */}
      <Insights />
      {/* <Project /> */}
      <ShowCase />
      {/* <Works /> */}
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
