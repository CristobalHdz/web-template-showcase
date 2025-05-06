import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import "./ButtonFormat.css";
import { NavLink } from "react-router-dom";

const ButtonFormat = ({
  btnSize,
  showArrow,
  arrowAtStart,
  arrowColor,
  showBorder,
  borderColor,
  backgroundColor,
  fontColor,
  btnText,
  capitalizeText,
  url,
  fontSizeChange
}) => {
  let redirection;

  if (url) {
    if (url.startsWith("/")) {
      redirection = "_self";
    } else {
      redirection = "_self";
    }
  }

  const styles = {
    btnStyles: {
      scale: `${btnSize}`,
      background: backgroundColor.length > 0 ? backgroundColor : "transparent",
      borderColor: showBorder ? borderColor : "transparent",
      fontSize: fontSizeChange ? fontSizeChange : ""
    },
    arrowStyle: {
      fontSize: "15px",
      order: arrowAtStart ? 0 : 1,
      color: arrowColor.length > 0 ? arrowColor : "black",
    },
    textStyle: {
      color: fontColor.length > 0 ? fontColor : "black",
      textTransform: capitalizeText ? "capitalize" : "uppercase",
    },
  };

  return (
    <div>
      {url &&
        <NavLink to={url} target={redirection} rel="noopener noreferrer" aria-label="button-information-wrapper">
          <button style={styles.btnStyles} className="btn-wrapper">
            {showArrow && <ArrowForwardIcon style={styles.arrowStyle} />}
            <div className="btn-text" style={styles.textStyle}>
              {btnText}
            </div>
          </button>
        </NavLink>}
      {!url &&
        <button style={styles.btnStyles} className="btn-wrapper" aria-label="button-information-wrapper">
          {showArrow && <ArrowForwardIcon style={styles.arrowStyle} />}
          <div className="btn-text" style={styles.textStyle}>
            {btnText}
          </div>
        </button>
      }
    </div>
  );
};

export default ButtonFormat;
