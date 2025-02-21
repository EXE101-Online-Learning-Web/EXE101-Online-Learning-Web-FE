import { useParams } from "react-router-dom";
import PageLayout from "../Common/Page/PageLayout";
import { useState } from "react";
import SweetAlert from "sweetalert";
import axios from "axios";

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

export default function QuizDetail() {
  const { quizId } = useParams();

  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [AIExplain, setAIExplain] = useState("");

  const handleOptionSelect = (index) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = index;
    setAnswers(newAnswers);
  };

  const calculateScore = () => {
    let score = 0;
    answers.forEach((answer, idx) => {
      if (answer === questions[idx].correctAnswer) {
        score++;
      }
    });
    return score;
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    const unanswered = answers
      .map((answer, idx) => (answer === null ? idx + 1 : null))
      .filter((num) => num !== null);

    if (unanswered.length > 0) {
      SweetAlert(
        "Nộp bài thất bại!",
        `Bạn chưa trả lời các câu sau: ${unanswered.join(
          ", "
        )}. Vui lòng hoàn thành hết các câu hỏi.`,
        "error"
      );
      setSubmitAttempted(true);
      return;
    }
    sendMessage();
    setShowScore(true);
  };

  const handleRestart = () => {
    setAnswers(Array(questions.length).fill(null));
    setCurrentQuestion(0);
    setShowScore(false);
    setSubmitAttempted(false);
  };

  const isCurrentUnanswered =
    submitAttempted && answers[currentQuestion] === null;

  async function sendMessage() {
    let question = "I am doing the educate app. I have these question and options for answer:"

    questions.forEach((element, index) => {
      question += (index  + ". " + element.questionText)
      element.options.forEach((option, indexes) => {
        question += "\n" + String.fromCharCode(97 + indexes) + ". " + option
      })
      question += "\n" + ". True answer:" + String.fromCharCode(97 + element.correctAnswer) + "\n"
    });

    question += "The user in my app is answer those: "
    answers.forEach((element, index) => {
      question += (index + 1) + ". " + String.fromCharCode(97 + element) + " "
    })

    question += "Explain why user answer right, and why user answer wrong base on correct answer I have given, each answer is explain in 1 line (20 words) format by: 1. ... 2. ..."

    try {
      const response = await axios.get(
        `https://localhost:7091/api/ChatGPTTest/get-answer`,
        {
          params: {
            question: question
          }
        }
      );

    setAIExplain(response.data.answer)
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  return (
    <PageLayout>
      <div
        className="container mt-5 my-4"
        style={{
          height: "500px",
        }}
      >
        <div
          className="card shadow"
          style={{
            maxHeight: "500px",
          }}
        >
          <div className="card-header">
            <h3 className="mb-0">Quiz Test</h3>
          </div>
          <div className="card-body" style={{ height: "400px" }}>
            {showScore ? (
              <div className="text-center">
                <h4>Bạn đã hoàn thành quiz!</h4>
                <p>
                  Điểm của bạn: {calculateScore()} / {questions.length}
                </p>
                <div>{AIExplain}</div>
                <button className="btn btn-primary" onClick={handleRestart}>
                  Làm lại quiz
                </button>
              </div>
            ) : (
              <>
                <div className="mb-4">
                  <h5 className={isCurrentUnanswered ? "text-danger" : ""}>
                    Câu hỏi {currentQuestion + 1}/{questions.length}
                  </h5>
                  <p className={isCurrentUnanswered ? "text-danger" : ""}>
                    {questions[currentQuestion].questionText}
                  </p>
                </div>
                <div
                  className="list-group"
                  style={{
                    maxHeight: "200px",
                    height: "200px",
                    overflow: "auto",
                  }}
                >
                  {questions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      className={`list-group-item list-group-item-action ${
                        answers[currentQuestion] === index ? "active" : ""
                      }`}
                      onClick={() => handleOptionSelect(index)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                <div className="mt-4 d-flex justify-content-between">
                  <button
                    className="btn btn-secondary"
                    onClick={handlePrevious}
                    disabled={currentQuestion === 0}
                  >
                    Câu trước
                  </button>
                  <div>
                    <button
                      className="btn btn-success me-2"
                      onClick={handleNext}
                      disabled={currentQuestion === questions.length - 1}
                    >
                      Câu tiếp theo
                    </button>
                    <button className="btn btn-warning" onClick={handleSubmit}>
                      Nộp bài
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
