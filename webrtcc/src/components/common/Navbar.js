import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../FirebaseConfig";
import "./Navbar.css";
import logo from "../../assets/logonav.png"; // Update path as per your project structure
import hamMenuIcon from "../../assets/ham-menu-icon.png"; // Import image
import closeIcon from "../../assets/close-icon.png"; // Import image

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [isNavVisible, setIsNavVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const toggleNavVisibility = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <nav className="navbar">
      <div className="container-flex">
        <Link to="/" className="navbar-brand a1">
          <img className="img1" src={logo} alt="site logo" />
        </Link>

        {/* Button to show the menu */}
        <button
          type="button"
          className="navbar-show-btn"
          onClick={toggleNavVisibility}
        >
          <img src={hamMenuIcon} alt="Show menu" />
        </button>

        {/* Navigation items */}
        <div className={`navbar-collapse ${isNavVisible ? "navbar-show" : ""}`}>
          <button
            type="button"
            className="navbar-hide-btn"
            onClick={toggleNavVisibility}
          >
            <img src={closeIcon} alt="Close menu" />
          </button>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="auth/login_admin.php" className="nav-link">
                Admin
              </a>
            </li>
            <li className="nav-item">
              <a href="auth/login_praticient.php" className="nav-link">
                Vous êtes professionnel de santé ?
              </a>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/#about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/#posts" className="nav-link">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/#contact" className="nav-link">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <a href="auth/login_patient.php" className="nav-link">
                Gérer mes rendez vous
              </a>
            </li>
            <li className="nav-item">
              <a href="auth/login_patient.php" className="nav-link">
                <button type="submit" className="btn btn-primary-custom">
                  Se connecter
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
