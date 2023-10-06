import { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import "./auth.css";

export const Auth = () => {
    return (
        <div className="auth">

            <Login />
            <Register />

        </div>

    );
};

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    //defining a useCookies hook      //name of cookie(access_token)
    const [_, setCookies] = useCookies(["access_token"]);

    const navigate = useNavigate();

    const onSubmit = async (event) => {
        event.preventDefault();

        try{

            const response = await axios.post("http://localhost:3001/auth/login", {
                username,
                password,
            });

            //setCookies to token from user 
            setCookies("access_token", response.data.token);
            //getting userID 
            window.localStorage.setItem("userID", response.data.userID);
            //navigate to home page whener user logs in
            navigate("/");

        } catch(err) {
            console.error(err);
        }
    }
    return (
        <Form 
            //passing values in form
            username={username} 
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            label="Login"
            onSubmit={onSubmit}
        />
    );
}

const Register = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = async (event) => {
        //this prevent page from refreshing on submit
        event.preventDefault();

        try{
            //syntax: await axios.post(url , object);
            await axios.post("http://localhost:3001/auth/register", {
                //object for the body for the request
                username,
                password,
            });
            alert("Registration Completed! Now Log in.");
        } catch(err) {
            //this is basically console.log instead it will show in red
            console.error(err);
        }

    };

    return (
        <Form 
            //passing value in props
            username={username} 
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            label="Register"
            onSubmit={onSubmit}
        />
    );
}

//component form
const Form = ({username,setUsername, password, setPassword,label,
onSubmit}) => {
    return (
     <div className="auth-container">

            <form onSubmit={onSubmit}>

                <h2> {label} </h2>
                <div className="form-group">
                    <label htmlFor="username"> Username: </label>
                    <input
                        type="text"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </div>
                 <div className="form-group">
                    <label htmlFor="password"> Password: </label>
                    <input 
                        type="password" 
                        value={password}
                        onChange={(event) => setPassword(event.target.value)} 
                    />
                </div>

                <button type="submit" className="btn"> {label} </button>

            </form>

        </div>
    );
}

//  const {
//     username,
//     setUsername,
//     password,
//     setPassword,
//   } = useContext(AppContext);

//   const navigate = useNavigate();

//   const handleSignup = () => {
//     navigate("/Signup");
//   };

//   const handleLogin = () => {
//     navigate("/");
//   };
//   const login = () => {
//     console.log("login");
//   };

//   const onSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       axios.post("http://localhost:3001/auth/login")
//     } catch(err) {

//     }
//   }
//   return (
//     <div className="auth">
//       <form onSubmit={onSubmit}>
//         <div className="header">
//           <h1>login</h1>
//         </div>
//         <div className="sub-header">
//           <h6>Log in with your email</h6>
//         </div>

//         <div className="input">
//           <input 
//             type="text" 
//             placeholder="username" 
//             onChange={(e) => setUsername(e.target.value)}
//             value={username} 
//           />
//           <input 
//             type="password" placeholder="password" 
//             onChange={(e) => setPassword(e.target.value)} 
//             value={password}
//           />
//         </div>

//         {/* <input type="text" placeholder="full name" /> */}
//         <div className="buttons">
//           <button className="btn" type="submit" onClick={handleLogin}>
//             Login
//           </button>
//         </div>
//         <div className="auth-bottom">
//           <p>Create an account?<span onClick={handleSignup}>Sign up</span></p>
//         </div>
//       </form>
//     </div>
//   );