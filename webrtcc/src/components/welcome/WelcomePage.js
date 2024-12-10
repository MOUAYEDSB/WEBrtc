import Herosection from "./HeroSection";
import Footer from "./../common/Footer";
import ServiceSection from "./ServiceSection";
import BannerOne from "./BannerOne";
import About from "./About";
import Services from "./Services";
import BannerTwo from "./BannerTwo";

const Welcome = () => {
  return (
    <div>
      <Herosection />
      <About />
      <BannerOne />
      <Services />
      <BannerTwo />
      <ServiceSection />
      <Footer />
    </div>
  );
};

export default Welcome;
