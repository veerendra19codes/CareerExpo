import React, { useState } from 'react';
import "./assessment.css";
import { useRef } from "react";


export const Assessment = () => {
    const [isClicked, setIsClicked] = useState(false);

  const countaRef = useRef();
  const countbRef = useRef();
  const countcRef = useRef();
  const countdRef = useRef();
  const aover20Ref = useRef();
  const aover15Ref = useRef();
  const aover10Ref = useRef();
  const aover7Ref = useRef();
  const bover20Ref = useRef();
  const bover15Ref = useRef();
  const bover10Ref = useRef();
  const bover7Ref = useRef();
  const cover20Ref = useRef();
  const cover15Ref = useRef();
  const cover10Ref = useRef();
  const cover7Ref = useRef();
  const dover20Ref = useRef();
  const dover15Ref = useRef();
  const dover10Ref = useRef();
  const dover7Ref = useRef();


  

  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);
  const [countC, setCountC] = useState(0);
  const [countD, setCountD] = useState(0);


  const handleCountA = (e) => {
    setCountA(countA + 1);
    console.log(countA);
    // setIsClicked(!isClicked);
  }

   const handleCountB = () => {
    setCountB(countB + 1);
    // console.log(countA);
  }

   const handleCountC = () => {
    setCountC(countC + 1);
    // console.log(countA);
  }

   const handleCountD = () => {
    setCountD(countD + 1);
    // console.log(countA);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(countA > countB && countA > countC && countA > countD) {
        console.log("A is highest");
        countbRef.current.classList.toggle("hide");
        countcRef.current.classList.toggle("hide");
        countdRef.current.classList.toggle("hide");
        console.log("test submitted");
        alert("submitted quiz");
        if(countA >= 20 ) {
            aover20Ref.current.classList.toggle("show");
        } else if (countA >= 15 ) {
            aover15Ref.current.classList.toggle("show");

        } else if (countA >= 10 ) {
            aover10Ref.current.classList.toggle("show");

        } else {
            aover7Ref.current.classList.toggle("show");
            
        }
    }
    else if(countB > countC && countB > countA && countB > countD) {
        console.log("B is highest");
        countaRef.current.classList.toggle("hide");
        countcRef.current.classList.toggle("hide");
        countdRef.current.classList.toggle("hide");
        console.log("test submitted");
        alert("submitted quiz");
          if(countB >= 20 ) {
            bover20Ref.current.classList.toggle("show");
        } else if (countB >= 15 ) {
            bover15Ref.current.classList.toggle("show");

        } else if (countB >= 10 ) {
            bover10Ref.current.classList.toggle("show");

        } else {
            bover7Ref.current.classList.toggle("show");
            
        }
    }
    else if(countC > countA && countC > countB && countC > countD) {
        console.log("C is highest");
        countaRef.current.classList.toggle("hide");
        countbRef.current.classList.toggle("hide");
        countdRef.current.classList.toggle("hide");
        console.log("test submitted");
        alert("submitted quiz");
          if(countC >= 20 ) {
            cover20Ref.current.classList.toggle("show");
        } else if (countC >= 15 ) {
            cover15Ref.current.classList.toggle("show");

        } else if (countC >= 10 ) {
            cover10Ref.current.classList.toggle("show");

        } else {
            cover7Ref.current.classList.toggle("show");
            
        }
    }
    else {
        console.log("B is highest");
        countaRef.current.classList.toggle("hide");
        countcRef.current.classList.toggle("hide");
        countbRef.current.classList.toggle("hide");
        console.log("test submitted");
        alert("submitted quiz");
          if(countD >= 20 ) {
            dover20Ref.current.classList.toggle("show");
        } else if (countD >= 15 ) {
            dover15Ref.current.classList.toggle("show");

        } else if (countD >= 10 ) {
            dover10Ref.current.classList.toggle("show");

        } else {
            dover7Ref.current.classList.toggle("show");
            
        }
    }

  }


    return (

        <div className="App">
            <div className='pageheader'>
                <h1>Assessment</h1>
                <h3>Answer the following 25 questions and explore your own career</h3>
            </div>


        <div className="carda">
            <h1>1. What subjects do you enjoy the most in school?</h1>
            <div className='answers'>
                <button className={isClicked ? "greena" : "" } onClick={handleCountA}>a Science and Mathematics</button>
                <button className={isClicked ? "green" : "" } onClick={handleCountB}>b Literature and Arts</button>
                <button className={isClicked ? "green" : "" } onClick={handleCountC}>c Social Sciences and History</button>
                <button className={isClicked ? "green" : "" } onClick={handleCountD} >d Physical Education and Sports</button>
            </div>
        </div>

        <div className="carda">
            <h1>2. What hobbies or activities do you find most engaging in your free time?</h1>
            <div className='answers'>
                <button className={isClicked ? "greena" : "" } onClick={handleCountA}>a Reading, writing, or drawing</button>
                <button className={isClicked ? "green" : "" } onClick={handleCountB}>b Playing musical instruments or singing</button>
                <button className={isClicked ? "green" : "" } onClick={handleCountC}>c Volunteering or helping others</button>
                <button className={isClicked ? "green" : "" } onClick={handleCountD}>d Playing sports or engaging in physical activities</button>
            </div>
        </div>

        <div className="carda">
            <h1>3. Which of these qualities do you think best describes you?</h1>
            <div className='answers'>
                <button className={isClicked ? "greena" : "" } onClick={handleCountA}>a Analytical and logical</button>
                <button className={isClicked ? "green" : "" } onClick={handleCountB}>b Creative and imaginative</button>
                <button className={isClicked ? "green" : "" } onClick={handleCountC}>c Empathetic and compassionate</button>
                <button className={isClicked ? "green" : "" } onClick={handleCountD}>d Energetic and competitive</button>
            </div>
        </div>

        <div className="carda">
            <h1>4. What type of work environment do you prefer?</h1>
            <div className='answers'>
                <button className={isClicked ? "greena" : "" } onClick={handleCountA}>a Quiet and organized</button>
                <button className={isClicked ? "green" : "" } onClick={handleCountB}>b Creative and expressive</button>
                <button className={isClicked ? "green" : "" } onClick={handleCountC}>c Collaborative and supportive</button>
                <button className={isClicked ? "green" : "" } onClick={handleCountD}>d Dynamic and fast-paced</button>
            </div>
        </div>

        <div className="carda">
            <h1>5. What kind of problems do you enjoy solving?</h1>
            <div className='answers'>
                <button className={isClicked ? "greena" : "" } onClick={handleCountA}>a Math or science problems</button>
                <button className={isClicked ? "green" : "" } onClick={handleCountB}>b Artistic or design-related problems</button>
                <button className={isClicked ? "green" : "" } onClick={handleCountC}>c Social or interpersonal problems</button>
                <button className={isClicked ? "green" : "" } onClick={handleCountD}>d Competitive or strategic problems</button>
            </div>
        </div>

        <div className="carda">

            <h1>6. Which of the following goals excites you the most?</h1>
            <div className='answers'>
                <button className={isClicked ? "greena" : "" } onClick={handleCountA}>a Making new scientific discoveries</button>
                <button className={isClicked ? "green" : "" } onClick={handleCountB}>b Creating original artworks or designs</button>
                <button className={isClicked ? "green" : "" } onClick={handleCountC}>c Making a positive impact on people's lives</button>
                <button className={isClicked ? "green" : "" } onClick={handleCountD}>d Achieving athletic excellence</button>
            </div>
        </div>

        <div className="carda">

            <h1>7. What skills or talents do others often compliment you on?</h1>
            <div className='answers'>
                <button className={isClicked ? "greena" : "" }  onClick={handleCountA}>a Problem-solving and logical thinking</button>
                <button className={isClicked ? "green" : "" } onClick={handleCountB}>b Creativity and artistic abilities</button>
                <button className={isClicked ? "green" : "" } onClick={handleCountC}>c Listening and communication skills</button>
                <button className={isClicked ? "green" : "" } onClick={handleCountD}>d Physical agility and coordination</button>
            </div>
        </div>

        <div className="carda">

            <h1>8. What kind of books, movies, or TV shows do you enjoy the most?</h1>
            <div className='answers'>
                <button className={isClicked ? "greena" : "" } onClick={handleCountA}>a Science fiction or documentaries</button>
                <button className={isClicked ? "green" : "" } onClick={handleCountB}>b Fantasy or imaginative stories</button>
                <button className={isClicked ? "green" : "" } onClick={handleCountC}>c Dramas or real-life stories</button>
                <button className={isClicked ? "green" : "" } onClick={handleCountD}>d Sports or action-packed stories</button>
            </div>
        </div>

        <div className="carda">
            <h1>9. When working on a group project, which role do you naturally assume?</h1>
            <div className='answers'>
                <button className={isClicked ? "greena" : "" } onClick={handleCountA}>a The researcher or data analyzer</button>
                <button className={isClicked ? "green" : "" } onClick={handleCountB}>b The creative thinker or idea generator</button>
                <button className={isClicked ? "green" : "" } onClick={handleCountC}>c The mediator or peacemaker</button>
                <button className={isClicked ? "green" : "" } onClick={handleCountD}>d The leader or coordinator</button>
            </div>
        </div>
                
        <div className="carda">

            <h1>10. If you could choose any profession without worrying about money or practicality, what would it be?</h1>
            <div className='answers'>
                <button className={isClicked ? "greena" : "" } onClick={handleCountA}>a Scientist or researcher</button>
                <button className={isClicked ? "green" : "" } onClick={handleCountB}>b Artist or designer</button>
                <button className={isClicked ? "green" : "" } onClick={handleCountC}>c Counselor or social worker</button>
                <button className={isClicked ? "green" : "" } onClick={handleCountD}>d Athlete or coach</button>
            </div>
        </div>

        <div className="carda">

            <h1>11. What is your preferred working style?</h1>
            <div className='answers'>
                <button className={isClicked ? "greena" : "" } onClick={handleCountA}>a Structured and organized</button>
                <button className={isClicked ? "green" : "" } onClick={handleCountB}>b Flexible and spontaneous</button>
                <button className={isClicked ? "green" : "" } onClick={handleCountC}>c Collaborative and team-oriented</button>
                <button className={isClicked ? "green" : "" } onClick={handleCountD}>d Independent and self-driven</button>
            </div>
        </div>

        <div className="carda">

            <h1>12. What type of challenges do you find most motivating?</h1>
            <div className='answers'>
                <button className={isClicked ? "greena" : "" } onClick={handleCountA}>a Intellectual challenges</button>
                <button className={isClicked ? "green" : "" } onClick={handleCountB}>b Creative challenges</button>
                <button className={isClicked ? "green" : "" } onClick={handleCountC}>c Humanitarian challenges</button>
                <button className={isClicked ? "green" : "" } onClick={handleCountD}>d Physical challenges</button>
            </div>
        </div>

        <div className="carda">

            <h1>13. How do you handle stress and pressure?</h1>
            <div className='answers'>
                <button className={isClicked ? "greena" : "" } onClick={handleCountA}>a Analyze the situation and find solutions</button>
                <button className={isClicked ? "green" : "" } onClick={handleCountB}>b Express your feelings through art or creativity</button>
                <button className={isClicked ? "green" : "" } onClick={handleCountC}>c Talk to friends or seek emotional support</button>
                <button className={isClicked ? "green" : "" } onClick={handleCountD}>d Engage in physical activities or sports</button>
            </div>
        </div>

    <div className="carda"> 
        <h1>14. Which school subjects do you excel in without much effort?</h1>
        <div className='answers'>
            <button className={isClicked ? "greena" : "" } onClick={handleCountA}>a Math or physics</button>
            <button className={isClicked ? "green" : "" } onClick={handleCountB}>b Art or music</button>
            <button className={isClicked ? "green" : "" } onClick={handleCountC}>c Social studies or psychology</button>
            <button className={isClicked ? "green" : "" } onClick={handleCountD}>d Physical education or sports</button>
        </div>
    </div>

        <div className="carda">

            <h1>15. What kind of lifestyle do you envision for yourself in the future?</h1>
            <div className='answers'>
                <button className={isClicked ? "greena" : "" } onClick={handleCountA}>a Stable and financially secure</button>
                <button className={isClicked ? "green" : "" } onClick={handleCountB}>b Artistic and expressive</button>
                <button className={isClicked ? "green" : "" } onClick={handleCountC}>c Making a difference in others' lives</button>
                <button className={isClicked ? "green" : "" } onClick={handleCountD}>d Active and adventurous</button>
            </div>
        </div>

        <div className="carda">

            <h1>16. How do you prefer to express yourself?</h1>
            <div className='answers'>
                <button className={isClicked ? "greena" : "" } onClick={handleCountA}>a Through logical arguments and analysis</button>
                <button className={isClicked ? "green" : "" } onClick={handleCountB}>b Through creative works like writing, art, or music</button>
                <button className={isClicked ? "green" : "" } onClick={handleCountC}>c Through empathy and understanding others' emotions</button>
                <button className={isClicked ? "green" : "" } onClick={handleCountD}>d Through physical activities and body language</button>
            </div>
        </div>

        <div className="carda">

            <h1>17. What type of books or articles do you enjoy reading?</h1>
            <div className='answers'>
                <button className={isClicked ? "greena" : "" } onClick={handleCountA}>a Scientific journals or non-fiction books</button>
                <button className={isClicked ? "green" : "" } onClick={handleCountB}>b Fiction novels or poetry</button>
                <button className={isClicked ? "green" : "" } onClick={handleCountC}>c Self-help books or articles about personal development</button>
                <button className={isClicked ? "green" : "" } onClick={handleCountD}>d Sports magazines or articles about physical fitness</button>
            </div>
        </div>

        <div className="carda">

            <h1>18. How do you approach new and unfamiliar situations?</h1>
            <div className='answers'>
                <button className={isClicked ? "greena" : "" } onClick={handleCountA}>a Analyze the situation and gather information</button>
                <button className={isClicked ? "green" : "" } onClick={handleCountB}>b Embrace the unknown and see it as an opportunity for creativity</button>
                <button className={isClicked ? "green" : "" } onClick={handleCountC}>c Seek guidance from others and collaborate</button>
                <button className={isClicked ? "green" : "" } onClick={handleCountD}>d Dive in headfirst and learn by doing</button>
            </div>
        </div>


        <div className="carda">

            <h1>19. How do you handle failure or setbacks?</h1>
            <div className='answers'>
                <button className={isClicked ? "greena" : "" } onClick={handleCountA}>a Analyze what went wrong and strategize for the future</button>
                <button className={isClicked ? "green" : "" } onClick={handleCountB}>b Use it as inspiration for creative expression</button>
                <button className={isClicked ? "green" : "" } onClick={handleCountC}>c Seek emotional support and advice from others</button>
                <button className={isClicked ? "green" : "" } onClick={handleCountD}>d Channel the energy into physical activities to cope</button>
            </div>
        </div>


        <div className="carda">

            <h1>20. What kind of projects or tasks make you lose track of time when you're working on them?</h1>
            <div className='answers'>
                <button className={isClicked ? "greena" : "" } onClick={handleCountA}>a Researching or analyzing data</button>
                <button className={isClicked ? "green" : "" } onClick={handleCountB}>b Creating art, music, or writing</button>
                <button className={isClicked ? "green" : "" } onClick={handleCountC}>c Helping others or volunteering</button>
                <button className={isClicked ? "green" : "" } onClick={handleCountD}>d Engaging in sports or physical activities</button>
            </div>
        </div>


        <div className="carda">

            <h1>21. What values are most important to you in a workplace?</h1>
            <div className='answers'>
                <button className={isClicked ? "greena" : "" } onClick={handleCountA}>a Innovation and efficiency</button>
                <button className={isClicked ? "green" : "" } onClick={handleCountB}>b Creativity and freedom of expression</button>
                <button className={isClicked ? "green" : "" } onClick={handleCountC}>c Compassion and teamwork</button>
                <button className={isClicked ? "green" : "" } onClick={handleCountD}>d Competition and achievement</button>
            </div>
        </div>

        <div className="carda">

            <h1>22. What role do you naturally assume in a social gathering or a party?</h1>
            <div className='answers'>
                <button className={isClicked ? "greena" : "" } onClick={handleCountA}>a Engage in intellectual discussions or debates</button>
                <button className={isClicked ? "green" : "" } onClick={handleCountB}>b Showcase your creative talents, like singing or drawing</button>
                <button className={isClicked ? "green" : "" } onClick={handleCountC}>c Listen attentively and offer support to friends</button>
                <button className={isClicked ? "green" : "" } onClick={handleCountD}>d Initiate and participate in playful or competitive activities</button>
            </div>
        </div>

        <div className="carda">

            <h1>23. What kind of topics or issues are you most passionate about?</h1>
            <div className='answers'>
                <button className={isClicked ? "greena" : "" } onClick={handleCountA}>a Scientific advancements and technology</button>
                <button className={isClicked ? "green" : "" } onClick={handleCountB}>b Art and culture</button>
                <button className={isClicked ? "green" : "" } onClick={handleCountC}>c Social justice and equality</button>
                <button className={isClicked ? "green" : "" } onClick={handleCountD}>d Sports and physical fitness</button>
            </div>
        </div>


        <div className="carda">

            <h1>24. What type of feedback motivates you the most?</h1>
            <div className='answers'>
                <button className={isClicked ? "greena" : "" } onClick={handleCountA}>a Constructive criticism that helps you improve</button>
                <button className={isClicked ? "green" : "" } onClick={handleCountB}>b Appreciation for your creative efforts</button>
                <button className={isClicked ? "green" : "" } onClick={handleCountC}>c Recognition for your empathy and kindness</button>
                <button className={isClicked ? "green" : "" } onClick={handleCountD}>d Recognition for your achievements and competitiveness</button>
            </div>
        </div>


        <div className="carda">

            <h1>25. What do you enjoy learning about in your free time?</h1>
            <div className='answers'>
                <button className={isClicked ? "greena" : "" } onClick={handleCountA}>a Scientific theories or technological advancements</button>
                <button className={isClicked ? "green" : "" } onClick={handleCountB}>b Art history, literature, or creative writing</button>
                <button className={isClicked ? "green" : "" } onClick={handleCountC}>c Psychology, sociology, or human behavior</button>
                <button className={isClicked ? "green" : "" } onClick={handleCountD}>d Sports techniques, strategies, or athletes' biographies</button>
            </div>
        </div>

<br />

        <button type="submit" className="submit" onClick={handleSubmit}>Submit Form</button>
        <p className=''>Your results</p>

<div className="results">
        <div  ref={countaRef} className="resultsA">
          <h1>Here are your career recommendations if clicked A option more than others</h1>
          <h4>physicists, engineers, mathematicians, or data analysts.
              <br/>
            Number of Times you Clicked A : {countA}
          </h4>
        </div>

          <div ref={countbRef} classname="resultsB hide">
          <h1>Here are your career recommendations if clicked B option more than others</h1>
          <h4> writers, artists, musicians, or graphic designers.
              <br/>
            Number of Times you Clicked B : {countB}
          </h4>
        </div>

          <div ref={countcRef}classname="resultsC hide">
          <h1>Here are your career recommendations if clicked C option more than others</h1>
          <h4> counselors, social workers, psychologists, or teachers.
            <br/>
            Number of Times you Clicked C : {countC}
          </h4>
        </div>

          <div ref={countdRef} classname="resultsD hide">
          <h1>Here are your career recommendations if clicked D option more than others</h1>
          <h4>athletes, coaches, sports trainers, or professional gamers.
            <br/>
            Number of Times you Clicked D : {countD}
          </h4>
        </div>

{/* Careers on Option A  */}
        <div ref={aover20Ref} className="aover20 specialresult">
            <h1>Physics</h1>
        </div>

        <div ref={aover15Ref} className="aover15 specialresult">
            <h1>engineers</h1>
        </div>

        <div ref={aover10Ref} className="aover10 specialresult">
            <h1>mathematicians</h1>
        </div>

        <div ref={aover7Ref} className="aover7 specialresult">
            <h1>data analysts</h1>
        </div>

        
        {/* Careers on Option B  */}
        <div ref={bover20Ref} className="bover20 specialresult">
            <h1>writers</h1>
        </div>

        <div ref={bover15Ref} className="bover15 specialresult">
            <h1>artists,</h1>
        </div>

        <div ref={bover10Ref} className="bover10 specialresult">
            <h1>musicians,</h1>
        </div>

        <div ref={bover7Ref} className="bover7 specialresult">
            <h1>graphic designers</h1>
        </div>

        
        {/* Careers on Option C  */}
        <div ref={cover20Ref} className="cover20 specialresult">
            <h1>counselors</h1>
        </div>

        <div ref={cover15Ref} className="cover15 specialresult">
            <h1>social workers,</h1>
        </div>

        <div ref={cover10Ref} className="cover10 specialresult">
            <h1>psychologists,</h1>
        </div>

        <div ref={cover7Ref} className="cover7 specialresult">
            <h1>teacher</h1>
        </div>


{/* Careers on Option D */}
        <div ref={dover20Ref} className="dover20 specialresult">
            <h1>athletes</h1>
        </div>

        <div ref={dover15Ref} className="dover15 specialresult">
            <h1>coaches</h1>
        </div>

        <div ref={dover10Ref} className="dover10 specialresult">
            <h1>sports trainers</h1>
        </div>

        <div ref={dover7Ref} className="dover7 specialresult">
            <h1>professional gamers</h1>
        </div>



</div>



</div>

         
        
    );
};