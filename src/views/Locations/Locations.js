import { useContext } from "react";
import WebplaceContext from "../../store/webplace-context";

import MainLocations from "../../components/LocationComponents/MainLocations";

import HeroImg from "../../assets/mainItems/heroImg.png";
import "./Locations.css";

import Navbar from "../../components/ui/navbar/Navbar";

const Locations = () => {
  const locationsCtx = useContext(WebplaceContext).locationInformation.locations;

  return (
    <div aria-label="locations-view">
      <a href="#main-locations-information" className="skip-to-main">Skip to main content</a>
      <Navbar />
      <div className="spacer"></div>
      <div className="locations-main-info-wrapper" id="main-locations-information">
        <img src={HeroImg} alt="main show food" className="image-style" />
        {locationsCtx.map((location, index) => {
          return (
            <div key={location.id}>
              <MainLocations location={location} index={index} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Locations;
