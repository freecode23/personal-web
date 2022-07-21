import React, { useEffect } from "react";
import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Setting from "./pages/setting/Setting";
import Login from "./pages/login/Login";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useUserData } from "./context/UserContext";

require("dotenv").config();

function App() {
  // - user from auth
  const { user, isLoading } = useAuth0();
  const { setUserData } = useUserData();
  const sub = process.env.REACT_APP_SUB;

  // - get sherly's data from database
  useEffect(() => {
    const fetchProfileData = async () => {
      const fetchedProfileData = await axios.get(sub);
      if (fetchedProfileData.data) {
        setUserData(fetchedProfileData.data);
      }
    };
    fetchProfileData();
  }, []);

  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />

        {/* Write Route */}
        {user && !isLoading && <Route path="/write" element={<Write />} />}
        {!user && (
          <Route
            path="/write"
            element={isLoading ? <p>Loading...</p> : <Login />}
          />
        )}

        <Route path="/setting" element={user ? <Setting /> : <Login />} />
        <Route path="/blogposts/:postId" element={<Single />} />
      </Routes>
    </Router>
  );
}

export default App;
