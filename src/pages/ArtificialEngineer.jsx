import './details.css';
export const ArtificialEngineer = () => {
  return (
    <div className="acm">
      <div className="navbar-component">

        <h1> <strong> Artificial Engineer </strong>  </h1>
      </div>

      <section className="description-container">

        <div className="information-panel">
          <div className="description-header">
            <h2>What is a Artificial Engineer?</h2>
            <p>
              An artificial intelligence (AI) engineer designs, develops, and implements AI solutions and systems. They are experts in machine learning, neural networks, natural language processing, computer vision, and other AI-related technologies. The role of an AI engineer involves leveraging these cutting-edge technologies to create intelligent systems that can learn from data, make predictions, recognize patterns, and solve complex problems.
            </p>

            <p>AI engineers work on a wide range of applications, from virtual assistants and chatbots to autonomous vehicles, recommendation systems, and fraud detection algorithms. They are skilled in programming languages like Python or R, and they use frameworks such as TensorFlow, PyTorch, or Keras to build and train machine learning models.</p>

          </div>

          {/* <div className="image-description">
                        <img src="https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="h" />
                    </div> */}

        </div>

        <div className="requirement-container">

          <h3>Requirement</h3>

          <div className="row-chart">

            <div className="requirement-panel">
              <ul>
                <li>
                  <p><span><strong>Eligibility: </strong></span> Bachelor's degree in a field related to AI, such as data science, computer science, IT or statistics.</p>
                </li>
                <li>
                  <p><span><strong>Average Job Salary: </strong></span>7.5-8.3 lakh pa.</p>
                </li>
                <li>
                  <p><span><strong>Skills : </strong></span>Persuasive communication, Time management,
                    Organizational skills, Persuasive communication , Written communication skills</p>
                </li>
                <li>
                  <p><span><strong>Companies: </strong></span>Amazon, NVIDIA, Microsoft, IBM, Accenture, Samsung,Facebook</p>
                </li>
                <li>
                  <p><span><strong>Success Rate: </strong></span>The three-year law programme saw a success rate of 98.6%, and that of five-year course was 98.4%</p>
                </li>
              </ul>
            </div>

            <div className="salary-chart">
              <img src="https://moneyview.in/images/Artificial-Intelligence-Salary-in-India.png" alt="" />
            </div>
          </div>

        </div>

        <div className="youtube-recommendation">
          <h1>Resources</h1>

          <div className="row-videos">
            <div className="recommendation-panel">
              <h3>Roadmap For Becoming a Full Stack Developer</h3>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/uUGcqAjNOYk?si=mKwPT8mTbCEdAr0-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            </div>
            <div className="course-panel">
              <h3 >Courses for Full Stack Developer</h3>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/uBV0w8Qwhv4?si=yn7ivbPwaNFMkx2u" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </div>

        </div>

      </section>

    </div>
  )
}