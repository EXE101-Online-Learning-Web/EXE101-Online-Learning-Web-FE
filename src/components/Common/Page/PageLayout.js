import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function PageLayout({ children }) {
  return (
    <div className="page-container-layout">
    <Header />
    <main className="content-layout">{children}</main>
    <Footer />
  </div>
  );
}
