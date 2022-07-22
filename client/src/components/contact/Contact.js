import "./contact.css";
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

function Contact() {
  // 1. Get the picture from local folder
  const publicFolderPath = "https://myblogs3bucket.s3.us-east-2.amazonaws.com/";
  const { user, isAuthenticated } = useAuth0();
  const [updateMode, setUpdateMode] = useState(false);
  const [title, setTitle] = useState("");

  return (
    <div className="contactContainer">
      <div className="contact">
        <p>Get in Touch!</p>
        <a className="contactItem link" 
          href = "mailto:shartono1@gmail.com?subject=Hi!">
          <i className="contactIcon fa fa-envelope"></i>
          <p className="contactContent">
            shartono1@gmail.com
          </p>
        </a>

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
