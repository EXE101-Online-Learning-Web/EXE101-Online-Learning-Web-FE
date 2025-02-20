import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import PageLayout from "../Common/Page/PageLayout";

export default function CourseDetail() {
  const { idCourse } = useParams();
  const [course, setCourse] = useState(null);

  const fetchCourseDetail = async () => {
    try {
      const result = await axios.get(`https://localhost:7091/api/Course/${idCourse}`);
      setCourse(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleBuyClick = async () => {
    try {
      const request = {
        userId: "user123",  // Thay bằng thông tin người dùng thực tế, ví dụ: từ session hoặc user login
        orderName: course.courseTitle,  // Sử dụng tên khóa học làm tên đơn hàng
        description: course.description,  // Mô tả khóa học
        totalPrice: course.price,  // Giá của khóa học
        returnUrl: "http://localhost:3000/paymentSuccess",  // URL người dùng sẽ được chuyển hướng sau khi thanh toán thành công
        cancelUrl: "http://localhost:3000/paymentCancelled"  // URL nếu người dùng hủy thanh toán
      };

      // Gửi request tới API để tạo payment link
      const response = await axios.post("https://localhost:7091/api/Payment/payment-link", request);

      if (response.data && response.data.PaymentLink) {
        // Chuyển hướng người dùng đến link thanh toán
        window.location.href = response.data.PaymentLink;
      }
    } catch (error) {
      console.error("Error while creating payment link:", error);
      alert("An error occurred while processing your payment. Please try again.");
    }
  };

  useEffect(() => {
    fetchCourseDetail();
  }, [idCourse]);

  if (!course) {
    return <PageLayout>Loading...</PageLayout>;
  }

  return (
      <PageLayout>
        <div className="course-detail">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <img src="/img/courses/course-1.jpg" className="img-fluid" alt={course.courseTitle} />
                <h2>{course.courseTitle}</h2>
                <p>{course.description}</p>
                <div className="course-meta">
                  <p><strong>Category:</strong> {course.categoryName}</p>
                  <p><strong>Price:</strong> ${course.price / 100}</p>
                  <p><strong>Start Date:</strong> {new Date(course.createDate).toLocaleDateString()}</p>
                  <p><strong>Status:</strong> {course.status === 1 ? "Available" : "Not Available"}</p>
                </div>

                <div className="course-tags">
                  <h5>Tags:</h5>
                  <div className="tags-list">
                    {course.courseTags.map(tag => (
                        <span key={tag.courseTagId} className="badge bg-primary">{tag.tagName}</span>
                    ))}
                  </div>
                </div>

                <div className="course-content">
                  <h3>What You Will Learn</h3>
                  <ul>
                    <li>Fundamentals of AI and machine learning.</li>
                    <li>Understanding Python libraries for AI.</li>
                    <li>Practical applications of AI in real-world scenarios.</li>
                  </ul>
                </div>

                <div className="course-video">
                  <h3>Introduction Video</h3>
                  <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                      title="Course Introduction"
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                  ></iframe>
                </div>

                <div className="instructor-info">
                  <h3>Instructor Information</h3>
                  <div className="instructor-profile">
                    <img src="/img/trainers/trainer-1-2.jpg" alt="Instructor" className="img-fluid" />
                    <p><strong>Instructor Name:</strong> John Doe</p>
                    <p><strong>Experience:</strong> 10 years in AI and Machine Learning.</p>
                    <p><strong>Bio:</strong> John has a PhD in AI and has worked with top tech companies to develop AI-based applications.</p>
                  </div>
                </div>

              </div>

              <div className="col-lg-4">
                <div className="sidebar">
                  <h4>Buy Now</h4>
                  <button className="btn btn-primary" onClick={handleBuyClick}>
                    Buy
                  </button>
                  <h5>Upcoming Sessions</h5>
                  <ul>
                    <li>March 2025</li>
                    <li>June 2025</li>
                    <li>September 2025</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
  );
}
