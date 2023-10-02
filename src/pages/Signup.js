import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/");
  };

  const handleLogin = () => {
    navigate("/auth");
  };
  return (
    <div className="auth">
      <form>
        <div className="header">
          <h1>Sign Up</h1>
        </div>
        <input type="text" placeholder="full name" />
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <div className="buttons">
          <button className="btn" onClick={handleLogin}>
            Login
          </button>
          <button className="btn" onClick={handleSignup}>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};
