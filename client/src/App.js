import React, {useEffect} from "react";
import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Setting from "./pages/setting/Setting";
import Login from "./pages/login/Login";
import axios from 'axios'
import { useAuth0 } from "@auth0/auth0-react";


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useUserData } from "./context/Context";


function App() {
  // - user from auth
  const { user, isLoading } = useAuth0(); 
  const { setUserData } = useUserData();

  // - user from database
  useEffect(() => {
    const fetchUser = async () => {
      if(user) {
        const fetchedUserData = await axios.get("/users/" + user.sub);
        if(fetchedUserData.data){
          setUserData(fetchedUserData.data);
        }
      }
    }
    fetchUser();
  }, [user])

  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />

        {/* Write Route */}
        {user && !isLoading && <Route path="/write" element={<Write />} />}
        {!user && <Route path="/write" element={isLoading? <p>Loading...</p> : <Login/> } />}

        <Route path="/setting" element={user ? <Setting /> : <Login />} />
        <Route path="/blogposts/:postId" element={<Single />} />
      </Routes>
    </Router >
  );
}

export default App;
