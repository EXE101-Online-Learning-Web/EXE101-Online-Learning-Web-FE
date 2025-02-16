import { jwtDecode } from "jwt-decode";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../../public/assets/css/header.css";

export default function Header() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAdmin, setAdmin] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const storedUserName = localStorage.getItem("userName");
    const storedAvatar = localStorage.getItem("avatar");
    const token = localStorage.getItem("authToken");
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setAdmin(decodedToken.role === "Admin");
      } catch (error) {
        console.error("Invalid token:", error);
        setAdmin(false);
      }
    }

    if (storedUserName) {
      setUserName(storedUserName);
      setAvatar(storedAvatar);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userName");
    localStorage.removeItem("avatar");
    setUserName("");
    setAvatar("");
    navigate("/login");
  };

  const navigateAdmin = () => {
    navigate("/admin");
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
      <header id="header" className="header fixed-top">
        <div className="topbar d-flex align-items-center">
          <div className="container d-flex justify-content-center justify-content-md-between">
            <div className="contact-info d-flex align-items-center">
              <i className="bi bi-envelope d-flex align-items-center">
                <a href="mailto:contact@example.com">EduQuest.service@gmail.com</a>
              </i>
              <i className="bi bi-phone d-flex align-items-center ms-4">
                <span>+84386543757</span>
              </i>
            </div>
            <div className="social-links d-none d-md-flex align-items-center">
              <a href="#" className="twitter">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="#" className="facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="linkedin">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="navbar">
          <div className="container">
            <Link to="/" className="logo">
              <img src="/img/EduQuestLogo.png" alt="EduQuest Logo" className="logo-img" />
              <h1 id="pageName">EduQuest</h1>
              <span>.</span>
            </Link>
            <nav className="navmenu">
              <ul className="nav-links">
                <li>
                  <a href="#hero"><i className="fas fa-home"></i> Home</a>
                </li>
                <li>
                  <a href="#courses"><i className="fas fa-book"></i> Courses</a>
                </li>
                <li>
                  <a href="#about"><i className="fas fa-info-circle"></i> About</a>
                </li>
                <li>
                  <a href="#pricing"><i className="fas fa-dollar-sign"></i> Pricing</a>
                </li>
              </ul>

              <div className="auth-buttons">
                {userName ? (
                  <div className="nav-item dropdown no-arrow" ref={dropdownRef}>
                    <button
                      className="nav-link dropdown-toggle"
                      onClick={toggleDropdown}
                      aria-expanded={isDropdownOpen}
                    >
                      <span className="ms-2 user-name">{userName}</span>
                      <img
                        src={avatar || "/img/icon-default.png"}
                        alt="User Avatar"
                        className="rounded-circle avatar-img"
                        width="40"
                        height="40"
                      />
                    </button>
                    {isDropdownOpen && (
                      <div className={`dropdown-menu ${isDropdownOpen ? "show" : ""} shadow animated--grow-in`}>
                        <a className="dropdown-item" href="#">
                          <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                          Profile
                        </a>
                        {isAdmin && (
                          <a onClick={navigateAdmin} className="dropdown-item">Admin Management</a>
                        )}
                        <div className="dropdown-divider"></div>
                        <a
                          className="dropdown-item"
                          data-toggle="modal"
                          data-target="#logoutModal"
                          onClick={handleLogout}
                        >
                          <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                          Logout
                        </a>
                      </div>
                    )}
                  </div>
                ) : (
                  <>
                    <Link to="/login" className="login-btn">Login</Link>
                    <Link to="/register" className="register-btn">Register</Link>
                  </>
                )}
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
