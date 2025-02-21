import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../public/assets/css/courses.css";
import "../../public/assets/css/pricing.css";
import "../../public/assets/css/heroSection.css";
import PageLayout from "../Common/Page/PageLayout";
import Chatbot from "../Common/OpenAIChat/Chatbot";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");
  const [priceFilter, setPriceFilter] = useState(""); // Thêm state để lọc theo giá
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 10;
  const navigate = useNavigate();

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const result = await axios.get("https://localhost:7091/api/Courses");
      setCourses(result.data);
    } catch (error) {
      console.error("Error when fetching course data:", error);
      setCourses([]);
    }
  };

  const filteredCourses = courses
    .filter((course) => (category ? course.categoryName.toLowerCase() === category.toLowerCase() : true))
    // .filter((course) => (category ? course.categoryId === parseInt(category) : true))
    .filter((course) => {
      if (priceFilter === "") return true;
      const price = parseFloat(course.price);
      if (priceFilter === "low") return price <= 20;
      if (priceFilter === "medium") return price > 20 && price <= 50;
      if (priceFilter === "high") return price > 50;
      return true;
    });

  return (
    <PageLayout>
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
                Building an intelligent online learning platform that
                incorporates AI technology to personalize the learning
                experience. Designed to help teachers and trainers upload and
                manage their lectures, it also creates solutions to help
                students learn more effectively through automation features
                such as creating quizzes based on course content and feedback
                to improve learning performance.
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

      <div className="CourseLayout">
        <div className="container coursesContainer">
          <div className="search-filter d-flex justify-content-between mb-4">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-control w-50"
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="form-select w-25"
            >
              <option value="">All</option>
              <option value="Programming Languages">Programming Languages</option>
              <option value="Artificial Intelligence">Artificial Intelligence</option>
              <option value="Web Development">Web Development</option>
            </select>
            <select
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
              className="form-select w-25"
            >
              <option value="">Filter by Price</option>
              <option value="low">Under $20</option>
              <option value="medium">$20 - $50</option>
              <option value="high">Above $50</option>
            </select>

          </div>

          <div className="row">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course) => (
                <div key={course.courseId} className="col-lg-4 col-md-6 d-flex align-items-stretch mb-4">
                  <div className="course-item" onClick={() => navigate(`/course/${course.courseId}`)}>
                    <img src="../img/courses/course-1.jpg" className="img-fluid" alt={course.courseTitle} />
                    <div className="course-content">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <p className="category">{course.categoryName}</p>
                        <p className="price">${course.price}</p>
                      </div>
                      <h3>{course.courseTitle}</h3>
                      <p className="description">{course.description}</p>
                      <div className="trainer d-flex justify-content-between align-items-center">
                        <div className="trainer-profile d-flex align-items-center">
                          <img src="/img/trainers/trainer-1-2.jpg" className="img-fluid" alt="Trainer" />
                          <a href="#" className="trainer-link">{course.trainerName}</a>
                        </div>
                        <button className="btn btn-primary mt-3 w-100" onClick={() => navigate(`/course/${course.courseId}`)}>
                          View detail
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center">Không có khóa học nào</p>
            )}
          </div>

          <div className="pagination d-flex justify-content-center mt-4">
            {[...Array(Math.ceil(filteredCourses.length / coursesPerPage)).keys()].map((page) => (
              <button key={page + 1} className={`btn ${currentPage === page + 1 ? "btn-primary" : "btn-outline-primary"} mx-1`} onClick={() => setCurrentPage(page + 1)}>
                {page + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
      <Chatbot />
    </PageLayout>
  );
}
