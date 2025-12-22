import { useState } from "react";
import axios from "axios";
import "./Register.css";

export const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");   // Inline error
  const [success, setSuccess] = useState(""); // Success message

  // Handle input changes
  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    setError("");
    setSuccess("");
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (user.password !== user.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/auth/register", {
        username: user.username,
        email: user.email,
        password: user.password,
        phone: "0000000000", // Hidden dummy phone to satisfy backend
      });

      setSuccess("Registration successful! Redirecting to login...");
      setUser({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);
    } catch (err) {
      // Handle backend validation errors (422)
      if (err.response && err.response.status === 422) {
        const backendErrors = err.response.data;
        if (Array.isArray(backendErrors) && backendErrors.length > 0) {
          setError(backendErrors[0].message || "Invalid input");
        } else {
          setError(err.response.data.message || "Invalid input");
        }
      } else {
        setError(err.response?.data?.message || "Registration failed");
      }
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2>Create Account</h2>
        <p>Join us by creating your account</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              name="username"
              value={user.username}
              required
              onChange={handleInput}
            />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={user.email}
              required
              onChange={handleInput}
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Create a password"
              name="password"
              value={user.password}
              required
              onChange={handleInput}
            />
          </div>

          <div className="input-group">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              name="confirmPassword"
              value={user.confirmPassword}
              required
              onChange={handleInput}
            />
            {error && <p className="error-message">{error}</p>}
            {success && <p className="success-message">{success}</p>}
          </div>

          <button type="submit" className="register-btn">
            Register
          </button>
        </form>

        <p className="login-text">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};
