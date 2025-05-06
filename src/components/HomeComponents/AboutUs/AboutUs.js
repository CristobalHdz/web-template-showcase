import { useContext } from "react";
import "./AboutUs.css";
import WebplaceContext from "../../../store/webplace-context";

const AboutUs = () => {
  const placeCtx = useContext(WebplaceContext).homeAboutus;
  const stylesCtx = useContext(WebplaceContext).homeAboutus.aboutus_styles;

  return (
    <div className="about-wrapper">
      <div className="about-title" style={{ color: stylesCtx.title_color }} role="heading" aria-level="2">
        {placeCtx.title}
      </div>
      <div className="about-text">
        {placeCtx.aboutus_description.map((about, index) => {
          return (
            <div key={index} className="text-style" style={{ color: stylesCtx.font_color }}>
              {about}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutUs;
