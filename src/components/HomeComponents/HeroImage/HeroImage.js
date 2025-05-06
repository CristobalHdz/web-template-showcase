import { useContext, useEffect, useState } from "react";
import ButtonFormat from "../../shared/ButtonFormat/ButtonFormat";
import WebplaceContext from "../../../store/webplace-context";

import "./HeroImage.css";

const HeroImage = () => {
  const placeCtx = useContext(WebplaceContext).homeBanner;
  const stylesCtx = useContext(WebplaceContext).homeBanner.home_banner_styles;

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const splitString = (data, splitSign) => {
    return data.split(splitSign);
  };

  const heroTitle = splitString(placeCtx.title, "/");

  const orderBtns = placeCtx.banner_items.map((data, index) => {
    return (
      <ButtonFormat
        key={`${index}orderButton`}
        btnSize={stylesCtx.options_btns.btn_size}
        showArrow={stylesCtx.options_btns.show_arrow}
        arrowAtStart={stylesCtx.options_btns.arrow_at_start}
        arrowColor={
          windowSize >= 778
            ? stylesCtx.options_btns.arrow_color
            : stylesCtx.options_btns_mobile.arrow_color
        }
        showBorder={stylesCtx.options_btns.show_border}
        borderColor={stylesCtx.options_btns.border_color}
        backgroundColor={stylesCtx.options_btns.background_color}
        fontColor={
          windowSize >= 778
            ? stylesCtx.options_btns.font_color
            : stylesCtx.options_btns_mobile.font_color
        }
        capitalizeText={stylesCtx.options_btns.capitalize_text}
        btnText={data.item}
        url={placeCtx.url}
      />
    );
  });

  return (
    <div aria-label="conent-main-home-image">
      <div className="hero-img-wrapper" aria-label="content-banner-image" role="contentinfo">
        <div className="hero-img-title">
          <h1 aria-label="title">
            {placeCtx.title.length > 0 &&
              heroTitle.map((data) => {
                return (
                  <div
                    key={data}
                    style={{ color: stylesCtx.hero_image_text_color }}
                  >
                    {data}
                  </div>
                );
              })}
          </h1>
        </div>
        <div className="hero-img-content">
          <div className="btn-wrapper">
            <ButtonFormat
              btnSize={stylesCtx.banner_btn.btn_size}
              showArrow={stylesCtx.banner_btn.show_arrow}
              arrowAtStart={stylesCtx.banner_btn.arrow_at_start}
              arrowColor={stylesCtx.banner_btn.arrow_color}
              showBorder={stylesCtx.banner_btn.show_border}
              borderColor={stylesCtx.banner_btn.border_color}
              backgroundColor={stylesCtx.banner_btn.background_color}
              fontColor={stylesCtx.banner_btn.font_color}
              capitalizeText={stylesCtx.banner_btn.capitalize_text}
              btnText={placeCtx.button_text}
              url={placeCtx.url}
            />
          </div>
        </div>
        {windowSize > 778 && <div className="options-wrapper">{orderBtns}</div>}
      </div>
      {windowSize <= 778 && (
        <div className="mobile-options-wrapper">
          <div className="mobile-options">{orderBtns}</div>
        </div>
      )}
    </div>
  );
};

export default HeroImage;
