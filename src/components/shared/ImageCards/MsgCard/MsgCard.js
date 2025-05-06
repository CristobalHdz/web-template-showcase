import { useContext, useEffect, useState } from "react";
import ButtonFormat from "../../ButtonFormat/ButtonFormat";

import "./MsgCard.css";
import WebplaceContext from "../../../../store/webplace-context";

const MsgCard = () => {
  const placeCtx =
    useContext(WebplaceContext).homeShowcaseItems.showcase_items_message;
  const styleCtx =
    useContext(WebplaceContext).homeShowcaseItems.showcase_styles;
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

  return (
    <div
      className="message-card-wrapper"
      style={{ backgroundColor: styleCtx.showcase_message_background }}
    >
      <div className="msg-info-wrapper">
        <div
          className="msg-title"
          style={{ color: styleCtx.showcase_message_font_color }}
          role="heading" aria-level="2"
        >
          {placeCtx.title}
        </div>
        <div
          className="msg-msg"
          style={{ color: styleCtx.showcase_message_font_color }}
        >
          {placeCtx.message}
        </div>
      </div>
      <div className="msg-btn">
        <ButtonFormat
          btnSize={windowSize <= 778 ? styleCtx.showcase_message_button.btn_size : 1.5}
          showArrow={styleCtx.showcase_message_button.show_arrow}
          arrowAtStart={styleCtx.showcase_message_button.arrow_at_start}
          arrowColor={styleCtx.showcase_message_button.arrow_color}
          showBorder={styleCtx.showcase_message_button.show_border}
          borderColor={styleCtx.showcase_message_button.border_color}
          backgroundColor={styleCtx.showcase_message_button.background_color}
          fontColor={styleCtx.showcase_message_button.font_color}
          capitalizeText={styleCtx.showcase_message_button.capitalize_text}
          btnText={placeCtx.button_text}
          url={placeCtx.message_url}
          fontSizeChange={windowSize <= 778 ? "13px" : "15px"}
        />
      </div>
    </div>
  );
};

export default MsgCard;
