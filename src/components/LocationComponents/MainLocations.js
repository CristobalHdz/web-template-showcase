import { useContext } from "react";
import WebPlaceContext from "../../store/webplace-context";
import ButtonFormat from "../shared/ButtonFormat/ButtonFormat";

import "./MainLocations.css";

const MainLocations = ({ location, index }) => {
  const locationsMainCtx = useContext(WebPlaceContext).locationInformation;
  const locationCtx = useContext(WebPlaceContext).locationInformation.locations;
  const stylesCtx =
    useContext(WebPlaceContext).locationInformation.location_information_styles;

  const splitString = (data, splitSign) => {
    return data.split(splitSign);
  };

  const address = splitString(locationCtx[index].address, "/");
  const schedule = splitString(locationCtx[index].schedule, "/");

  let locationTitle;

  // If there is a location editor it will take over the other info
  if (locationCtx[index].location_title_edit.length > 0) {
    locationTitle = locationCtx[index].location_title_edit;
  } else if (
    // If there is no location edit, but there are more than 1 location
    locationCtx.length > 1 &&
    locationCtx[index].location_title.length > 0 &&
    locationCtx[index].location_title_edit.length === 0
  ) {
    locationTitle = `${location.location_title}, ${location.city}`;
  } else if (
    // If there is no location edit, but there is ONLY one location
    (locationCtx.length === 1 ||
      locationCtx[index].location_title.length > 0) &&
    locationCtx[index].location_title_edit.length === 0
  ) {
    locationTitle = location.city;
  } else {
    // If the other ones are not met, or all of the data is empty
    locationTitle = `Location ${index + 1}`;
  }

  return (
    <div className="locations-wrapper">
      <div
        className="locations-title"
        style={{
          color: stylesCtx.title_color,
          borderBottom: `2px solid ${stylesCtx.border_line_color}`,
        }}
      >
        {locationTitle}
      </div>

      <div className="locations-info-wrapper">
        <div className="locations-information">
          <div
            className="locations-address"
            style={{ color: stylesCtx.subtitle_color }}
          >
            {address.map((place, index) => {
              return <div key={`plloc${index}`}>{place}</div>;
            })}
          </div>
          <div>
            <div
              className="locations-subtitle"
              style={{ color: stylesCtx.subtitle_color }}
            >
              {locationsMainCtx.hours_subtitle}
            </div>
            {schedule.map((time, index) => {
              return (
                <div
                  key={`tiloc${index}`}
                  style={{ color: stylesCtx.info_text_color }}
                >
                  {time}
                </div>
              );
            })}
          </div>
          <div>
            <div
              className="locations-subtitle"
              style={{ color: stylesCtx.subtitle_color }}
            >
              {locationsMainCtx.phone_subtitle}
            </div>
            <a
              href={`tel: ${location.phone}`}
              style={{ color: stylesCtx.info_text_color }}
            >
              <div>{location.phone}</div>
            </a>
          </div>
          <div className="location-btn-order-wrapper">
            <div className="location-order-btn">
              <ButtonFormat
                btnSize={stylesCtx.single_location_btn.btn_size}
                showArrow={stylesCtx.single_location_btn.show_arrow}
                arrowAtStart={stylesCtx.single_location_btn.arrow_at_start}
                arrowColor={stylesCtx.single_location_btn.arrow_color}
                showBorder={stylesCtx.single_location_btn.show_border}
                borderColor={stylesCtx.single_location_btn.border_color}
                backgroundColor={stylesCtx.single_location_btn.background_color}
                fontColor={stylesCtx.single_location_btn.font_color}
                capitalizeText={stylesCtx.single_location_btn.capitalize_text}
                btnText={locationsMainCtx.button_text}
                url={locationCtx[index].redirection_url}
              />
            </div>
            {locationCtx[index].reservation_url.length > 0 && (
              <div className="location-order-btn location-second-btn">
                <ButtonFormat
                  btnSize={stylesCtx.reservation_btn.btn_size}
                  showArrow={stylesCtx.reservation_btn.show_arrow}
                  arrowAtStart={stylesCtx.reservation_btn.arrow_at_start}
                  arrowColor={stylesCtx.reservation_btn.arrow_color}
                  showBorder={stylesCtx.reservation_btn.show_border}
                  borderColor={stylesCtx.reservation_btn.border_color}
                  backgroundColor={stylesCtx.reservation_btn.background_color}
                  fontColor={stylesCtx.reservation_btn.font_color}
                  capitalizeText={stylesCtx.reservation_btn.capitalize_text}
                  btnText={locationsMainCtx.reservation_button_text}
                  url={locationCtx[index].reservation_url}
                />
              </div>
            )}
          </div>

          <div className="location-icons-styles">
            {locationCtx[index].delivery_apps.map((data) => {
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
                    className="location-icon-style"
                  />
                </a>
              );
            })}
          </div>
        </div>
        <iframe
          title={`lomap${location.id}`}
          src={location.coordinates_url}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="location-map"
          alt={`map of ${location.city}`}
          aria-label={`map of ${location.city}`}
        ></iframe>
      </div>
    </div>
  );
};

export default MainLocations;
