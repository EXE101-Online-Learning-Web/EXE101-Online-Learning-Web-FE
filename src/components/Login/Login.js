import React, { useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://localhost:7091/api/Auth/Login",
        {
          email,
          password,
        }
      );

      if (response.data && response.data.token) {
        const token = response.data.token;
        localStorage.setItem("authToken", token);

        try {
          const decodedToken = jwtDecode(token.result);
          const role = decodedToken.role;

          if (role === "Admin") {
            navigate("/admin");
          } else {
            navigate("/home");
          }
        } catch (error) {
          console.error("Error decoding token:", error);
        }
      }
    } catch (err) {
      setError("Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin.");
    }
  };

  return (
    <div className="login-container">
      <h2>Đăng nhập</h2>
      {error && <h6 className="error">{error}</h6>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mật khẩu</label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Đăng nhập
        </button>
      </form>
    </div>
  );
}
