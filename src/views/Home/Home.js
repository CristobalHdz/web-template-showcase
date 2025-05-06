import AboutUs from "../../components/HomeComponents/AboutUs/AboutUs";
import HeroImage from "../../components/HomeComponents/HeroImage/HeroImage";
import ShowcaseItems from "../../components/HomeComponents/ShowcaseItems/ShowcaseItems";
import Options from "../../components/HomeComponents/Options/Options";
import Navbar from "../../components/ui/navbar/Navbar";

const Home = () => {
  return (
    <div>
      <a href="#main" className="skip-to-main">
        Skip to main content
      </a>
      <Navbar />
      <div className="spacer"></div>
      <div
        id="main"
        aria-label="main-view"
        style={{ backgroundColor: "#ffffff" }}
      >
        <HeroImage />
        <AboutUs id="main" />
        <ShowcaseItems />
        <Options />
      </div>
    </div>
  );
};

export default Home;
