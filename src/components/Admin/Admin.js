import React, { useEffect, useRef, useState } from "react";
import "./admin.css";
import "./admin2.css";
import { SidebarAdmin } from "../Common/Admin/SidebarAdmin";
import { HeaderAdmin } from "../Common/Admin/HeaderAdmin";

export default function AdminManagement() {
  return (
    <>
      <div id="wrapper">
        <SidebarAdmin />
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <HeaderAdmin />
            <div class="container-fluid">
              <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
              </div>

             {/* Here */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
