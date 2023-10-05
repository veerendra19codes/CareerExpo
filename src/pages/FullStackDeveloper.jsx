import './details.css';
export const FullStackdeveloper = () => {
    return (
        <div className="acm">
            <div className="navbar-component">

                <h1> <strong> Full Stack Developer </strong>  </h1>
            </div>

            <section className="description-container">

                <div className="information-panel">
                    <div className="description-header">
                        <h2>What is a Full Stack Developer?</h2>
                        <p>
                            A full stack developer is a programmer who has expertise in both front-end and back-end web development. This means they are knowledgeable in all the layers of web development, including the user interface, business logic, and database management. They have a deep understanding of languages such as HTML, CSS, JavaScript, and server-side languages such as Ruby, Python, and PHP. Full stack developers are also familiar with web frameworks, libraries, and tools that help them build complex web applications.
                        </p>

                        <p>Full stack developers are responsible for developing and maintaining a website or web application from start to finish. They have the ability to work on both the client-side and server-side of the application, and can handle tasks such as creating user interfaces, designing databases, and managing server infrastructure. Full stack developers can take a project from conception to completion, which requires a range of skills and abilities. They are typically versatile, agile, and able to work on multiple projects at once. With their expertise in a range of technologies, they are able to provide comprehensive solutions for web development needs.</p>

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
                                    <p><span><strong>Eligibility: </strong></span> 10+2 level with a minimum percentage from a recognized board</p>
                                </li>
                                <li>
                                    <p><span><strong>Average Job Salary: </strong></span>8-9 lakh pa.</p>
                                </li>
                                <li>
                                    <p><span><strong>Qualification Required: </strong></span>BE/Btech , BCA/BSc , MCA/MSc/MTech , BA/BBA/BCom</p>
                                </li>
                                <li>
                                    <p><span><strong>Companies: </strong></span>META , Amazon , Accenture , IBM , Microsoft , Google etc.</p>
                                </li>
                                <li>
                                    <p><span><strong>Resources: </strong></span>LearnCode.academy, Codecourse, DevTips, Syntax, Full Stack Radio</p>
                                </li>
                            </ul>
                        </div>

                        <div className="salary-chart">
                            <img src="https://mobilunity.com/wp-content/uploads/2017/07/full-stack-dev-salary.png" alt="" />
                        </div>
                    </div>

                </div>

                <div className="youtube-recommendation">
                    <h1>Resources</h1>

                    <div className="row-videos">
                        <div className="recommendation-panel">
                            <h3>Roadmap For Becoming a Full Stack Developer</h3>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/NBBDSosV3UY?si=hipfFU8AN-E8woaH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                        </div>
                        <div className="course-panel">
                            <h3 >Courses for Full Stack Developer</h3>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/CvCiNeLnZ00?si=9-udOR0xuS-r48OJ&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </div>

                </div>

            </section>

        </div>
    )
}