import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import swal from "sweetalert";

const PrivateRouteAdmin = ({ allowedRoles }) => {
  const token = localStorage.getItem("authToken");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  try {
    const decodedToken = jwtDecode(token);
    const userRole = decodedToken.role;

    if (allowedRoles.includes(userRole)) {
      return <Outlet />;
    } else {
      swal("Cảnh báo!", "Bạn không có quyền truy cập trang này!", "error");
      return <Navigate to="/" replace />;
    }
  } catch (error) {
    console.error("Invalid token:", error);
    return <Navigate to="/login" replace />;
  }
};

export default PrivateRouteAdmin;
