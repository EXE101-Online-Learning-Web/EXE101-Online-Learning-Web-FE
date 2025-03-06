import React, { useState } from 'react';
import axios from 'axios';
import CourseHeader from '../CreateCourse/CourseHeader';
import CourseForm from '../CreateCourse/CourseForm';
import PageLayout from "../../../Common/Page/PageLayout";
import ModuleForm from "../CreateCourse/ModuleForm";
import "../../../../public/assets/css/CreateCouse/create-course.css";

const CourseCreate = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // const newErrors = {};
    // // if (!courseTitle.trim()) newErrors.courseTitle = "Course title is required";
    // // if (!description.trim()) newErrors.description = "Description is required";
    // // if (price < 0) newErrors.price = "Price cannot be negative";

    // if (Object.keys(newErrors).length > 0) {
    //   setErrors(newErrors);
    //   return;
    // }

    try {
      // const courseData = { courseTitle, description, categoryId, price, imageUrl, modules };
      // const response = await axios.post("https://your-api-endpoint.com/courses", courseData);
      // if (response.status === 200 || response.status === 201) {
      //   alert("Course created successfully!");
      //   // setCourseTitle("");
      //   // setDescription("");
      //   // setCategoryId(1);
      //   // setPrice(0);
      //   // setImageUrl("");
      //   // setModules([]);
      // }
    } catch (error) {
      console.error("Error creating course:", error);
      alert("Failed to create course. Please try again.");
    }
  };

  return (
    <PageLayout>
      <div className="container py-5">
        <div className="card shadow">
          <CourseHeader/>
          <div className="card-body">
            <form onSubmit={handleSubmit}>

              <CourseForm/>
              <ModuleForm/>

              <div className="d-flex justify-content-between pt-3 border-top">
                <button type="submit" className="btn btn-success d-flex align-items-center" disabled={isSubmitting}>
                  {isSubmitting ? "Processing..." : "Create Course"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default CourseCreate;
