import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Login from "./components/authentification/Login";
import Register from "./components/authentification/Register";
import Welcome from "./components/welcome/WelcomePage";
import Messages from "./components/communication/messages/Messages";
import Navbar from "./components/common/Navbar";
import { auth } from "./FirebaseConfig";
import AdminDashboard from "./components/pages/AdminDashboard";

function App() {
  const [user, setUser] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const showNavbar =
    location.pathname !== "/login" &&
    location.pathname !== "/register" &&
    location.pathname !== "/dashboardadmin" &&
    !location.pathname.startsWith("/admin");

  return (
    <div>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/register" element={<Register />} />
        <Route path="/chat" element={<Messages />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboardadmin/*" element={<AdminDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
