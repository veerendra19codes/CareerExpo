import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import hero from "../assets/hero.png";
import unlock from "../assets/unlock.png";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer.js";
import  assessment from "../assets/assessment.png";
import  career from "../assets/career.jpg";
import dashboard  from "../assets/dashboard.png";
import home from "../assets/home.jpg";
import discord from "../assets/discord.jpg";

export const Home = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  //first here navigate to login/signup page
  const handleRegister = () => {
    navigate("/auth");
  };

  //second hero to navigate to discord link
  const handleDiscord = (e) => {
    e.preventDefault();

    //  window.location.href="https://discord.gg/7Wp43xDF";
    window.open("https://discord.gg/7Wp43xDF", "_blank")

  }
  //discord ends

  //accordian/faqs starts 
  const toggle = (i) => {
    if(selected === i) {
      return setSelected(null)
    }

    setSelected(i);
  }
  //accordian ends

  //emailjs starts
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_77pkuhw',
      'template_x71f6hm', form.current, 'RqoffOUYxNIWQ4zkH'
      )
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
      }, (error) => {
          console.log(error.text);
      });

      //to clear the form once submitted
      e.target.reset();
  };
  //emailjs ends

  const handleAssessment = () => {
    navigate("/assessment");
  }

  const handleCareer = () => {
    navigate("/career");
  }

   const handleDashboard = () => {
    navigate("/dashboard");
  }

  return (
    <div className="app">

      {/* hero  */}
      <div className="hero">

        <div className="content">
          <div className="header page-header">Are you Ready</div>
           <div className="header page-header">to Go Beyond?!</div>
         
          <p>
            Uncover your hidden talents and strengths through our specially designed assessments. We provide a series of quizzes, aptitude tests, and personality assessments that will help you identify your innate abilities and passions.
          </p>
           <p>
         
          </p>
          <button className="btn" onClick={handleRegister}>
            Get Started
          </button>
        </div>

        <div className="image">
          <img src={home} alt="" />
        </div>

      </div>

      {/* client  */}
      <div className="aboutus">

        <div className="header section-header">About us</div>
        <p>Welcome to our comprehensive Career Assessment platform, where we empower students like you to make informed decisions about your future. We understand that choosing a career can be a daunting task, but with our innovative tools and resources, you'll embark on a journey of self-discovery that will set you on the path to success.</p>
        <div className="buttons">
          <button className="btn" onClick={handleAssessment}>Start Assessment</button>
          <button className="btn" onClick={handleCareer}>Career Options</button>
          <button className="btn" onClick={handleDashboard}>Your Profile</button>
        </div>

      </div>

      {/* ourservices  */}
      <div className="ourservices">

        <div className="header section-header">
          Our Services
        </div>
        <p>Who is CareerExpo suitable for?</p>

        <div className="cards">

          <div className="card">
            <div className="cardimage">
              <img src={assessment} alt="" />
            </div>
            <div className="subheader group-header">
              Assessment
            </div>
            <p>
             Receive tailored career suggestions based on your assessment results, ensuring a perfect match for your unique profile.
            </p>
          </div>

          <div className="card">
            <div className="cardimage">
              <img src={career} alt="" />
            </div>
            <div className="subheader group-header">
              Career
            </div>
            <p>
            Explore a vast database of careers, complete with detailed descriptions, salary insights, educational pathways,current job market trends and demand for specific careers.
            </p>
          </div>

          <div className="card">
            <div className="cardimage">
              <img src={dashboard} alt="" />
            </div>
            <div className="subheader group-header">
              Dashboard
            </div>
            <p>
            Monitor your career journey with ease, accessing your assessment history and action plans right from your dashboard.
            </p>
          </div>

        </div>

      </div>

      {/* //accordian */}
      <div className="wrapper">
        <div className="accordian">

          <h1>Frequently asked questions</h1>

          {Data.map((item, i) => (
            <div className="item">

              <div className="title group-header" onClick={() => toggle(i)}>
                <h2>{item.question}</h2>
                <span>{selected === i ? "-" : "+"}</span>
              </div>

              <div className={selected === i ? "content show" : "content"}>
                {item.answer}
              </div>

            </div>
          ))}

        </div>
      </div>
      {/* accordian ends  */}

      {/* unlock  */}
      <div className="unlock discord">

        <div className="image">
          <img src={discord} alt="" />
        </div>

        <div className="content">
          <div className="header page-header">Join our Community</div>
          {/* <div className="header page-header">from 8 years</div> */}
          <p>
            Get involved with our community by clicking the below button
          </p>
          <button  className="btn" onClick={handleDiscord}>
            Join our discord
          </button>
        </div>
      
      </div>

      {/* email  */}
      <div className="email">

        <div className="header group-header">
          Send us an email
        </div>

        <div className="form">
          <form className="form" ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder="username" />
          <input type="email" name="user_email" placeholder="email id" />
          <textarea name="message" placeholder="type your message here" id="" cols="30" rows="10"></textarea>
          <button type="submit" value="send" className="btn">Submit</button>
          </form>
        </div>

      </div>

      {/* footer  */}
      <Footer />

    </div>
  );
};



const Data = [
  {
    question : "What is the purpose of a career assessment?",
    answer: "Career assessments help you identify your strengths, interests, and values, guiding you towards suitable career paths by aligning your skills and preferences with potential careers."
  },
  {
    question : "Are career assessment results definitive, or can they change over time?",
    answer: "Assessment results can evolve as you gain new experiences and insights. They serve as a starting point, but it's normal for your interests and career preferences to shift as you grow."
  }, 
  {
    question : "QHow do I interpret my assessment results?",
    answer: "Your results will highlight your strengths and interests. Consider them as valuable clues rather than strict directives. It's essential to explore and research careers that align with your results to make an informed choice."
  }, 
  {
    question : "Can I use career assessments if I'm unsure about my major or career path in college?",
    answer: " Absolutely! Career assessments are helpful tools for college students exploring majors and career options. They can provide valuable insights and direction during your academic journey."
  },
]
