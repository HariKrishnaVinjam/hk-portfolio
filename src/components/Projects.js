import "./styling/Projects.css";

function Projects() {
  return (
    <>
      <div className="project-container">
        <h1 class="beautiful-heading">Projects</h1>
        <div className="project">
          <div className="project-image">
            <a
              href="https://github.com/yashwanthmoturi/FuelRatePredictor/tree/secondbbranch/fuel-app/src/pages"
              target="_blank"
            >
              <img src="/images/fuel.png" />
            </a>
          </div>
          <div className="project-content">
            <h3>
              <a
                href="https://github.com/yashwanthmoturi/FuelRatePredictor/tree/secondbbranch/fuel-app/src/pages"
                target="_blank"
              >
                Fuel Rate Quote website <i className="fa fa-external-link"></i>
              </a>
            </h3>
            <ul>
              <li>
                Designed and developed a dynamic full stack website using React
                and Node.js with PostgreSQL as a database.
              </li>
              <li>
                Made APIs for login, signup and get quote pages using Node.js
              </li>
              <li>
                Proficiently utilized Git for version control, ensuring a
                collaborative and organized development process.
              </li>
              <li>
                Collaborated with a team of 4 members to develop this website
              </li>
            </ul>
          </div>
        </div>
        <div className="project">
          <div className="project-image">
            <a
              href="https://github.com/HariKrishnaVinjam/Digit-Recognition-in-AWS"
              target="_blank"
            >
              <img src="/images/digit-recognition.png" />
            </a>
          </div>
          <div className="project-content">
            <h3>
              <a
                href="https://github.com/HariKrishnaVinjam/Digit-Recognition-in-AWS"
                target="_blank"
              >
                Hand Written digit recognition in AWS{" "}
                <i className="fa fa-external-link"></i>
              </a>
            </h3>
            <ul>
              <li>
                Deployed a Machine Learning Model Endpoint in AWS using Amazon
                SageMaker, achieving 90% accuracy.
              </li>
              <li>
                Leveraged AWS services including SageMaker, S3, Lambda, API
                Gateway, IAM, and CloudWatch.
              </li>
              <li>
                Implemented best practices for model versioning, monitoring, and
                maintenance.
              </li>
              <li>
                Contributed to continuous improvement through iteration and
                feedback integration.
              </li>
              <li>
                Demonstrated expertise in cloud-based deployment of machine
                learning models.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
