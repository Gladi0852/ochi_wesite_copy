import LandingPage from "./component/LandingPage";
import Marquee from "./component/Marquee";
import About from "./component/About";
import PlayEye from "./component/PlayEye";
import FeaturedProjects from "./component/FeaturedProjects";
import Review from "./component/Review";
import StartProject from "./component/StartProject";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import LocomotiveScroll from "locomotive-scroll";

const locomotivesScroll = new LocomotiveScroll();

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main data-scroller data-scroll-container>
        <LandingPage />
        <Marquee />
        <About />
        <PlayEye />
        <FeaturedProjects />
        <Review />
        <StartProject />
        <Footer />
      </main>
    </>
  );
};

export default HomePage;
