import React, { useEffect, useRef, useState,  } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "../../public/assets/css/home.css";
import "../../public/assets/css/heroSection.css";

export default function Home() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const storedUserName = localStorage.getItem("userName");
    const storedAvatar = localStorage.getItem("avatar");

    if (storedUserName && storedAvatar) {
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
                <a href="mailto:contact@example.com">EduQuest.service@gmail.com</a>
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
              <a href="index.html" class="logo">
                  <img src="/img/EduQuestLogo.png" alt="EduQuest Logo" class="logo-img"/>
                  <h1 id="pageName">EduQuest</h1>
                  <span>.</span>
              </a>
              <nav class="navmenu">
                  <ul class="nav-links">
                      <li><a href="#hero"><i class="fas fa-home"></i> Home</a></li>
                      <li><a href="#courses"><i class="fas fa-book"></i> Courses</a></li>
                      <li><a href="#about"><i class="fas fa-info-circle"></i> About</a></li>
                      <li><a href="#pricing"><i class="fas fa-dollar-sign"></i> Pricing</a></li>
                  </ul>
                  <div className="auth-buttons">
                    {userName ? (
                      <div className="d-flex align-items-center" onClick={toggleDropdown}>
                        <span className="ms-2 user-name">{userName}</span>
                        <img src={avatar || "/img/default-avatar.png"} alt="User Avatar" className="rounded-circle avatar-img" width="40" height="40" />
                        
                        {/* Dropdown Menu */}
                        {isDropdownOpen && (
                          <div className="dropdown-menu">
                            <a href="#profile" className="dropdown-item">View Profile</a>
                            <a href="#" className="dropdown-item" onClick={handleLogout}>Logout</a>
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

      <main class="main">
        <section id="hero" class="hero section accent-background">
          <div
            class="container position-relative"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div class="row gy-5 justify-content-between">
              <div class="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                <h2>
                  <span>Welcome to </span>
                  <span id="accent">EduQuest</span>
                </h2>
                <p>
                  Building an intelligent online learning platform that incorporates AI technology to personalize the learning experience. 
                  Designed to help teachers and trainers upload and manage their lectures, it also creates solutions to help students learn 
                  more effectively through automation features such as creating quizzes based on course content and feedback to improve learning 
                  performance.
                </p>
                <div class="d-flex">
                  <a href="#about" class="btn-get-started">
                    Get Started
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                    class="glightbox btn-watch-video d-flex align-items-center"
                  >
                    <i class="bi bi-play-circle"></i>
                    <span>Watch Video</span>
                  </a>
                </div>
              </div>
              <div class="col-lg-5 order-1 order-lg-2">
                <img
                  src="assets/img/hero-img.svg"
                  class="img-fluid"
                  alt=""
                ></img>
              </div>
            </div>
          </div>
        </section>

    <section id="courses" class="courses section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                        <div class="course-item">
                            <img src="/img/courses/course-1.jpg" class="img-fluid" alt="Full-Stack Web Development"/>
                            <div class="course-content">
                                <div class="d-flex justify-content-between align-items-center mb-3">
                                    <p class="category">Full-Stack Web Development</p>
                                    <p class="price">$299</p>
                                </div>
                                <h3><a href="course-details.html">Become a Full-Stack Developer</a></h3>
                                <p class="description">
                                    Learn HTML, CSS, JavaScript, React, and Node.js to build dynamic and responsive web applications. 
                                    Hands-on projects and real-world applications included.
                                </p>
                                <div class="trainer d-flex justify-content-between align-items-center">
                                    <div class="trainer-profile d-flex align-items-center">
                                        <img src="/img/trainers/trainer-1-2.jpg" class="img-fluid" alt="John Doe"/>
                                        <a href="" class="trainer-link">John Doe</a>
                                    </div>
                                    <div class="trainer-rank d-flex align-items-center">
                                        <i class="bi bi-person user-icon"></i>&nbsp;120 
                                        &nbsp;&nbsp;
                                        <i class="bi bi-heart heart-icon"></i>&nbsp;98
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                        <div class="course-item">
                            <img src="/img/courses/course-2.jpg" class="img-fluid" alt="Digital Marketing"/>
                            <div class="course-content">
                                <div class="d-flex justify-content-between align-items-center mb-3">
                                    <p class="category">Digital Marketing for IT</p>
                                    <p class="price">$199</p>
                                </div>
                                <h3><a href="course-details.html">SEO & Social Media Strategies</a></h3>
                                <p class="description">
                                    Master SEO, content marketing, and social media strategies tailored for IT and tech businesses. 
                                    Learn how to drive traffic and optimize brand presence online.
                                </p>
                                <div class="trainer d-flex justify-content-between align-items-center">
                                    <div class="trainer-profile d-flex align-items-center">
                                        <img src="/img/trainers/trainer-2-2.jpg" class="img-fluid" alt="Sarah Lee"/>
                                        <a href="" class="trainer-link">Sarah Lee</a>
                                    </div>
                                    <div class="trainer-rank d-flex align-items-center">
                                        <i class="bi bi-person user-icon"></i>&nbsp;85
                                        &nbsp;&nbsp;
                                        <i class="bi bi-heart heart-icon"></i>&nbsp;72
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="300">
                        <div class="course-item">
                            <img src="/img/courses/course-3.jpg" class="img-fluid" alt="AI Copywriting"/>
                            <div class="course-content">
                                <div class="d-flex justify-content-between align-items-center mb-3">
                                    <p class="category">AI-Powered Copywriting</p>
                                    <p class="price">$149</p>
                                </div>
                                <h3><a href="course-details.html">Write Better with AI</a></h3>
                                <p class="description">
                                    Leverage AI tools like ChatGPT and Jasper to create high-quality blog posts, landing pages, 
                                    and ad copy that convert. Perfect for tech professionals and content creators.
                                </p>
                                <div class="trainer d-flex justify-content-between align-items-center">
                                    <div class="trainer-profile d-flex align-items-center">
                                        <img src="/img/trainers/trainer-3-2.jpg" class="img-fluid" alt="Michael Chen"/>
                                        <a href="" class="trainer-link">Michael Chen</a>
                                    </div>
                                    <div class="trainer-rank d-flex align-items-center">
                                        <i class="bi bi-person user-icon"></i>&nbsp;60
                                        &nbsp;&nbsp;
                                        <i class="bi bi-heart heart-icon"></i>&nbsp;80
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section id="about" class="about section">
            <div class="container">
                <div class="row gy-4">
                    <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                        <h3>Transforming Online Education with AI</h3>
                        <img src="/img/about-2.jpg" class="img-fluid rounded-4 mb-4" alt="EduQuest AI Learning"/>
                        <p>
                            EduQuest leverages artificial intelligence to create adaptive learning paths, generate 
                            personalized quizzes, and provide real-time feedback. Our goal is to revolutionize online 
                            education by making learning more interactive, engaging, and tailored to individual needs.
                        </p>
                        <p>
                            Whether you're a student seeking skill enhancement or an instructor looking to manage courses 
                            efficiently, EduQuest offers powerful tools to streamline the process. With AI-driven analytics, 
                            we ensure that every learner gets the most relevant and effective learning experience.
                        </p>
                    </div>

                    <div class="col-lg-6" data-aos="fade-up" data-aos-delay="250">
                        <div class="content ps-0 ps-lg-5">
                            <p class="fst-italic">
                                Why choose EduQuest? Our platform is designed to bridge the gap between traditional 
                                learning and modern AI-powered education.
                            </p>
                            <ul>
                                <li>
                                    <i class="bi bi-check-circle-fill"></i> 
                                    <span>AI-powered course recommendations tailored to each learner’s needs.</span>
                                </li>
                                <li>
                                    <i class="bi bi-check-circle-fill"></i> 
                                    <span>Automated quiz generation based on course content for efficient knowledge retention.</span>
                                </li>
                                <li>
                                    <i class="bi bi-check-circle-fill"></i> 
                                    <span>Real-time analytics and progress tracking to optimize learning outcomes.</span>
                                </li>
                            </ul>
                            <p>
                                EduQuest empowers educators and learners by offering smart solutions for course management, 
                                progress tracking, and interactive assessments. Join us in shaping the future of education!
                            </p>

                            <div class="position-relative mt-4">
                                <img src="/img/about-2.jpg" class="img-fluid rounded-4" alt="EduQuest Learning"/>
                                <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" class="glightbox pulsating-play-btn">
                                    {/* <i class="bi bi-play-circle"></i> */}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="pricing" class="pricing section">
            <div class="container" data-aos="zoom-in" data-aos-delay="100">
                <div class="row g-3 justify-content-center">
                    
                    <div class="col-lg-4 col-md-6">
                        <div class="pricing-item">
                            <div class="icon">
                                <i class="bi bi-box"></i>
                            </div>
                            <h4 class="fw-semibold fs-5">Free Plan</h4>
                            <h5 class="price">$0<span>/month</span></h5>
                            <ul class="list-unstyled">
                                <li><i class="bi bi-check"></i> Limited free courses</li>
                                <li><i class="bi bi-check"></i> AI course recommendations</li>
                                <li class="text-muted"><i class="bi bi-x"></i> No quizzes & analytics</li>
                                <li class="text-muted"><i class="bi bi-x"></i> No certification</li>
                            </ul>
                            <a href="#" class="buy-btn">Get Started</a>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="pricing-item">
                            <div class="icon">
                                <i class="bi bi-rocket"></i>
                            </div>
                            <h4 class="fw-semibold fs-5">Premium Plan</h4>
                            <h5 class="price">$29<span>/month</span></h5>
                            <ul class="list-unstyled">
                                <li><i class="bi bi-check"></i> Unlimited course access</li>
                                <li><i class="bi bi-check"></i> AI-powered learning</li>
                                <li><i class="bi bi-check"></i> Personalized quizzes</li>
                                <li><i class="bi bi-check"></i> Certification included</li>
                            </ul>
                            <a href="#" class="buy-btn">Subscribe Now</a>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="pricing-item">
                            <div class="icon">
                                <i class="bi bi-person-video3"></i>
                            </div>
                            <h4 class="fw-semibold fs-5">Instructor Plan</h4>
                            <h5 class="price">$49<span>/month</span></h5>
                            <ul class="list-unstyled">
                                <li><i class="bi bi-check"></i> Unlimited course uploads</li>
                                <li><i class="bi bi-check"></i> AI-powered student insights</li>
                                <li><i class="bi bi-check"></i> Revenue sharing & analytics</li>
                                <li><i class="bi bi-check"></i> Advanced tracking & reports</li>
                            </ul>
                            <a href="#" class="buy-btn">Join as Instructor</a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
      </main>

      {/* footer */}
      <footer id="footer" class="footer accent-background">
        <div class="container footer-top">
            <div class="row gy-4">
                <div class="col-lg-4 col-md-12 footer-about">
                    <a href="index.html" class="logo d-flex align-items-center">
                        <img src="/img/EduQuestLogo.png" alt="EduQuest Logo" class="footer-logo"/>
                        <span class="sitename">EduQuest</span>
                    </a>
                    <p class="footer-description">
                        Elevate your learning experience with AI-powered courses, 
                        personalized quizzes, and interactive mentorship programs.  
                    </p>
                    <div class="social-links d-flex mt-3">
                        <a href="#"><i class="bi bi-twitter-x"></i></a>
                        <a href="#"><i class="bi bi-facebook"></i></a>
                        <a href="#"><i class="bi bi-instagram"></i></a>
                        <a href="#"><i class="bi bi-linkedin"></i></a>
                    </div>
                </div>

                <div class="col-lg-2 col-md-6 footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Courses</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>

                <div class="col-lg-2 col-md-6 footer-links">
                    <h4>Our Services</h4>
                    <ul>
                        <li><a href="#">AI-Powered Learning</a></li>
                        <li><a href="#">Automated Quizzes</a></li>
                        <li><a href="#">Personalized Feedback</a></li>
                        <li><a href="#">Interactive Courses</a></li>
                        <li><a href="#">Mentorship Program</a></li>
                    </ul>
                </div>

                <div class="col-lg-4 col-md-12 footer-contact text-center text-md-start">
                    <h4>Contact Us</h4>
                    <p><i class="bi bi-geo-alt-fill"></i> EduQuest HQ, Silicon Valley, CA</p>
                    <p><i class="bi bi-telephone-fill"></i> +1 800 123 4567</p>
                    <p><i class="bi bi-envelope-fill"></i> support@eduquest.com</p>
                    <p><i class="bi bi-clock-fill"></i> Mon - Fri: 9:00 AM - 6:00 PM</p>
                </div>
            </div>
        </div>

        <div class="container copyright text-center mt-4">
            <p>© 2024 <strong>EduQuest</strong>. All Rights Reserved.</p>
        </div>
    </footer>
    </>
  );
}
