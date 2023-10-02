import { useNavigate } from "react-router-dom";

export const Auth = () => {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/Signup");
  };

  const handleLogin = () => {
    navigate("/");
  };
  const login = () => {
    console.log("login");
  };
  return (
    <div className="auth">
      <form>
        <div className="header">
          <h1>login</h1>
        </div>

        <div className="input">
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
        </div>

        {/* <input type="text" placeholder="full name" /> */}
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
