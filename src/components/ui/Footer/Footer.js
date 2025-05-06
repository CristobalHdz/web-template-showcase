import { useContext } from "react";
import WebplaceContext from "../../../store/webplace-context";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

import "./Footer.css";

const splitString = (data) => {
  return data.split("/");
};

const Footer = () => {
  const footerLocationsCtx =
    useContext(WebplaceContext).locationInformation.locations;
  const footerInfoCtx = useContext(WebplaceContext).footerInformation;
  const contactCtx = useContext(WebplaceContext).homeSocials;
  const stylesCtx = useContext(WebplaceContext).footerInformation.footer_styles;

  const address = splitString(footerLocationsCtx[0].address);
  const schedule = splitString(footerLocationsCtx[0].schedule);
  const phone = footerLocationsCtx[0].phone;

  return (
    <div
      className="footer-wrapper"
      style={{
        backgroundColor: stylesCtx.background_color,
        color: stylesCtx.subtitle_font_color,
      }}
      aria-label="footer"
    >
      <div className="footer-title" role="heading" aria-level="2">
        {footerInfoCtx.title}
      </div>
      <div className="footer-info-wrapper">
        {/* Locations and address */}
        {footerLocationsCtx.length === 1 && (
          <div className="info-wrapper">
            <div className="info-title" role="heading" aria-level="3">
              {footerInfoCtx.address_subtitle}
            </div>
            {address.map((data, index) => {
              return (
                <div
                  className="info-data"
                  style={{ color: stylesCtx.info_font_color }}
                  key={index}
                >
                  {data}
                </div>
              );
            })}
          </div>
        )}
        {footerLocationsCtx.length > 1 && (
          <div className="info-wrapper info-locations-footer">
            <div className="info-title" role="heading" aria-level="3">
              {footerInfoCtx.locations_subtitle}
            </div>
            {footerLocationsCtx.map((data, index) => {
              return (
                <div
                  className="info-data"
                  style={{ color: stylesCtx.info_font_color }}
                  key={index}
                >
                  {data.location_title}, {data.city}
                </div>
              );
            })}
          </div>
        )}

        {/* Schedule */}
        {footerLocationsCtx.length === 1 && (
          <div>
            <div className="info-title" role="heading" aria-level="3">
              {footerInfoCtx.hours_subtitle}
            </div>
            {schedule.map((data, index) => {
              return (
                <div
                  className="info-data"
                  style={{ color: stylesCtx.info_font_color }}
                  key={index}
                >
                  {data}
                </div>
              );
            })}
          </div>
        )}

        {/* Contact information */}
        {footerInfoCtx.show_contact_option && (
          <div>
            <div className="info-title" role="heading" aria-level="3">
              {footerInfoCtx.contact_info_subtitle}
            </div>
            {footerLocationsCtx.length === 1 && (
              <a
                className="info-data"
                style={{ color: stylesCtx.info_font_color }}
                href={`tel: ${phone}`}
              >
                <div
                  className="info-data"
                  style={{ color: stylesCtx.info_font_color }}
                >
                  {phone}
                </div>
              </a>
            )}
            <div
              className="info-data"
              style={{ color: stylesCtx.info_font_color }}
            >
              {contactCtx.contact_email}
            </div>
          </div>
        )}

        {/* Social media */}
        <div className="socials-powered-wrapper">
          <div className="social-media-wrapper">
            {contactCtx.instagram_url.length > 0 && (
              <div>
                <a
                  href={contactCtx.instagram_url}
                  target="_self"
                  rel="noopener noreferrer"
                  className="anchor-social"
                  aria-label="Visit our Instagram page"
                >
                  <InstagramIcon fontSize="inherit" />
                </a>
              </div>
            )}
            {contactCtx.facebook_url.length > 0 && (
              <div>
                <a
                  href={contactCtx.facebook_url}
                  target="_self"
                  rel="noopener noreferrer"
                  className="anchor-social"
                  aria-label="Visit our Facebook page"
                >
                  <FacebookIcon fontSize="inherit" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
