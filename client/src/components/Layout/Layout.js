import React from "react";

import TopBar from "../topbar/TopBar";
import Contact from "../contact/Contact";

export default function Layout({ children }) {
  return (
    <>
      <TopBar />
      {children}
      <Contact />
    </>
  );
}
