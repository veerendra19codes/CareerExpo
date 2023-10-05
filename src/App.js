import React,{ createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.js";
import { Assessment } from "./pages/Assessment.js";
import { Career } from "./pages/Career.js";
import { Dashboard} from "./pages/Dashboard.js";
import { Auth } from "./pages/Auth.js";
import { Login } from "./pages/Login.js";
import { Navbar } from "./components/Navbar.js";
import { Footer } from "./components/Footer.js";
import { AccountManager } from "./pages/AccountManager.jsx";
import { ArtificialEngineer } from "./pages/ArtificialEngineer.jsx";
import { FullStackdeveloper } from "./pages/FullStackDeveloper.jsx";
import { Lawyer } from "./pages/Lawyer.jsx";
import { SportsManager } from "./pages/SportsManager.jsx";
import { Surgeon } from "./pages/Surgeon.jsx";

import { Form } from "./pages/Form.js";

// import Chatbot from "./components/Chatbot";



import "./App.css";

export const AppContext = createContext();

function App() {

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [pastQualification, setPastQualification] = useState("");
  const [currentQualification, setCurrentQualification] = useState("");
  const [futureJobs, setFutureJobs] = useState("");


  return (
    <React.Fragment>
    <div className="App">
      <AppContext.Provider
      value={{
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
      }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/career" element={<Career />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/login" element={<Login />} />
          <Route path="/form" element={<Form />} />
          <Route path="/accmng" element={<AccountManager />} />
          <Route path="/aieng" element={<ArtificialEngineer />} />
          <Route path="/fullstackdev" element={<FullStackdeveloper />} />
          <Route path="/sportsmng" element={<SportsManager />} />
          <Route path="/lawyer" element={<Lawyer />} />
          <Route path="/surgeon" element={<Surgeon />} />




          
        </Routes>
        {/* <Chatbot /> */}
      </Router>
        {/* <Chatbot /> */}

      </AppContext.Provider>
    </div>
    </React.Fragment>
  );
}

export default App;
