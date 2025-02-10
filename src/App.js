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
import TeacherList from "./components/Admin/Teacher/TeacherList";
import PrivateRouteAdmin from "./components/Admin/PrivateRouteAdmin";

const AppContent = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    {/* Protected Admin Routes */}
    <Route element={<PrivateRouteAdmin allowedRoles={["Admin"]} />}>
      <Route path="/admin" element={<AdminManagement />} />
      <Route path="/admin/teacher/teacherList" element={<TeacherList />} />
      <Route path="/admin/student/studentList" element={<TeacherList />} />
    </Route>
  </Routes>
);

const App = () => (
  <>
    <AppContent />
    <ToastContainer />
  </>
);

export default App;
