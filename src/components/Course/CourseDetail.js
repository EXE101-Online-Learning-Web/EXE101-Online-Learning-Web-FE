import { useParams } from "react-router-dom";
import PageLayout from "../Common/Page/PageLayout";
import { useState } from "react";

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
    correctAnswer: 0, // chỉ số của đáp án đúng
  },
  {
    id: 2,
    questionText: "Bootstrap được sử dụng để làm gì?",
    options: [
      "Tạo giao diện responsive",
      "Xử lý logic nghiệp vụ",
      "Kết nối CSDL",
      "Tối ưu SEO",
    ],
    correctAnswer: 0,
  },
];

export default function CourseDetail() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const { idCourse } = useParams();

  const handleOptionSelect = (index) => {
    setSelectedOption(index);
  };

  const handleSubmit = () => {
    // Kiểm tra đáp án
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    // Chuyển sang câu hỏi tiếp theo hoặc hiển thị điểm số
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      setShowScore(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
    setShowScore(false);
  };

  return (
    <PageLayout>
      <div className="container mt-5">
        <div className="card shadow">
          <div className="card-header">
            <h3 className="mb-0">Quiz Test</h3>
          </div>
          <div className="card-body">
            {showScore ? (
              <div className="text-center">
                <h4>Bạn đã hoàn thành quiz!</h4>
                <p>
                  Điểm của bạn: {score} / {questions.length}
                </p>
                <button className="btn btn-primary" onClick={handleRestart}>
                  Làm lại quiz
                </button>
              </div>
            ) : (
              <>
                <div className="mb-4">
                  <h5>
                    Câu hỏi {currentQuestion + 1}/{questions.length}
                  </h5>
                  <p>{questions[currentQuestion].questionText}</p>
                </div>
                <div className="list-group">
                  {questions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      className={`list-group-item list-group-item-action ${
                        selectedOption === index ? "active" : ""
                      }`}
                      onClick={() => handleOptionSelect(index)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                <div className="mt-4 text-right">
                  <button
                    className="btn btn-success"
                    onClick={handleSubmit}
                    disabled={selectedOption === null}
                  >
                    {currentQuestion === questions.length - 1
                      ? "Xem kết quả"
                      : "Câu tiếp theo"}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
