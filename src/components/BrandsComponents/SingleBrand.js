import { useContext } from "react";
import WebPlaceContext from "../../store/webplace-context";

import ButtonFormat from "../shared/ButtonFormat/ButtonFormat";
import "./SingleBrand.css";

const SingleBrand = ({ brand, index }) => {
  const brandsCtx = useContext(WebPlaceContext).brandsInformation;
  const stylesCtx = useContext(WebPlaceContext).brandsInformation.brands_styles;

  return (
    <div className="single-brand-wrapper">
      <img
        src={require(`../../assets/brandImages/br${index + 1}.${"png"}`)}
        alt={brand.name}
        className="single-brand-img"
      />
      <div className="brand-information-wrapper">
        <div
          className="single-brand-text"
          style={{ color: stylesCtx.brand_name_text_color }}
          role="heading" aria-level="3"
        >
          {brand.name}
        </div>
        <div className="brand-btn">
          <ButtonFormat
            btnSize={stylesCtx.order_button.btn_size}
            showArrow={stylesCtx.order_button.show_arrow}
            arrowAtStart={stylesCtx.order_button.arrow_at_start}
            arrowColor={stylesCtx.order_button.arrow_color}
            showBorder={stylesCtx.order_button.show_border}
            borderColor={stylesCtx.order_button.border_color}
            backgroundColor={stylesCtx.order_button.background_color}
            fontColor={stylesCtx.order_button.font_color}
            capitalizeText={stylesCtx.order_button.capitalize_text}
            btnText={brandsCtx.brands_button_text}
            url={brand.url}
          />
        </div>

        <div className="brand-app-icons-styles">
          {brandsCtx.brands_info[index].delivery_apps.map((data) => {
            return (
              <a
                href={data.url}
                target="_self"
                rel="noreferrer"
                key={`${data.id}${index}${data.name}`}
              >
                <img
                  src={require(`../../assets/locationIcons/${data.name}.svg`)}
                  alt={`${data.name}deliveryapp`}
                  className="brand-app-icon-style"
                />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SingleBrand;
