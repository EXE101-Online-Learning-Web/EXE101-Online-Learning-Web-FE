import { jwtDecode } from "jwt-decode";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAdmin, setAdmin] = useState(false);

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

  const naviagteAdmin = () => {
    navigate("/admin");
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown visibility
  };

  return (
    <>
      <header id="header" class="header fixed-top">
        <div class="topbar d-flex align-items-center">
          <div class="container d-flex justify-content-center justify-content-md-between">
            <div class="contact-info d-flex align-items-center">
              <i class="bi bi-envelope d-flex align-items-center">
                <a href="mailto:contact@example.com">
                  EduQuest.service@gmail.com
                </a>
              </i>
              <i class="bi bi-phone d-flex align-items-center ms-4">
                <span>+84386543757</span>
              </i>
            </div>
            <div class="social-links d-none d-md-flex align-items-center">
              <a href="#" class="twitter">
                <i class="bi bi-twitter-x"></i>
              </a>
              <a href="#" class="facebook">
                <i class="bi bi-facebook"></i>
              </a>
              <a href="#" class="instagram">
                <i class="bi bi-instagram"></i>
              </a>
              <a href="#" class="linkedin">
                <i class="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="navbar">
          <div class="container">
            <Link to="/" class="logo">
              <img
                src="/img/EduQuestLogo.png"
                alt="EduQuest Logo"
                class="logo-img"
              />
              <h1 id="pageName">EduQuest</h1>
              <span>.</span>
            </Link>
            <nav class="navmenu">
              <ul class="nav-links">
                <li>
                  <a href="#hero">
                    <i class="fas fa-home"></i> Home
                  </a>
                </li>
                <li>
                  <a href="#courses">
                    <i class="fas fa-book"></i> Courses
                  </a>
                </li>
                <li>
                  <a href="#about">
                    <i class="fas fa-info-circle"></i> About
                  </a>
                </li>
                <li>
                  <a href="#pricing">
                    <i class="fas fa-dollar-sign"></i> Pricing
                  </a>
                </li>
              </ul>
              <div className="auth-buttons">
                {userName ? (
                  <div
                    className="d-flex align-items-center"
                    onClick={toggleDropdown}
                  >
                    <span className="ms-2 user-name">{userName}</span>
                    <img
                      src={avatar || "/img/icon-default.png"}
                      alt="User Avatar"
                      className="rounded-circle avatar-img"
                      width="40"
                      height="40"
                    />

                    {/* Dropdown Menu */}
                    <div
                      class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                      aria-labelledby="userDropdown"
                    >
                      <a class="dropdown-item" href="#">
                        <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                        Profile
                      </a>
                      <a class="dropdown-item" href="#">
                        <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                        Settings
                      </a>
                      <a class="dropdown-item" href="#">
                        <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                        Activity Log
                      </a>
                      <div class="dropdown-divider"></div>
                      <a
                        class="dropdown-item"
                        data-toggle="modal"
                        data-target="#logoutModal"
                      >
                        <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                        Logout
                      </a>
                    </div>
                    
                    {isDropdownOpen && (
                      <div className="dropdown-menu">
                        <a href="#profile" className="dropdown-item">
                          View Profile
                        </a>
                        {isAdmin ? (
                          <a onClick={naviagteAdmin}>Admin Management</a>
                        ) : (
                          ""
                        )}
                        <a
                          href="#"
                          className="dropdown-item"
                          onClick={handleLogout}
                        >
                          Logout
                        </a>
                      </div>
                    )}
                  </div>
                ) : (
                  <>
                    <Link to="/login" className="login-btn">
                      Login
                    </Link>
                    <Link to="/register" className="register-btn">
                      Register
                    </Link>
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
