import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../src/public/assets/vendor/glightbox/css/glightbox.min.css";
import "../src/public/assets/vendor/swiper/swiper-bundle.min.css";
import "../src/public/assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../src/public/assets/vendor/bootstrap/css/bootstrap.min.css";
import "../src/public/assets/css/main.css";
import { ToastContainer } from "react-toastify";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import AdminManagement from "./components/Admin/Admin";

const AppContent = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/admin" element={<AdminManagement />} />
  </Routes>
);

const App = () => (
  <>
    <AppContent />
    <ToastContainer />
  </>
);

export default App;
