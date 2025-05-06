import React from "react";

import PlaceData from "../data/restaurantData.json";
import WebplaceContext from "./webplace-context";

const WebplaceProvider = ({ children }) => {
  const placeContext = {
    navbarItems: PlaceData.navbar_items,
    homeBanner: PlaceData.home_banner,
    homeAboutus: PlaceData.home_aboutus,
    homeShowcaseItems: PlaceData.home_showcase_items,
    homeNavOptionStyles: PlaceData.home_nav_option_styles,
    homeSocials: PlaceData.home_socials,
    generalEmailInformation: PlaceData.general_email_information,
    locationInformation: PlaceData.location_information,
    cateringInformation: PlaceData.catering_information,
    brandsInformation: PlaceData.brands_information,
    footerInformation: PlaceData.footer_information,
  };

  return (
    <WebplaceContext.Provider value={placeContext}>
      {children}
    </WebplaceContext.Provider>
  );
};

export default WebplaceProvider;
