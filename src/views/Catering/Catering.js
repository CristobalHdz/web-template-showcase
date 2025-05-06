// import { useContext } from "react";

import HeroImg from "../../assets/mainItems/heroImg.png";
import CateringForm from "../../components/CateringComponents/CateringForm";
import Navbar from "../../components/ui/navbar/Navbar";
import "./Catering.css";

// import WebplaceContext from "../../store/webplace-context";

const Catering = () => {


  return (
    <div>
      <a href="#catering-form" className="skip-to-main">Skip to main content</a>
      <Navbar />
      <div className="spacer"></div>
      <div className="catering-main-wrapper" id="catering-form">
        <img src={HeroImg} alt="main show food" className="image-style" />
        <div className="catering-title" role="heading" aria-level="1">Contact us about your catering inquiry</div>
        <div className="catering-content-wrapper">
          <CateringForm />
        </div>
      </div>
    </div>
  );
};

export default Catering;
