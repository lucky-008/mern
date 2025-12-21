import "./Login.css";

export const Login = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        <p>Welcome back! Please login to your account.</p>

        <form>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <p className="register-text">
          Don’t have an account? <a href="/register">Register</a>
        </p>
      </div>
    </div>
  );
};
