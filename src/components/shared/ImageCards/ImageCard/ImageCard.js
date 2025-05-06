import ButtonFormat from "../../ButtonFormat/ButtonFormat";

import "./ImageCard.css";

const ImageCard = (props) => {
  let imageUrl;

  if (props.imgFormat) {
    imageUrl = require(`../../../../assets/menuItems/menu${props.index + 1}.${props.imgFormat
      }`);
  } else {
    imageUrl = props.imageUrl;
  }

  return (
    <div className="image-card-wrapper">
      <div className="image-card-content">
        <img src={imageUrl} alt="menu-item" className="card-image" />
      </div>

      {!props.noText && (
        <div className="image-card-info">
          <div className="card-info-title" role="heading" aria-level="2">{props.name}</div>
          {props.description.length > 0 && (
            <div className="card-info-description">{props.description}</div>
          )}
          <div className="card-btn">
            <ButtonFormat
              btnSize={props.cardStyles.btn_size}
              showArrow={props.cardStyles.show_arrow}
              arrowAtStart={props.cardStyles.arrow_at_start}
              arrowColor={props.cardStyles.arrow_color}
              showBorder={props.cardStyles.show_border}
              borderColor={props.cardStyles.border_color}
              backgroundColor={props.cardStyles.background_color}
              fontColor={props.cardStyles.font_color}
              capitalizeText={props.cardStyles.capitalize_text}
              btnText={props.buttonText}
              url={props.url}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageCard;
