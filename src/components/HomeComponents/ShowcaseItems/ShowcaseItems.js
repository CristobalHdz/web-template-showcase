import { useContext } from "react";
import ImageCards from "../../shared/ImageCards/ImageCards";
import WebplaceContext from "../../../store/webplace-context";

const ShowcaseItems = () => {
  const placeCtx = useContext(WebplaceContext).homeShowcaseItems;

  return (
    <div>
      <ImageCards showcaseInfo={placeCtx} />
    </div>
  );
};

export default ShowcaseItems;
