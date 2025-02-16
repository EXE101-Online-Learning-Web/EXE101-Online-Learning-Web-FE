import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../public/assets/css/register.css";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post(
        "https://localhost:7091/api/Auth/Register",
        {
          email,
          password,
        }
      );

      if (response.data) {
        navigate("/login"); // Navigate to login page after successful registration
      }
    } catch (err) {
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        height: "100vh",
        background: "url('https://source.unsplash.com/1600x900/?nature,water') no-repeat center center fixed",
        backgroundSize: "cover",
      }}
    >
      <div
        className="card shadow-lg p-5"
        style={{
          maxWidth: "400px",
          width: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          borderRadius: "12px",
        }}
      >
        <h2 className="text-center mb-4 font-weight-bold" style={{ color: "#343a40" }}>Register</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="email" className="font-weight-semibold">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter email"
              style={{ borderRadius: "8px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="password" className="font-weight-semibold">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter password"
              style={{ borderRadius: "8px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="confirmPassword" className="font-weight-semibold">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              className="form-control"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder="Confirm password"
              style={{ borderRadius: "8px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 mt-4" style={{ borderRadius: "8px" }}>
            Register
          </button>
        </form>
        <div className="text-center mt-3">
          <small>
            Already have an account?{" "}
            <a href="/login" className="text-decoration-none" style={{ color: "#007bff" }}>
              Login
            </a>
          </small>
        </div>
      </div>
    </div>
  );
}
