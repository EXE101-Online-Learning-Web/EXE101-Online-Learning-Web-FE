import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../public/assets/css/courses.css";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); 
  const [category, setCategory] = useState(""); 
  const [currentPage, setCurrentPage] = useState(1); 
  const coursesPerPage = 6; 
  const navigate = useNavigate();

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await fetch("http://localhost:7091/api/Courses"); 
      const data = await response.json();
      setCourses(data);
    } catch (error) {
      console.error("Error when fetch course datas:", error);
    }
  };

  const filteredCourses = courses
    .filter((course) => course.courseTitle.toLowerCase().includes(searchQuery.toLowerCase()))
    .filter((course) => (category ? course.categoryId === parseInt(category) : true));

  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);

  return (
    <div className="courses-container">
      <div className="search-filter">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Tất cả danh mục</option>
          <option value="1">Web Development</option>
          <option value="2">Marketing</option>
          <option value="3">AI & Machine Learning</option>
        </select>
      </div>

      <div className="courses-list">
        {currentCourses.length > 0 ? (
          currentCourses.map((course) => (
            <div key={course.courseId} className="course-card" onClick={() => navigate(`/course/${course.courseId}`)}>
              <img src={`/img/courses/${course.image}`} alt={course.courseTitle} />
              <div className="course-info">
                <h3>{course.courseTitle}</h3>
                <p>{course.description}</p>
                <p className="price">${course.price}</p>
              </div>
            </div>
          ))
        ) : (
          <p>Không có khóa học nào</p>
        )}
      </div>

      <div className="pagination">
        {[...Array(Math.ceil(filteredCourses.length / coursesPerPage)).keys()].map((page) => (
          <button key={page + 1} className={currentPage === page + 1 ? "active" : ""} onClick={() => setCurrentPage(page + 1)}>
            {page + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
