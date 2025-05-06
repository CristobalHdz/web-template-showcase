import { useContext } from "react";
import WebplaceContext from "../../store/webplace-context";

import SingleBrand from "../../components/BrandsComponents/SingleBrand";
import Navbar from "../../components/ui/navbar/Navbar";

import HeroImg from "../../assets/mainItems/heroImg.png";
import "./Brands.css";

const Brands = () => {
  const brandsCtx = useContext(WebplaceContext).brandsInformation;
  const stylesCtx = useContext(WebplaceContext).brandsInformation.brands_styles;

  return (
    <div>
      <a href="#brands" className="skip-to-main">Skip to main content</a>
      <Navbar />
      <div className="spacer"></div>
      <div className="brands-main-info-wrapper" id="brands" >
        <img
          src={HeroImg}
          alt="main show food"
          className="brands-hero-image-style"
        />
        <div
          className="brands-title"
          style={{
            color: stylesCtx.title_text_color,
            borderBottom: `2px solid ${stylesCtx.title_border_color}`,
          }}
          role="heading" aria-level="1"
        >
          {brandsCtx.brands_title}
        </div>

        <div className="brands-container-wrapper">
          {brandsCtx.brands_info.map((brand, index) => {
            return <SingleBrand key={brand.id} brand={brand} index={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Brands;
