import React, { useEffect, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

export default function Home() {
  return (
    <>
      <header id="header" class="header fixed-top">
        <div class="topbar d-flex align-items-center">
          <div class="container d-flex justify-content-center justify-content-md-between">
            <div class="contact-info d-flex align-items-center">
              <i class="bi bi-envelope d-flex align-items-center">
                <a href="mailto:contact@example.com">contact@example.com</a>
              </i>
              <i class="bi bi-phone d-flex align-items-center ms-4">
                <span>+1 5589 55488 55</span>
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

        <div class="branding d-flex align-items-cente">
          <div class="container position-relative d-flex align-items-center justify-content-between">
            <a href="index.html" class="logo d-flex align-items-center">
              <h1 class="sitename">Impact</h1>
              <span>.</span>
            </a>

            <nav id="navmenu" class="navmenu">
              <ul>
                <li>
                  <a href="#hero" class="active">
                    Home<br></br>
                  </a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                  <a href="#team">Team</a>
                </li>
                <li>
                  <a href="blog.html">Blog</a>
                </li>
                <li class="dropdown">
                  <a href="#">
                    <span>Dropdown</span>{" "}
                    <i class="bi bi-chevron-down toggle-dropdown"></i>
                  </a>
                  <ul>
                    <li>
                      <a href="#">Dropdown 1</a>
                    </li>
                    <li class="dropdown">
                      <a href="#">
                        <span>Deep Dropdown</span>{" "}
                        <i class="bi bi-chevron-down toggle-dropdown"></i>
                      </a>
                      <ul>
                        <li>
                          <a href="#">Deep Dropdown 1</a>
                        </li>
                        <li>
                          <a href="#">Deep Dropdown 2</a>
                        </li>
                        <li>
                          <a href="#">Deep Dropdown 3</a>
                        </li>
                        <li>
                          <a href="#">Deep Dropdown 4</a>
                        </li>
                        <li>
                          <a href="#">Deep Dropdown 5</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Dropdown 2</a>
                    </li>
                    <li>
                      <a href="#">Dropdown 3</a>
                    </li>
                    <li>
                      <a href="#">Dropdown 4</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
              <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
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
                  <span class="accent">Impact</span>
                </h2>
                <p>
                  Sed autem laudantium dolores. Voluptatem itaque ea consequatur
                  eveniet. Eum quas beatae cumque eum quaerat.
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

          <div
            class="icon-boxes position-relative"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div class="container position-relative">
              <div class="row gy-4 mt-5">
                <div class="col-xl-3 col-md-6">
                  <div class="icon-box">
                    <div class="icon">
                      <i class="bi bi-easel"></i>
                    </div>
                    <h4 class="title">
                      <a href="" class="stretched-link">
                        Lorem Ipsum
                      </a>
                    </h4>
                  </div>
                </div>

                <div class="col-xl-3 col-md-6">
                  <div class="icon-box">
                    <div class="icon">
                      <i class="bi bi-gem"></i>
                    </div>
                    <h4 class="title">
                      <a href="" class="stretched-link">
                        Sed ut perspiciatis
                      </a>
                    </h4>
                  </div>
                </div>

                <div class="col-xl-3 col-md-6">
                  <div class="icon-box">
                    <div class="icon">
                      <i class="bi bi-geo-alt"></i>
                    </div>
                    <h4 class="title">
                      <a href="" class="stretched-link">
                        Magni Dolores
                      </a>
                    </h4>
                  </div>
                </div>

                <div class="col-xl-3 col-md-6">
                  <div class="icon-box">
                    <div class="icon">
                      <i class="bi bi-command"></i>
                    </div>
                    <h4 class="title">
                      <a href="" class="stretched-link">
                        Nemo Enim
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" class="about section">
          <div class="container section-title" data-aos="fade-up">
            <h2>
              About Us<br></br>
            </h2>
            <p>
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
              consectetur velit
            </p>
          </div>

          <div class="container">
            <div class="row gy-4">
              <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <h3>
                  Voluptatem dignissimos provident laboris nisi ut aliquip ex ea
                  commodo
                </h3>
                <img
                  src="/img/about-2.jpg"
                  class="img-fluid rounded-4 mb-4"
                  alt=""
                ></img>
                <p>
                  Ut fugiat ut sunt quia veniam. Voluptate perferendis
                  perspiciatis quod nisi et. Placeat debitis quia recusandae
                  odit et consequatur voluptatem. Dignissimos pariatur
                  consectetur fugiat voluptas ea.
                </p>
                <p>
                  Temporibus nihil enim deserunt sed ea. Provident sit expedita
                  aut cupiditate nihil vitae quo officia vel. Blanditiis
                  eligendi possimus et in cum. Quidem eos ut sint rem veniam
                  qui. Ut ut repellendus nobis tempore doloribus debitis
                  explicabo similique sit. Accusantium sed ut omnis beatae neque
                  deleniti repellendus.
                </p>
              </div>
              <div class="col-lg-6" data-aos="fade-up" data-aos-delay="250">
                <div class="content ps-0 ps-lg-5">
                  <p class="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <ul>
                    <li>
                      <i class="bi bi-check-circle-fill"></i>{" "}
                      <span>
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </span>
                    </li>
                    <li>
                      <i class="bi bi-check-circle-fill"></i>{" "}
                      <span>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit.
                      </span>
                    </li>
                    <li>
                      <i class="bi bi-check-circle-fill"></i>{" "}
                      <span>
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate
                        trideta storacalaperda mastiro dolore eu fugiat nulla
                        pariatur.
                      </span>
                    </li>
                  </ul>
                  <p>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident
                  </p>

                  <div class="position-relative mt-4">
                    <img
                      src="img/about-2.jpg"
                      class="img-fluid rounded-4"
                      alt=""
                    ></img>
                    <a
                      href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                      class="glightbox pulsating-play-btn"
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="clients" className="clients section">
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
        </section>

        <section id="stats" class="stats section">
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
        </section>

        <section id="services" class="services section">
          <div class="container section-title" data-aos="fade-up">
            <h2>Our Services</h2>
            <p>
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
              consectetur velit
            </p>
          </div>

          <div class="container">
            <div class="row gy-4">
              <div
                class="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div class="service-item  position-relative">
                  <div class="icon">
                    <i class="bi bi-activity"></i>
                  </div>
                  <h3>Nesciunt Mete</h3>
                  <p>
                    Provident nihil minus qui consequatur non omnis maiores. Eos
                    accusantium minus dolores iure perferendis tempore et
                    consequatur.
                  </p>
                  <a
                    href="service-details.html"
                    class="readmore stretched-link"
                  >
                    Read more <i class="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div
                class="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div class="service-item position-relative">
                  <div class="icon">
                    <i class="bi bi-broadcast"></i>
                  </div>
                  <h3>Eosle Commodi</h3>
                  <p>
                    Ut autem aut autem non a. Sint sint sit facilis nam iusto
                    sint. Libero corrupti neque eum hic non ut nesciunt dolorem.
                  </p>
                  <a
                    href="service-details.html"
                    class="readmore stretched-link"
                  >
                    Read more <i class="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div
                class="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div class="service-item position-relative">
                  <div class="icon">
                    <i class="bi bi-easel"></i>
                  </div>
                  <h3>Ledo Markt</h3>
                  <p>
                    Ut excepturi voluptatem nisi sed. Quidem fuga consequatur.
                    Minus ea aut. Vel qui id voluptas adipisci eos earum
                    corrupti.
                  </p>
                  <a
                    href="service-details.html"
                    class="readmore stretched-link"
                  >
                    Read more <i class="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div
                class="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div class="service-item position-relative">
                  <div class="icon">
                    <i class="bi bi-bounding-box-circles"></i>
                  </div>
                  <h3>Asperiores Commodit</h3>
                  <p>
                    Non et temporibus minus omnis sed dolor esse consequatur.
                    Cupiditate sed error ea fuga sit provident adipisci neque.
                  </p>
                  <a
                    href="service-details.html"
                    class="readmore stretched-link"
                  >
                    Read more <i class="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div
                class="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div class="service-item position-relative">
                  <div class="icon">
                    <i class="bi bi-calendar4-week"></i>
                  </div>
                  <h3>Velit Doloremque</h3>
                  <p>
                    Cumque et suscipit saepe. Est maiores autem enim facilis ut
                    aut ipsam corporis aut. Sed animi at autem alias eius
                    labore.
                  </p>
                  <a
                    href="service-details.html"
                    class="readmore stretched-link"
                  >
                    Read more <i class="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div
                class="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div class="service-item position-relative">
                  <div class="icon">
                    <i class="bi bi-chat-square-text"></i>
                  </div>
                  <h3>Dolori Architecto</h3>
                  <p>
                    Hic molestias ea quibusdam eos. Fugiat enim doloremque aut
                    neque non et debitis iure. Corrupti recusandae ducimus enim.
                  </p>
                  <a
                    href="service-details.html"
                    class="readmore stretched-link"
                  >
                    Read more <i class="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="testimonials section">
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
        </section>
      </main>


    </>
  );
}