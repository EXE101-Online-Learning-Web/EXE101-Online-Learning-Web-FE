import React, { useState } from 'react';
import { PlusCircle, Trash2, HelpCircle } from 'lucide-react';
import { Check } from 'lucide-react';
import "../../../../public/assets/css/CreateCouse/create-course-questions.css";

const CourseQuestions = ({ modules, setModules, moduleIndex, lessonIndex, quizzes }) => {
  const handleAddQuizToLesson = (moduleIndex, lessonIndex) => {
    const newQuiz = { questionText: '', options: ['', '', '', ''], correctAnswer: null };
    const updatedModules = [...modules];
    updatedModules[moduleIndex].lessons[lessonIndex].quizzes.push(newQuiz);
    setModules(updatedModules);
  };

  const [errors, setErrors] = useState({});
  const [newQuestion, setNewQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const safeQuizzes = Array.isArray(quizzes) ? quizzes : [];

  return (
    <div className="mb-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="h5 d-flex align-items-center">
          <HelpCircle className="me-2" size={20} />
          Course Questions
        </h2>
        <button
          type="button"
          className="btn btn-primary d-flex align-items-center"
          onClick={() => handleAddQuizToLesson(moduleIndex)}
        >
          <PlusCircle className="me-1" size={16} />
          Add Question
        </button>
      </div>

      {/* Question Form */}
      <div className="bg-light p-3 rounded mb-4 course-questions-board">
        <div className="mb-3">
          <label className="form-label">Question Text*</label>
          <input
            type="text"
            className={`form-control ${errors.questionText ? 'is-invalid' : ''}`}
            placeholder="Enter your question"
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
          />
          {errors.questionText && <div className="invalid-feedback">{errors.questionText}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Answer Options* (select the correct one)</label>
          {options.map((option, index) => (
            <div key={index} className="d-flex align-items-center mb-2">
              <div className="form-check me-2">
                <input
                  type="radio"
                  className="form-check-input"
                  name="correctAnswer"
                  id={`option-${index}`}
                  checked={correctAnswer === index}
                  onChange={() => setCorrectAnswer(index)}
                />
              </div>
              <input
                type="text"
                className={`form-control ${errors.options ? 'is-invalid' : ''}`}
                placeholder={`Option ${index + 1}`}
                value={option}
                onChange={(e) => {
                  const newOptions = [...options];
                  newOptions[index] = e.target.value;
                  setOptions(newOptions);
                }}
              />
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-end gap-2">
          <button type="button" className="btn btn-outline-secondary">
            Cancel
          </button>
          <button type="button" className="btn btn-primary" onClick={() => handleAddQuizToLesson(moduleIndex, lessonIndex)}>
            Add Question
          </button>
        </div>
      </div>

      {/* Questions List */}
      <div className="mb-4">
        {safeQuizzes.map((question, index) => (
          <div key={index} className="card mb-3 question-item">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <h3 className="h6 fw-bold">{index + 1}. {question.questionText}</h3>
                  <div className="mt-2">
                    {question.options.map((option, optIndex) => (
                      <div key={optIndex} className="d-flex align-items-center mb-1">
                        <span className={`option-badge ${question.correctAnswer === optIndex ? 'correct' : 'normal'}`}>
                          {String.fromCharCode(65 + optIndex)}
                        </span>
                        <span className={question.correctAnswer === optIndex ? 'correct-answer' : ''}>{option}</span>
                        {question.correctAnswer === optIndex && <Check className="ms-2 text-success" size={16} />}
                      </div>
                    ))}
                  </div>
                </div>
                <button type="button" className="btn btn-sm text-danger">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseQuestions;
