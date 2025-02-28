import { useState } from "react";
import PageLayout from "../../Common/Page/PageLayout";
import SweetAlert from "sweetalert";

export default function CourseCreate() {
  const [courseTitle, setCourseTitle] = useState("");
  const [description, setDescription] = useState("");
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState(null);

  const handleAddQuestion = () => {
    if (newQuestion.trim() === "" || correctAnswer === null) {
      SweetAlert("Lỗi", "Vui lòng nhập câu hỏi và chọn đáp án đúng!", "error");
      return;
    }
    
    setQuestions([
      ...questions,
      { questionText: newQuestion, options, correctAnswer },
    ]);
    
    setNewQuestion("");
    setOptions(["", "", "", ""]);
    setCorrectAnswer(null);
  };

  const handleSubmit = () => {
    if (courseTitle.trim() === "" || questions.length === 0) {
      SweetAlert("Lỗi", "Vui lòng nhập tiêu đề và ít nhất một câu hỏi!", "error");
      return;
    }

    const courseData = {
      title: courseTitle,
      description,
      questions,
    };

    console.log("Dữ liệu khóa học:", courseData);
    SweetAlert("Thành công", "Khóa học đã được tạo!", "success");
  };

  return (
    <PageLayout>
      <div className="container mt-5">
        <div className="card shadow">
          <div className="card-header">
            <h3>Tạo Khóa Học</h3>
          </div>
          <div className="card-body">
            <div className="mb-3">
              <label className="form-label">Tiêu đề khóa học</label>
              <input
                type="text"
                className="form-control"
                value={courseTitle}
                onChange={(e) => setCourseTitle(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Mô tả</label>
              <textarea
                className="form-control"
                rows="3"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <hr />
            <h5>Thêm câu hỏi</h5>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Nhập câu hỏi"
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
              />
            </div>
            {options.map((opt, index) => (
              <div className="form-check" key={index}>
                <input
                  type="radio"
                  className="form-check-input"
                  name="correctAnswer"
                  checked={correctAnswer === index}
                  onChange={() => setCorrectAnswer(index)}
                />
                <input
                  type="text"
                  className="form-control d-inline w-75"
                  placeholder={`Đáp án ${index + 1}`}
                  value={opt}
                  onChange={(e) => {
                    const newOptions = [...options];
                    newOptions[index] = e.target.value;
                    setOptions(newOptions);
                  }}
                />
              </div>
            ))}
            <button className="btn btn-info mt-2" onClick={handleAddQuestion}>
              Thêm câu hỏi
            </button>
            <hr />
            <h5>Danh sách câu hỏi</h5>
            <ul className="list-group">
              {questions.map((q, idx) => (
                <li key={idx} className="list-group-item">
                  {q.questionText}
                </li>
              ))}
            </ul>
            <button className="btn btn-success mt-3" onClick={handleSubmit}>
              Tạo khóa học
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}