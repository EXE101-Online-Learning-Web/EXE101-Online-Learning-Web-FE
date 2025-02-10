import React, { useEffect, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "../../public/assets/css/home.css";
import "../../public/assets/css/heroSection.css";

export default function Home() {
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
                  <div class="auth-buttons">
                      <a href="login.html" class="login-btn">Login</a>
                      <a href="register.html" class="register-btn">Register</a>
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

        {/* <div class="icon-boxes position-relative" data-aos="fade-up" data-aos-delay="200">
            <div class="container-fluid position-relative">
                <div class="row gx-3 gy-3 mt-0">
                    <div class="col-lg-3 col-md-6">
                        <div class="icon-box">
                            <div class="icon"><i class="bi bi-easel"></i></div>
                            <h4 class="title"><a href="" class="stretched-link">Interactive Courses</a></h4>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6">
                        <div class="icon-box">
                            <div class="icon"><i class="bi bi-gem"></i></div>
                            <h4 class="title"><a href="" class="stretched-link">AI-Powered Learning</a></h4>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6">
                        <div class="icon-box">
                            <div class="icon"><i class="bi bi-geo-alt"></i></div>
                            <h4 class="title"><a href="" class="stretched-link">Global Community</a></h4>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6">
                        <div class="icon-box">
                            <div class="icon"><i class="bi bi-command"></i></div>
                            <h4 class="title"><a href="" class="stretched-link">Smart Automation</a></h4>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}

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


        {/* <section id="clients" className="clients section">
          <div className="container">
            <Swiper
              modules={[Autoplay, Pagination]}
              loop={true}
              speed={600}
              autoplay={{
                delay: 5000,
              }}
              slidesPerView="auto"
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                480: {
                  slidesPerView: 3,
                  spaceBetween: 60,
                },
                640: {
                  slidesPerView: 4,
                  spaceBetween: 80,
                },
                992: {
                  slidesPerView: 6,
                  spaceBetween: 120,
                },
              }}
            >
              <SwiperSlide>
                <img
                  src="img/clients/client-1.png"
                  className="img-fluid"
                  alt="Client 1"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="img/clients/client-2.png"
                  className="img-fluid"
                  alt="Client 2"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="img/clients/client-3.png"
                  className="img-fluid"
                  alt="Client 3"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="img/clients/client-4.png"
                  className="img-fluid"
                  alt="Client 4"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="img/clients/client-5.png"
                  className="img-fluid"
                  alt="Client 5"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="img/clients/client-6.png"
                  className="img-fluid"
                  alt="Client 6"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="img/clients/client-7.png"
                  className="img-fluid"
                  alt="Client 7"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="img/clients/client-8.png"
                  className="img-fluid"
                  alt="Client 8"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </section> */}

        {/* <section id="stats" class="stats section">
          <div class="container" data-aos="fade-up" data-aos-delay="100">
            <div class="row gy-4 align-items-center">
              <div class="col-lg-5">
                <img src="/img/stats-img.svg" alt="" class="img-fluid"></img>
              </div>

              <div class="col-lg-7">
                <div class="row gy-4">
                  <div class="col-lg-6">
                    <div class="stats-item d-flex">
                      <i class="bi bi-emoji-smile flex-shrink-0"></i>
                      <div>
                        <span
                          data-purecounter-start="0"
                          data-purecounter-end="232"
                          data-purecounter-duration="1"
                          class="purecounter"
                        ></span>
                        <p>
                          <strong>Happy Clients</strong>{" "}
                          <span>consequuntur quae</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-6">
                    <div class="stats-item d-flex">
                      <i class="bi bi-journal-richtext flex-shrink-0"></i>
                      <div>
                        <span
                          data-purecounter-start="0"
                          data-purecounter-end="521"
                          data-purecounter-duration="1"
                          class="purecounter"
                        ></span>
                        <p>
                          <strong>Projects</strong>{" "}
                          <span>adipisci atque cum quia aut</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-6">
                    <div class="stats-item d-flex">
                      <i class="bi bi-headset flex-shrink-0"></i>
                      <div>
                        <span
                          data-purecounter-start="0"
                          data-purecounter-end="1453"
                          data-purecounter-duration="1"
                          class="purecounter"
                        ></span>
                        <p>
                          <strong>Hours Of Support</strong>{" "}
                          <span>aut commodi quaerat</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-6">
                    <div class="stats-item d-flex">
                      <i class="bi bi-people flex-shrink-0"></i>
                      <div>
                        <span
                          data-purecounter-start="0"
                          data-purecounter-end="32"
                          data-purecounter-duration="1"
                          class="purecounter"
                        ></span>
                        <p>
                          <strong>Hard Workers</strong>{" "}
                          <span>rerum asperiores dolor</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
       {/* <section id="services" class="services section">
          <div class="container">
              <div class="service-container">
                  <div class="service-item" data-aos="fade-up" data-aos-delay="100">
                      <div class="icon"><i class="bi bi-lightbulb"></i></div>
                      <div class="content">
                          <h3>AI-Powered Courses</h3>
                          <p>Personalized course recommendations based on learning habits.</p>
                      </div>
                  </div>

                  <div class="service-item" data-aos="fade-up" data-aos-delay="200">
                      <div class="icon"><i class="bi bi-file-earmark-text"></i></div>
                      <div class="content">
                          <h3>Automated Quizzes</h3>
                          <p>AI-generated quizzes after lessons for better retention.</p>
                      </div>
                  </div>

                  <div class="service-item" data-aos="fade-up" data-aos-delay="300">
                      <div class="icon"><i class="bi bi-graph-up-arrow"></i></div>
                      <div class="content">
                          <h3>Progress Tracking</h3>
                          <p>AI-powered analytics for tracking and improving learning performance.</p>
                      </div>
                  </div>
              </div>
          </div>
      </section> */}

        {/* <section id="testimonials" className="testimonials section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Testimonials</h2>
            <p>
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
              consectetur velit
            </p>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <Swiper
              modules={[Autoplay, Pagination]}
              loop={true}
              speed={600}
              autoplay={{
                delay: 5000,
              }}
              slidesPerView="auto"
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 40,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
              }}
            >
              <SwiperSlide>
                <div className="testimonial-item">
                  <img
                    src="/img/testimonials/testimonials-1.jpg"
                    className="testimonial-img"
                    alt="Testimonial 1"
                  />
                  <h3>Saul Goodman</h3>
                  <h4>Ceo & Founder</h4>
                  <div className="stars">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    <span>
                      Proin iaculis purus consequat sem cure digni ssim donec
                      porttitora entum suscipit rhoncus. Accusantium quam,
                      ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                      risus at semper.
                    </span>
                    <i className="bi bi-quote quote-icon-right"></i>
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="testimonial-item">
                  <img
                    src="/img/testimonials/testimonials-2.jpg"
                    className="testimonial-img"
                    alt="Testimonial 2"
                  />
                  <h3>Sara Wilsson</h3>
                  <h4>Designer</h4>
                  <div className="stars">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    <span>
                      Export tempor illum tamen malis malis eram quae irure esse
                      labore quem cillum quid cillum eram malis quorum velit
                      fore eram velit sunt aliqua noster fugiat irure amet legam
                      anim culpa.
                    </span>
                    <i className="bi bi-quote quote-icon-right"></i>
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="testimonial-item">
                  <img
                    src="/img/testimonials/testimonials-3.jpg"
                    className="testimonial-img"
                    alt="Testimonial 3"
                  />
                  <h3>Jena Karlis</h3>
                  <h4>Store Owner</h4>
                  <div className="stars">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    <span>
                      Enim nisi quem export duis labore cillum quae magna enim
                      sint quorum nulla quem veniam duis minim tempor labore
                      quem eram duis noster aute amet eram fore quis sint minim.
                    </span>
                    <i className="bi bi-quote quote-icon-right"></i>
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="testimonial-item">
                  <img
                    src="/img/testimonials/testimonials-4.jpg"
                    className="testimonial-img"
                    alt="Testimonial 4"
                  />
                  <h3>Matt Brandon</h3>
                  <h4>Freelancer</h4>
                  <div className="stars">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    <span>
                      Fugiat enim eram quae cillum dolore dolor amet nulla culpa
                      multos export minim fugiat minim velit minim dolor enim
                      duis veniam ipsum anim magna sunt elit fore quem dolore
                      labore illum veniam.
                    </span>
                    <i className="bi bi-quote quote-icon-right"></i>
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="testimonial-item">
                  <img
                    src="/img/testimonials/testimonials-5.jpg"
                    className="testimonial-img"
                    alt="Testimonial 5"
                  />
                  <h3>John Larson</h3>
                  <h4>Entrepreneur</h4>
                  <div className="stars">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    <span>
                      Quis quorum aliqua sint quem legam fore sunt eram irure
                      aliqua veniam tempor noster veniam enim culpa labore duis
                      sunt culpa nulla illum cillum fugiat legam esse veniam
                      culpa fore nisi cillum quid.
                    </span>
                    <i className="bi bi-quote quote-icon-right"></i>
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="swiper-pagination"></div>
          </div>
        </section> */}
        {/* team */}
        {/* <section id="team" class="team section">
          <div class="container section-title" data-aos="fade-up">
            <h2>Our Team</h2>
            <p>
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
              consectetur velit
            </p>
          </div>

          <div class="container">
            <div class="row gy-4">
              <div
                class="col-xl-3 col-md-6 d-flex"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div class="member">
                  <img
                    src="/img/team/team-1.jpg"
                    class="img-fluid"
                    alt=""
                  ></img>
                  <h4>Walter White</h4>
                  <span>Web Development</span>
                  <div class="social">
                    <a href="">
                      <i class="bi bi-twitter-x"></i>
                    </a>
                    <a href="">
                      <i class="bi bi-facebook"></i>
                    </a>
                    <a href="">
                      <i class="bi bi-instagram"></i>
                    </a>
                    <a href="">
                      <i class="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div
                class="col-xl-3 col-md-6 d-flex"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div class="member">
                  <img
                    src="/img/team/team-2.jpg"
                    class="img-fluid"
                    alt=""
                  ></img>
                  <h4>Sarah Jhinson</h4>
                  <span>Marketing</span>
                  <div class="social">
                    <a href="">
                      <i class="bi bi-twitter-x"></i>
                    </a>
                    <a href="">
                      <i class="bi bi-facebook"></i>
                    </a>
                    <a href="">
                      <i class="bi bi-instagram"></i>
                    </a>
                    <a href="">
                      <i class="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div
                class="col-xl-3 col-md-6 d-flex"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div class="member">
                  <img
                    src="/img/team/team-3.jpg"
                    class="img-fluid"
                    alt=""
                  ></img>
                  <h4>William Anderson</h4>
                  <span>Content</span>
                  <div class="social">
                    <a href="">
                      <i class="bi bi-twitter-x"></i>
                    </a>
                    <a href="">
                      <i class="bi bi-facebook"></i>
                    </a>
                    <a href="">
                      <i class="bi bi-instagram"></i>
                    </a>
                    <a href="">
                      <i class="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div
                class="col-xl-3 col-md-6 d-flex"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div class="member">
                  <img
                    src="/img/team/team-4.jpg"
                    class="img-fluid"
                    alt=""
                  ></img>
                  <h4>Amanda Jepson</h4>
                  <span>Accountant</span>
                  <div class="social">
                    <a href="">
                      <i class="bi bi-twitter-x"></i>
                    </a>
                    <a href="">
                      <i class="bi bi-facebook"></i>
                    </a>
                    <a href="">
                      <i class="bi bi-instagram"></i>
                    </a>
                    <a href="">
                      <i class="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* price */}
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

        {/* contact */}
        {/* <section id="contact" class="contact section">
          <div class="container section-title" data-aos="fade-up">
            <h2>Contact</h2>
            <p>
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
              consectetur velit
            </p>
          </div>

          <div class="container" data-aos="fade-up" data-aos-delay="100">
            <div class="row gx-lg-0 gy-4">
              <div class="col-lg-4">
                <div class="info-container d-flex flex-column align-items-center justify-content-center">
                  <div
                    class="info-item d-flex"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <i class="bi bi-geo-alt flex-shrink-0"></i>
                    <div>
                      <h3>Address</h3>
                      <p>A108 Adam Street, New York, NY 535022</p>
                    </div>
                  </div>

                  <div
                    class="info-item d-flex"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <i class="bi bi-telephone flex-shrink-0"></i>
                    <div>
                      <h3>Call Us</h3>
                      <p>+1 5589 55488 55</p>
                    </div>
                  </div>

                  <div
                    class="info-item d-flex"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <i class="bi bi-envelope flex-shrink-0"></i>
                    <div>
                      <h3>Email Us</h3>
                      <p>info@example.com</p>
                    </div>
                  </div>

                  <div
                    class="info-item d-flex"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    <i class="bi bi-clock flex-shrink-0"></i>
                    <div>
                      <h3>Open Hours:</h3>
                      <p>Mon-Sat: 11AM - 23PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-8">
                <form
                  action="forms/contact.php"
                  method="post"
                  class="php-email-form"
                  data-aos="fade"
                  data-aos-delay="100"
                >
                  <div class="row gy-4">
                    <div class="col-md-6">
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="Your Name"
                        required=""
                      ></input>
                    </div>

                    <div class="col-md-6 ">
                      <input
                        type="email"
                        class="form-control"
                        name="email"
                        placeholder="Your Email"
                        required=""
                      ></input>
                    </div>

                    <div class="col-md-12">
                      <input
                        type="text"
                        class="form-control"
                        name="subject"
                        placeholder="Subject"
                        required=""
                      ></input>
                    </div>

                    <div class="col-md-12">
                      <textarea
                        class="form-control"
                        name="message"
                        rows="8"
                        placeholder="Message"
                        required=""
                      ></textarea>
                    </div>

                    <div class="col-md-12 text-center">
                      <div class="loading">Loading</div>
                      <div class="error-message"></div>
                      <div class="sent-message">
                        Your message has been sent. Thank you!
                      </div>

                      <button type="submit">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section> */}

        {/* course details */}
        {/* <section
          id="courses-course-details"
          class="courses-course-details section"
        >
          <div class="container section-title" data-aos="fade-up">
            <h2>Courses details</h2>

          </div>
          <div class="container" data-aos="fade-up">
            <div class="row">
              <div class="col-lg-8">
                <img
                  src="/img/course-detail/course-details.jpg"
                  class="img-fluid"
                  alt=""
                ></img>
                <h3>Et enim incidunt fuga tempora</h3>
                <p>
                  Qui et explicabo voluptatem et ab qui vero et voluptas. Sint
                  voluptates temporibus quam autem. Atque nostrum voluptatum
                  laudantium a doloremque enim et ut dicta. Nostrum ducimus est
                  iure minima totam doloribus nisi ullam deserunt. Corporis aut
                  officiis sit nihil est. Labore aut sapiente aperiam. Qui
                  voluptas qui vero ipsum ea voluptatem. Omnis et est.
                  Voluptatem officia voluptatem adipisci et iusto provident
                  doloremque consequatur. Quia et porro est. Et qui corrupti
                  laudantium ipsa. Eum quasi saepe aperiam qui delectus quaerat
                  in. Vitae mollitia ipsa quam. Ipsa aut qui numquam eum iste
                  est dolorum. Rem voluptas ut sit ut.
                </p>
              </div>
              <div class="col-lg-4">
                <div class="course-info d-flex justify-content-between align-items-center">
                  <h5>Trainer</h5>
                  <p>
                    <a href="#">Walter White</a>
                  </p>
                </div>

                <div class="course-info d-flex justify-content-between align-items-center">
                  <h5>Course Fee</h5>
                  <p>$165</p>
                </div>

                <div class="course-info d-flex justify-content-between align-items-center">
                  <h5>Available Seats</h5>
                  <p>30</p>
                </div>

                <div class="course-info d-flex justify-content-between align-items-center">
                  <h5>Schedule</h5>
                  <p>5.00 pm - 7.00 pm</p>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* <section id="tabs" class="tabs section">
          <div class="container" data-aos="fade-up" data-aos-delay="100">
            <div class="row">
              <div class="col-lg-3">
                <ul class="nav nav-tabs flex-column">
                  <li class="nav-item">
                    <a
                      class="nav-link active show"
                      data-toggle="tab"
                      href="#tab-1"
                    >
                      Modi sit est
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-2">
                      Unde praesentium sed
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-3">
                      Pariatur explicabo vel
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-4">
                      Nostrum qui quasi
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-5">
                      Iusto ut expedita aut
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-9 mt-4 mt-lg-0">
                <div class="tab-content">
                  <div class="tab-pane active show" id="tab-1">
                    <div class="row">
                      <div class="col-lg-8 details order-2 order-lg-1">
                        <h3>Architecto ut aperiam autem id</h3>
                        <p class="fst-italic">
                          Qui laudantium consequatur laborum sit qui ad sapiente
                          dila parde sonata raqer a videna mareta paulona marka
                        </p>
                        <p>
                          Et nobis maiores eius. Voluptatibus ut enim blanditiis
                          atque harum sint. Laborum eos ipsum ipsa odit magni.
                          Incidunt hic ut molestiae aut qui. Est repellat minima
                          eveniet eius et quis magni nihil. Consequatur dolorem
                          quaerat quos qui similique accusamus nostrum rem vero
                        </p>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">
                        <img
                          src="/img/course-detail/tab-1.png"
                          alt=""
                          class="img-fluid"
                        ></img>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="tab-2">
                    <div class="row">
                      <div class="col-lg-8 details order-2 order-lg-1">
                        <h3>Et blanditiis nemo veritatis excepturi</h3>
                        <p class="fst-italic">
                          Qui laudantium consequatur laborum sit qui ad sapiente
                          dila parde sonata raqer a videna mareta paulona marka
                        </p>
                        <p>
                          Ea ipsum voluptatem consequatur quis est. Illum error
                          ullam omnis quia et reiciendis sunt sunt est. Non
                          aliquid repellendus itaque accusamus eius et velit
                          ipsa voluptates. Optio nesciunt eaque beatae accusamus
                          lerode pakto madirna desera vafle de nideran pal
                        </p>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">
                        <img
                          src="/img/course-detail/tab-2.png"
                          alt=""
                          class="img-fluid"
                        ></img>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="tab-3">
                    <div class="row">
                      <div class="col-lg-8 details order-2 order-lg-1">
                        <h3>
                          Impedit facilis occaecati odio neque aperiam sit
                        </h3>
                        <p class="fst-italic">
                          Eos voluptatibus quo. Odio similique illum id quidem
                          non enim fuga. Qui natus non sunt dicta dolor et. In
                          asperiores velit quaerat perferendis aut
                        </p>
                        <p>
                          Iure officiis odit rerum. Harum sequi eum illum
                          corrupti culpa veritatis quisquam. Neque
                          necessitatibus illo rerum eum ut. Commodi ipsam minima
                          molestiae sed laboriosam a iste odio. Earum odit
                          nesciunt fugiat sit ullam. Soluta et harum voluptatem
                          optio quae
                        </p>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">
                        <img
                          src="/img/course-detail/tab-3.png"
                          alt=""
                          class="img-fluid"
                        ></img>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="tab-4">
                    <div class="row">
                      <div class="col-lg-8 details order-2 order-lg-1">
                        <h3>
                          Fuga dolores inventore laboriosam ut est accusamus
                          laboriosam dolore
                        </h3>
                        <p class="fst-italic">
                          Totam aperiam accusamus. Repellat consequuntur iure
                          voluptas iure porro quis delectus
                        </p>
                        <p>
                          Eaque consequuntur consequuntur libero expedita in
                          voluptas. Nostrum ipsam necessitatibus aliquam fugiat
                          debitis quis velit. Eum ex maxime error in consequatur
                          corporis atque. Eligendi asperiores sed qui veritatis
                          aperiam quia a laborum inventore
                        </p>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">
                        <img
                          src="/img/course-detail/tab-4.png"
                          alt=""
                          class="img-fluid"
                        ></img>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="tab-5">
                    <div class="row">
                      <div class="col-lg-8 details order-2 order-lg-1">
                        <h3>
                          Est eveniet ipsam sindera pad rone matrelat sando reda
                        </h3>
                        <p class="fst-italic">
                          Omnis blanditiis saepe eos autem qui sunt debitis
                          porro quia.
                        </p>
                        <p>
                          Exercitationem nostrum omnis. Ut reiciendis
                          repudiandae minus. Omnis recusandae ut non quam ut
                          quod eius qui. Ipsum quia odit vero atque qui
                          quibusdam amet. Occaecati sed est sint aut vitae
                          molestiae voluptate vel
                        </p>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">
                        <img
                          src="/img/course-detail/tab-5.png"
                          alt=""
                          class="img-fluid"
                        ></img>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
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
