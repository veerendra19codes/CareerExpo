export const Lawyer = () => {
  return (
    <div>
      <div className="navbar-component">
        <h1>
          {" "}
          <strong> Lawyer </strong>{" "}
        </h1>
      </div>
      <section className="description-container">
        <div className="information-panel">
          <div className="description-header">
            <h2>What is a Lawyer?</h2>
            <p>
              A lawyer has been trained in the law and is licensed to provide
              legal advice and representation to clients. Lawyers play an
              important role in society by upholding the legal system,
              advocating for their clients' rights, and ensuring the fair
              application of the law. They possess in-depth knowledge of legal
              principles, regulations, and procedures, allowing them to provide
              guidance and assistance in a wide range of legal matters.
            </p>

            <p>
              Lawyers conduct legal research, analyze cases, draft legal
              documents, negotiate settlements, represent clients in court, and
              provide counsel on legal issues. They work closely with their
              clients to understand their needs and objectives, offering
              strategic advice and working towards favorable outcomes. Lawyers
              must possess excellent communication, analytical, and
              problem-solving skills, as well as a strong ethical foundation to
              maintain professional integrity and serve the best interests of
              their clients.
            </p>
          </div>

          <div className="image-description">
            <img
              src="https://images.pexels.com/photos/4427557/pexels-photo-4427557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="h"
            />
          </div>
        </div>

        <div className="requirement-container">
          <h3>Requirement</h3>
          <div className="requirement-panel">
            <ul>
              <li>
                <p>
                  <span>
                    <strong>Eligibility: </strong>
                  </span>
                  Pass 12th Exams with 60% aggregate score or equivalent CGPA.
                </p>
              </li>
              <li>
                <p>
                  <span>
                    <strong>Average Salary: </strong>
                  </span>
                  10-12 lakh pa.
                </p>
              </li>
              <li>
                <p>
                  <span>
                    <strong>Skills: </strong>
                  </span>
                  Persuasive communication, Time management,
                  Organizational skills, Persuasive communication , Written communication skills
                </p>
              </li>
              <li>
                <p>
                  <span>
                    <strong>Qualification: </strong>
                  </span>
                  Clear national and university-level law entrance exams like
                  CLAT, LSAT, AILET. Acquire an undergraduate or integrated law
                  degree in LLB, BA LLB, BBA LLB, BSc LLB, BCom LLB. Candidates
                  with LLM degree can also become lawyer.
                </p>
              </li>
              <li>
                <p>
                  <span>
                    <strong>Success Rate: </strong>
                  </span>
                  The three-year law programme saw a success rate of 98.6%, and that of five-year course was 98.4%
                </p>
              </li>
            </ul>
          </div>

          <div className="salary-chart">
            <img
              src="https://www.legallyindia.com/images/stories/MT/SalariesoflawyersMint_4a9260717e657fe8d6f23646824a16fc.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="youtube-recommendation">
          <h1>Resources</h1>

          <div className="row-videos">
            <div className="recommendation-panel">
              <h3>Roadmap to become a Lawyer</h3>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/lUqKc4rFhxQ?si=NYXdX64_yqQ8oLp_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className="course-panel">
              <h3>Courses for Lawyer</h3>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/PT3ALd_ENjE?si=13NixL6ZaKp-qBoM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
