import { useContext} from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../App.js";
import axios from "axios";

export const Login = () => {
   const {
    username,
    setUsername,
    password,
    setPassword,
  } = useContext(AppContext);

  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/auth");
  };

  const handleLogin = () => {
    navigate("/");
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      axios.post("http://localhost:3001/auth/login")
    } catch(err) {

    }
  }
  return (
    <div className="auth">
      <form onSubmit={onSubmit}>
        <div className="header">
          <h1>login</h1>
        </div>
        <div className="sub-header">
          <h6>Log in with your email</h6>
        </div>

        <div className="input">
          <input 
            type="text" 
            placeholder="username" 
            onChange={(e) => setUsername(e.target.value)}
            value={username} 
          />
          <input 
            type="password" placeholder="password" 
            onChange={(e) => setPassword(e.target.value)} 
            value={password}
          />
        </div>

        {/* <input type="text" placeholder="full name" /> */}
        <div className="buttons">
          <button className="btn" type="submit" onClick={handleLogin}>
            Login
          </button>
        </div>
        <div className="auth-bottom">
          <p>Create an account?<span onClick={handleSignup}>Sign up</span></p>
        </div>
      </form>
    </div>
  );
};

// const {
//     username,
//     setUsername,
//     password,
//     setPassword,
//   } = useContext(AppContext);

//   const navigate = useNavigate();

//   const handleSignup = () => {
//     navigate("/");
//   };

//   const handleLogin = () => {
//     navigate("/auth");
//   };

//   const onSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       axios.post("localhost:3001/auth/register", {username, password});

//       alert("Registration Completed! Now Please Login")
//     } catch(err) {
//       console.error(err);
//     }
//   }
//   return (
//     <div className="auth">
//       <form onSubmit={onSubmit}>
//         <div className="header">
//           <h1>Sign Up</h1>
//         </div>
//         <input type="text" placeholder="full name" />
//         <input 
//           type="text" 
//           placeholder="username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)} />
//         <input 
//           type="password" placeholder="password" 
//           value={password} 
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <div className="buttons">
//           <button className="btn" onClick={handleLogin}>
//             Login
//           </button>
//           <button className="btn" type="submit" onClick={handleSignup}>
//             Sign Up
//           </button>
//         </div>
//       </form>
//     </div>
//   );