import "./form.css";
import { UserCircle,GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../App.js";
import { useContext } from "react";


export const Form = () => {

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

    const onSubmit = (e) => {
        e.preventDefault();
        navigate("/dashboard");
    }

    const handleDashboard = () => {
        navigate("/dashboard");
    }

    return (
        <div className="form-app">
            <form onSubmit={onSubmit}>
                <div className="personal">

                    <UserCircle strokeWidth={2} size={50} />
                    <h1 className="page-header">Personal Details</h1>

                    <div className="inputs">
                        <label htmlFor="name">Name</label>
                        <input
                         type="text"
                         placeholder="Enter your name"
                         required
                         onChange={(e) => setName(e.target.value)} />
                    </div>

                      <div className="inputs">
                        <label htmlFor="location">Location</label>
                        <input 
                        type="text"
                        placeholder="Enter your location"
                        required
                         onChange={(e) => setLocation(e.target.value)} />
                    </div>

                      <div className="inputs">
                        <label htmlFor="age">Age</label>
                        <input 
                        type="number"
                        placeholder="Enter your Age"
                        required
                         onChange={(e) => setAge(e.target.value)} />
                    </div>

                      <div className="inputs">
                        <label htmlFor="gender">Gender</label>
                        <input 
                        type="text"
                        placeholder="Enter your gender"
                        required
                         onChange={(e) => setGender(e.target.value)} />
                    </div>

                      <div className="inputs">
                        <label htmlFor="hobbies">Hobbies</label>
                        <input placeholder="Enter your hobbies"
                        required
                         onChange={(e) => setHobbies(e.target.value)} />
                    </div>
                </div>


                <div className="educational">

                    <GraduationCap strokeWidth={2} size={50} />
                        <h1 className="page-header">Educational Details</h1>

                      <div className="inputs">
                        <label htmlFor="pastQualification">Past Qualification</label>
                        <input 
                        type="text"
                        placeholder="e.g.Hsc,UG,Masters"
                        required
                         onChange={(e) => setPastQualification(e.target.value)} />
                    </div>

                    <div className="inputs">
                        <label htmlFor="currentQualification">Current/Pursuing Qualification</label>
                        <input placeholder="e.g.Hsc,UG,Masters"
                        required
                         onChange={(e) => setCurrentQualification(e.target.value)} />
                    </div>

                    <div className="inputs">
                        <label htmlFor="futueJobs">Future Job Interests</label>
                        <input placeholder="e.g.sports,reading,acting,etc"
                        required
                         onChange={(e) => setFutureJobs(e.target.value)} />
                    </div>

                </div>

                <div className="buttons">

                    <button className="btn" type="submit">Submit</button>

                </div>
            </form>
                    <button className="btn" onClick={handleDashboard}
                    >Dashboard</button>
        </div>
    )
}