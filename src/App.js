import logo from "./logo.svg";
import "./App.css";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="hstack">
          <h5>
            <FaEnvelopeOpenText size="1rem" color="black" />{" "}
            Email:gaythrilokeshgmail.com
          </h5>
          <h5>
            <FaHeadphones size="1rem" color="black" /> Hotline: 123-456-7890
          </h5>
          <h5> Counselling Code: 3531</h5>
        </div>
      </div>

      <nav className="navbar bg-body-tertiary">
        <div className="navbarlogo">
          <a className="navbar-brand" href="#">
            <div>
              {" "}
              <img
                src="./CMSImages/college logo.png"
                alt="Logo"
                width="100"
                height="80"
                className="d-inline-block align-text-right"
              ></img>
              ABC College of Arts and Science{" "}
            </div>
          </a>
        </div>
      </nav>

      <nav className="navbar navbar-expand-lg bg-primary ">
        <div className="container-fluid">
          <div className="menu">
            <ul className="navbar-nav py-0 navbar-nav-scroll">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  HOME
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  ABOUT
                </a>{" "}
              </li>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    College
                  </a>
                </li>
                <li className="dropdown-divider">
                  Administration
                  <hr />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    The Management
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Staff Portal
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Student Portal
                  </a>
                </li>
              </ul>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  CAMPUS
                </a>
              </li>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Infrastructure
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Central Library
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    ATM
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Healthcare
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Transport
                  </a>
                </li>
              </ul>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  PLACEMENT
                </a>
              </li>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Campus placement
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Recruiters
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Placed Students
                  </a>
                </li>
              </ul>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  ACADEMIC
                </a>
              </li>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Department
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Programs Offered
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    TNEA Admission
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    COE
                  </a>
                </li>
              </ul>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  CONTACT
                </a>
              </li>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Contact US{" "}
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Ask a Query
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Compliant
                  </a>
                </li>
              </ul>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  INTERNATIONAL ADMISSION
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="image bg-basic">
        <div id="carouselExampleFade" className="carousel slide carousel-fade">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="./CMSImages/Cstudents.jpg"
                className="rounded mx-auto d-block"
                alt="..."
              ></img>
            </div>
            <div className="carousel-item">
              <img
                src="./CMSImages/College Library.jpg"
                className="rounded mx-auto d-block"
                alt="..."
              ></img>
            </div>
            <div className="carousel-item">
              <img
                src="./CMSImages/students with degree.jpg"
                className="rounded mx-auto d-block"
                alt="..."
              ></img>
            </div>
            <div className="carousel-item">
              <img
                src="./CMSImages/students.jpg"
                className="rounded mx-auto d-block"
                alt="..."
              ></img>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="container-fluid">
        <br />
        <h2>NEWS AND EVENTS</h2>
        <h5>
          {" "}
          It's all about our college events and some important news. If you want
          to know more details about the News/Events please contact
          Administration.
        </h5>

        <marquee width="100%" direction="up" height="500">
          <marquee behavior="scroll" direction="up" scrollamount="2"></marquee>
          <h5>20th March 2024, 9.30 am Onwards</h5>{" "}
          <p>
            SEMINAR ON THINK-BIG
            <br />
            Venue: Bharathiyar Hall
          </p>
          <h5>6th April 2024,10:00 am</h5>
          <p>
            HISET 2024 - SCHOLARSHIP ENTRANCE TEST" FOR MBA PROGRAMME WITH
            SCHOLARSHIP"
            <br />
            Venue: Ashoka Hall
          </p>
          <h5> 25th March 2024, 9:00am</h5>
          <p>
            "CLUSTERS 2024" - A NATIONAL LEVEL TECHNICAL SYMPOSIUM
            <br />
            Chief Guest: Dr.P.Veeramuthuvel,ISRO Scientist & Project Director
            Chandrayaan-3, Govt. of India
          </p>
          <h5> 20th March 2024, 9.30 Pm Onwards</h5>
          <p>
            {" "}
            "WORKSHOP ON MASTERING MODERN JAVA - BEST PRACTICES & PATTERNS"
            <br />
            Venue: C Block Lab
          </p>
        </marquee>
      </div>

      <h2> Explore our popular Courses </h2>
      <br />

      <div className="Courses">
        <div className="row row-cols-2 row-cols-md-3 g-2">
          <div className="col-lg-3 md-6">
            <div className="card">
              <img
                src="./CMSImages/Managenent Studies.jpg"
                className="card-img-top, rounded"
                alt="..."
              ></img>
              <div className="overlay">Management Studies</div>
            </div>
          </div>

          <div className="col-lg-3 md-6">
            <div className="card">
              <img
                src="./CMSImages/Nano science.jpg"
                className="card-img-top, rounded"
                alt="..."
              ></img>
              <div className="overlay">NanoScience and Technology y</div>
            </div>
          </div>

          <div className="col-lg-3 md-6">
            <div className="card">
              <img
                src="./CMSImages/aeronautical eng.jpg"
                className="card-img-top, rounded"
                alt="..."
              ></img>
              <div className="overlay">Aeronautical Engineering</div>
            </div>
          </div>

          <div className="col-lg-3 md-6">
            <div className="card">
              <img
                src="./CMSImages/Robotics and automation.jpg"
                className="card-img-top, rounded"
                alt="..."
              ></img>
              <div className="overlay">Robotics and Automation</div>
            </div>
          </div>

          <div className="col-lg-3 md-6">
            <div className="card">
              <img
                src="./CMSImages/biomed.pg.jpg"
                className="card-img-top, rounded"
                alt="..."
              ></img>
              <div className="overlay">BioMedical Engineering</div>
            </div>
          </div>

          <div className="col-lg-3 md-6">
            <div className="card">
              <img
                src="./CMSImages/computer-lab.jpg"
                className="card-img-top, rounded"
                alt="..."
              ></img>
              <div className="overlay">Information Technology</div>
            </div>
          </div>
        </div>
      </div>
      <br />

      <section className="Info">
        <h2> Why ABC for your Engineering Career? </h2>
        <p>
          ABC is one of the established engineering institutions in India. The
          renowned engineering college adds value to every student's life with a
          technically advanced curriculum. In addition, Sri Ramakrishna
          Engineering College has a state-of-art infrastructure and delivers
          excellent mentorship, which helps the students to accomplish their
          career goals. Inspire students to think outside the box and develop
          unique solutions to problems. Offers opportunities to explore distinct
          ideas and approaches. The environment prioritizes the necessities and
          interests of students. The campus creates an engaging atmosphere for
          Students to indulge in their academic growth. ABC inculcates practical
          skills and knowledge in students in real-world situations. And sets a
          platform for their holistic development.
        </p>
      </section>

      <br />

      <div className="bd-footer bg-body-tertiary">
        <div className="container md-3 text-body-secondary">
          <p> ABC College </p>
          <ul className="list-unstyled small">
            <li>
              Avinashi Rd, behind Nava India, Udayampalayam, Tamil Nadu 641028
            </li>
            <li> T : +91 98431 33333 , M : + 91 80983 33333</li>
            <li>E : info@abc.net</li>
            <li>&copy; 2024 | ABC College Rights reserved. </li>
          </ul>
        </div>
      </div>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossOrigin="anonymous"
      ></script>
    </>
  );
}

export default App;
