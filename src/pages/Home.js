import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import hero from "../assets/hero.png";
import unlock from "../assets/unlock.png";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer.js";

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

  return (
    <div className="app">

      {/* hero  */}
      <div className="hero">

        <div className="content">
          <div className="header page-header">Lessons and insights</div>
          <div className="header page-header">from 8 years</div>
          <p>
            Where to grow your business as a photograph: site or social media
          </p>
          <button className="btn" onClick={handleRegister}>
            Register
          </button>
        </div>

        <div className="image">
          <img src={hero} alt="" />
        </div>

      </div>

      {/* client  */}
      <div className="client">

        <div className="header section-header">Our Clients</div>
        <p>We have been working with some Fortune 500+ clients</p>
        <div className="images">company logo images</div>

      </div>

      {/* community  */}
      <div className="community">

        <div className="header section-header">
          Manage your entire community
          <br />
          in a single system
        </div>
        <p>Who is Project_name suitable for?</p>

        <div className="cards">

          <div className="card">
            <div className="subheader group-header">
              Membership <br /> Organisations
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
              repudiandae possimus delectus dolorem iste explicabo illum
              voluptas aliquid exercitationem suscipit.
            </p>
          </div>

          <div className="card">
            <div className="subheader group-header">
              Membership <br /> Organisations
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
              repudiandae possimus delectus dolorem iste explicabo illum
              voluptas aliquid exercitationem suscipit.
            </p>
          </div>

          <div className="card">
            <div className="subheader group-header">
              Membership <br /> Organisations
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
              repudiandae possimus delectus dolorem iste explicabo illum
              voluptas aliquid exercitationem suscipit.
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
      <div className="unlock">

        <div className="image">
          <img src={unlock} alt="" />
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
    question : "Question1",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, similique?Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, similique?"
  },
  {
    question : "Question2",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, similique?Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, similique?"
  }, 
  {
    question : "Question3",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, similique?Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, similique?"
  }, 
  {
    question : "Question4",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, similique?Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, similique?"
  },
]
