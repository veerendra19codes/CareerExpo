import React from "react";
// import './ChatBot.css'; // Import your CSS file for styling
import ChatBot from "react-simple-chatbot";
const steps = [
    {
      id: "Greet",        
      message: "Hello, Welcome to our shop",        
      trigger: "Done",        
    },        
    {       
      id: "Done",        
      message: "Please enter your name!",        
      trigger: "waiting1",        
    },      
    {      
      id: "waiting1",      
      user: true,      
      trigger: "Name",      
    },      
    {       
      id: "Name",     
      message: "Hi {previousValue}, What you want to know",     
      trigger: "guidance",     
    },      
    {      
      id: "guidance",   
      options: [   
        {    
          value: "Assessment  Test",   
          label: "Assessment Test",        
          trigger: "Assessment Test",       
        },       
        { value: "Career", label: "Career", trigger: "Career" },       
      ],       
    },       
    {       
      id: "Assessment Test",       
      message:        
        "What doubts you have related to your assessment",        
      end: true,       
    },       
    {       
      id: "Career",       
      message:       
        "What career guidance you need from me",       
      end: true,       
    },       
  ]; 
const config = {
  botAvatar: "img.png",
  floating: true,
};

const Chatbot = () => {
  return (
    <div className="chatbot-container">
      <ChatBot headerTitle="GeekBot" steps={steps} {...config} />
    </div>
  );
};

export default Chatbot;