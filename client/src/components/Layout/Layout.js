import React, { useRef } from "react";

import TopBar from "../topbar/TopBar";
import Contact from "../contact/Contact";

export default function Layout({ children }) {

  const contactRef = useRef()

  function scrollToContactHandler() {
    contactRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <TopBar scrollHandler={scrollToContactHandler} />
      {children}

      <div ref={contactRef}>
        <Contact />
      </div>
    </>
  );
}
