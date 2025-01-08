import React from "react";
import { SidebarAdmin } from "../Admin/SidebarAdmin";
import { HeaderAdmin } from "../Admin/HeaderAdmin";
import "./admin.css";
import "./admin2.css";

export default function AdminLayout({ children }) {
  return (
    <div id="wrapper">
      <SidebarAdmin />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <HeaderAdmin />
          <div className="container-fluid">{children}</div>
        </div>
      </div>
    </div>
  );
}
