import { UserCircle,GraduationCap } from "lucide-react";
import "./dashboard.css";
import { useNavigate } from "react-router-dom";
import Boy1 from "../assets/boy1.jpg";
import Girl from "../assets/girl.png";
import { AppContext } from "../App.js";
import { useContext } from "react";
import  RechartsExample  from "../graphs/RechartsExample.js";
import RechartsExample2 from "../graphs/RechartsExample2.js";
import RechartsExample3 from "../graphs/RechartsExample3.js";
import RechartsExample4 from "../graphs/RechartsExample4.js";
// import { motion } from "framer-motion";
// import ChatBot from "react-simple-chatbot";
// import ChatBot from "../components/ChatBot.js";


export const Dashboard = () => {
       const {
        name,
        setName,
        location,
        setLocation,
        age,
        setAge,
        gender,
        setGender,
        hobbies,
        setHobbies,
        pastQualification,
        setPastQualification,
        currentQualification,
        setCurrentQualification,
        futureJobs,
        setFutureJobs,
  } = useContext(AppContext);

    const navigate = useNavigate();

    const handleQuiz = () => {
        navigate("/assessment");
    }

    const handleForm = () => {
        navigate("/form");
    }
    return (
        <div className="dashboard">

            <div className="personal">

                <div className="image">
                    {/* <UserCircle strokeWidth={0.5} size={270} /> */}
                    <img src={Boy1} alt="" />
                </div>
                <div className="details">
                    <h1 className="page-header">Personal Details</h1>
                    <div className="row"><span className="label">Name</span>: {name}</div>
                    <div className="row"><span className="label">Location</span>: {location} </div>
                    <div className="row"><span className="label">Age</span>: {age} </div>
                    <div className="row"><span className="label">Gender</span>: {gender} </div>
                    <div className="row"><span className="label">Hobbies</span>: {hobbies} </div>

                </div>
            </div>


            <div className="educational">
    
                <div className="image">
                    {/* <GraduationCap strokeWidth={0.5} size={400} /> */}
                    <img src={Girl} alt="" />
                </div>
                <div className="details">
                    <h1 className="page-header">Educational Details</h1>
                    <div className="row"><span className="label">Past Qualification</span>: {pastQualification} </div>
                    <div className="row"><span className="label">Current/Pursuing</span>: {currentQualification} </div>
                    <div className="row"><span className="label">Future Job Interests</span>: {futureJobs} </div>
                </div>

            </div>

            
            <div className="dashboad-buttons">

            <button onClick={handleQuiz} className="btn">Take a Quiz</button>
            <button onClick={handleForm} className="btn">Go to Form</button>
            </div>

            <div className="graphs-container">
               
                <h2>Year-wise Salary Statistics</h2>

                <div className="rowdashboard">

                    <RechartsExample />
                    <RechartsExample2/>
                </div>
                <div className="rowdashboard">

                    <RechartsExample3 />
                    <RechartsExample4/>
                </div>
            
            </div>

            {/* <ChatBot /> */}
        </div>

    );
};