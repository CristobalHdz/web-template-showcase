// Main imports
import { Routes, Route, Navigate } from "react-router-dom";

// Views and components
import Brands from "./views/Brands/Brands";
import Catering from "./views/Catering/Catering";
import EmailSignup from "./views/EmailSignup/EmailSignup";
import Footer from "./components/ui/Footer/Footer";
import Home from "./views/Home/Home";
import Locations from "./views/Locations/Locations";

// Data and context
import restaurantData from "./data/restaurantData.json";
import WebplaceProvider from "./store/webplace-provider";

// Utilities
import "./App.css";

// GET INDEX OF NAVBAR OBJECT
const findObject = (arr, objName) => {
  const object = arr.findIndex((item) => item.title === objName);
  return object;
};

const navbarData = restaurantData.navbar_items.options;

const App = () => {
  return (
    <WebplaceProvider>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Show and redirect to Catering */}
        {navbarData[findObject(navbarData, "Catering")].shown && (
          <Route
            path={navbarData[findObject(navbarData, "Catering")].url}
            element={<Catering />}
          />
        )}

        {/* Show and redirect to Email Signup */}
        {navbarData[findObject(navbarData, "Email Signup")].shown && (
          <Route
            path={navbarData[findObject(navbarData, "Email Signup")].url}
            element={<EmailSignup />}
          />
        )}

        {/* Show and redirect to Locations */}
        {navbarData[findObject(navbarData, "Locations")].shown && (
          <Route
            path={navbarData[findObject(navbarData, "Locations")].url}
            element={<Locations />}
          />
        )}


        {/* Show and redirect to Brands */}
        {navbarData[findObject(navbarData, "Brands")].shown && (
          <Route
            path={
              restaurantData.navbar_items.options[
                findObject(restaurantData.navbar_items.options, "Brands")
              ].url
            }
            element={<Brands />}
          />
        )}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </WebplaceProvider>
  );
};

export default App;
