import "./App.css";
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop/index";
import useModal from "./hooks/useModal";
import "../src/public/assets/vendor/glightbox/css/glightbox.min.css";
import "../src/public/assets/vendor/swiper/swiper-bundle.min.css";
import "../src/public/assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../src/public/assets/vendor/bootstrap/css/bootstrap.min.css";
import "../src/public/assets/css/main.css";
import { ToastContainer } from "react-toastify";
import Home from "./components/Home/Home";
import test from "./components/test/test";


const AppContent = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/test" exact component={test} />
      </Switch>
    </>
  );
};

const App = () => (
  <Router>
    <AppContent />
    <ToastContainer />
  </Router>
);

export default App;
