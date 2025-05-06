import { Link } from "react-router-dom";
import { useContext } from "react";
import WebplaceContext from "../../../store/webplace-context";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import "./Options.css";

const Options = () => {
  const PlaceCtx = useContext(WebplaceContext).navbarItems;
  const styleCtx = useContext(WebplaceContext).homeNavOptionStyles;

  const redirectionStatus = (url) => {
    let redirection;
    // eslint-disable-next-line
    if (url.startsWith("/")) {
      redirection = "_self";
    } else {
      redirection = "_self";
    }
    return redirection;
  };

  const options = (
    <div
      className="item-options"
      style={{
        backgroundColor: styleCtx.background_color,
      }}
    >
      {PlaceCtx.options.map((item) => {
        return (
          <Link
            key={item.title}
            className={item.shown ? "option-items-wrapper" : "hide-options"}
            to={item.url}
            target={redirectionStatus(item.url)}
            style={{
              color: styleCtx.font_color,
              borderTop: `${styleCtx.border_color} 1px solid`,
              borderBottom: `${styleCtx.border_color} 1px solid`,
            }}
            role="button"
          >
            <div className="option-items">
              {item.shown && item.title}
              <ArrowForwardIcon fontSize="60px" className="arrow-style" />
            </div>
          </Link>
        );
      })}
    </div>
  );

  return <div>{options}</div>;
};

export default Options;
