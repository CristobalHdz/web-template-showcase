import ImageCard from "./ImageCard/ImageCard";
import "./ImageCards.css";
import MsgCard from "./MsgCard/MsgCard";

const ImageCards = ({ showcaseInfo }) => {
  return (
    <div className="menu-wrapper">
      <div
        className="menu-title"
        style={{ color: showcaseInfo.showcase_styles.title_color }}
        role="heading" aria-level="2"
      >
        {showcaseInfo.title}
      </div>
      <div className="menu-icons-wrapper">
        {showcaseInfo.showcase_items.map((menu, index) => {
          return (
            <ImageCard
              key={menu.id}
              name={menu.name}
              description={menu.description}
              url={showcaseInfo.url}
              imgFormat={menu.img_format}
              index={index}
              buttonText={showcaseInfo.buttons_text}
              noText={false}
              cardStyles={showcaseInfo.showcase_styles.showcase_btns}
            />
          );
        })}
        <MsgCard />
      </div>
    </div>
  );
};

export default ImageCards;
