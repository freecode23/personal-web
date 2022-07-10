import "./sidebar.css";
import React from 'react';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import shProfile from "../../images/sh-circ.png";
import axios from "axios";

function Sidebar() {
    // 1. Declare categories
    const [cats, setCats] = useState([]);

    // 2. Init categories and about from DB
    useEffect(() => {

        // - categories
        const fetchCats = async () => {
            // request to API: "localhost::4000/api/ + "/categories"
            // response to : localhost::3000/...
            const res = await axios.get("/categories");

            setCats(res.data);
        };
        fetchCats();

        // - 

    }, []);

    // 3. Create the categories JSX with a link to home page with category filtered
    const catsJSX = cats.map((cat) => {
        return (
            <Link to={`/?cat=${cat.name}`} className="link">
                <li key={cat._id} className="sidebarListItem">
                    {cat.name}
                </li>
            </Link>
        );
    });
    return (
        <aside className="sidebar">
            <div className="sidebarItem">
                {/* <span className="sidebarTitle">About me</span> */}
                <img className="sidebarImg" src={shProfile} alt="sherly" />
                <p>some para</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Categories</span>
                <ul className="sidebarList">{catsJSX}</ul>
            </div>
        </aside>
    );
}
export default Sidebar;