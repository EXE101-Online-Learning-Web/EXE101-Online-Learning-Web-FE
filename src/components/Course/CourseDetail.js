import { useParams } from "react-router-dom";
import PageLayout from "../Common/Page/PageLayout";
import { useState } from "react";
import SweetAlert from "sweetalert";

const questions = [
  {
    id: 1,
    questionText: "React là gì?",
    options: [
      "Thư viện JavaScript để xây dựng giao diện người dùng",
      "Ngôn ngữ lập trình",
      "Framework backend",
      "Công cụ quản lý state",
    ],
    correctAnswer: 0,
  },
  {
    id: 2,
    questionText: "Bootstrap được sử dụng để làm gì?",
    options: [
      "Tạo giao diện responsive",
      "Xử lý logic nghiệp vụ",
      "Kết nối CSDL",
      "Kết nối CSDL",
      "Kết nối CSDL",
      "Kết nối CSDL",
      "Kết nối CSDL",
      "Kết nối CSDL",
      "Kết nối CSDL",
      "Kết nối CSDL",
      "Tối ưu SEO",
    ],
    correctAnswer: 0,
  },
  {
    id: 3,
    questionText: "Nodejs is backend?",
    options: ["Yes", "No"],
    correctAnswer: 0,
  },
];

export default function CourseDetail() {
  const { idCourse } = useParams();

  return (
    <PageLayout>
      {idCourse}
    </PageLayout>
  );
}
