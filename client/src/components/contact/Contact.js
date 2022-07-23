import "./contact.css";
import React from "react";
import { useUserData } from "../../context/UserContext";


function Contact() {

  const { userData } = useUserData();
  return (
    <div className="contactContainer">
      <div className="contact">
        <p>Get in Touch!</p>

        {userData &&
          <a className="contactItem link"
            href={`mailto:${userData.email}?subject=Hi!`}>
            <i className="contactIcon fa fa-envelope"></i>
            <p className="contactContent">
              {userData.email}
            </p>
          </a>
        }

        <a className="contactItem link"
          href="tel:480-678-0800">
          <i class="contactIcon fa fa-solid fa-phone"></i>
          <p className="contactContent">
            480-678-0800
          </p>
        </a>

        <a className="contactItem link"
          href="https://www.instagram.com/shartono1/">
          <i class="contactIcon fa-brands fa-instagram-square"></i>
          <p className="contactContent">
            shartono1
          </p>
        </a>
      </div>
    </div>
  );
}

export default Contact;
