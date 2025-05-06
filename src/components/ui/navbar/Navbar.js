import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";

import favicon from "../../../assets/mainItems/favicon.svg";
import ButtonFormat from "../../shared/ButtonFormat/ButtonFormat";
import "./Navbar.css";
import WebplaceContext from "../../../store/webplace-context";

const Navbar = () => {
  const navbarCtx = useContext(WebplaceContext).navbarItems;
  const stylesCtx = useContext(WebplaceContext).navbarItems.navbar_styles;
  let logoSize;

  const [hamburgerStatus, setHamburgerStatus] = useState(false);
  // Open and close hamburger
  const mobileHamburgerHandler = () => {
    setHamburgerStatus(!hamburgerStatus);
  };

  // Close hamburger if element is clicked
  const mobileHamburgerOptionHandler = () => {
    if (hamburgerStatus) {
      setHamburgerStatus(false);
    }
  };

  if (navbarCtx.logo_size === "large") {
    logoSize = "nav-fav-large";
  } else if (navbarCtx.logo_size === "medium") {
    logoSize = "nav-fav-medium";
  } else {
    logoSize = "nav-fav-small";
  }

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

  const menuItems = (
    <>
      {navbarCtx.options.map((navitem) => {
        return (
          <NavLink
            key={navitem.title}
            className={navitem.shown ? "menu-items" : "menu-disable"}
            style={{ color: stylesCtx.font_color }}
            to={navitem.url}
            target={redirectionStatus(navitem.url)}
            onClick={mobileHamburgerOptionHandler}
            role="button"
          >
            {navitem.shown && navitem.title}
          </NavLink>
        );
      })}
      <div className="btn-style-navbar">
        <ButtonFormat
          btnSize={stylesCtx.navbar_btn.btn_size}
          showArrow={stylesCtx.navbar_btn.show_arrow}
          arrowAtStart={stylesCtx.navbar_btn.arrow_at_start}
          arrowColor={stylesCtx.navbar_btn.arrow_color}
          showBorder={stylesCtx.navbar_btn.show_border}
          borderColor={stylesCtx.navbar_btn.border_color}
          backgroundColor={stylesCtx.navbar_btn.background_color}
          fontColor={stylesCtx.navbar_btn.font_color}
          capitalizeText={stylesCtx.navbar_btn.capitalize_text}
          btnText={navbarCtx.main_button_text}
          url={navbarCtx.main_button_redirect}
        />
      </div>
    </>
  );

  return (
    <div
      className="navbar-component-container"
      style={{ backgroundColor: stylesCtx.background_color }}
    >
      <div className="navbar-logo">
        <NavLink to={"/"}>
          {navbarCtx.logo_exists ? (
            <img
              src={favicon}
              className={`navbar-fav-image ${logoSize}`}
              alt={`${navbarCtx.business_name} logo`}
              tabIndex="0"
            />
          ) : (
            <div
              className="navbar-fav-title"
              style={{ color: stylesCtx.font_color }}
            >
              {navbarCtx.business_name}
            </div>
          )}
        </NavLink>
      </div>
      <nav role="navigation" aria-label="hamburger menu">
        <div className="nav-container">
          <div className="menu">{menuItems}</div>
          <button
            className={
              hamburgerStatus ? "hamburger active-hamburger" : "hamburger"
            }
            onClick={mobileHamburgerHandler}
            aria-expanded={hamburgerStatus}
            aria-label="hamburger menu expand"
          >
            <span style={{ backgroundColor: stylesCtx.font_color }}></span>
            <span style={{ backgroundColor: stylesCtx.font_color }}></span>
            <span style={{ backgroundColor: stylesCtx.font_color }}></span>
          </button>
        </div>
      </nav>
      <div
        className={`${hamburgerStatus ? "active-dropdown" : "inactive-dropdown"
          }`}
        aria-haspopup="true"
        aria-expanded={hamburgerStatus}
      >
        <div
          className="nav-dropdown"
          style={{ backgroundColor: stylesCtx.navbar_mobile_dropdown }}
        >
          {menuItems}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
