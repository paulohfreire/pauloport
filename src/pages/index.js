import React from 'react';

import Layout from '../components/Layout';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import Resume from '../components/Resume';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <Resume
        firstName={config.firstName}
        lastName={config.lastName}
        address={config.address}
        phone={config.phone}
        email={config.email}
        socialLinks={config.socialLinks}
      >
        Hi, Welcome! I'm Paulo, Fullstack developer. Follow me:
      </Resume>
      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Work experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Frontend developer</h3>
              <div className="subheading mb-3">Framework Digital</div>
              <p>
                Project configuration and maintenance in javascript and Bryntum
                component. Gantt chart for aircraft maintenance
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Sep 2022 - Dez 2022</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Frontend developer intern</h3>
              <div className="subheading mb-3">Framework Digital</div>
              <p>
                I've worked in an agile team in the maintenance of e-commerce
                web applications using Material ui, Sass, Github, Storybook,
                AngularJS and Reactjs.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Nov 2021 - Ago 2022</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Software developer intern</h3>
              <div className="subheading mb-3">SistemasBR</div>
              <p>
                I worked in an agile team with maintainence and creating new
                features to a MVC .Net C# project for enterprises.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Feb 2021 - Aug 2021</span>
            </div>
          </div>
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Frontend developer</h3>
              <div className="subheading mb-3">Merca2Online</div>
              <p>
                Contributes to the preparation of the startup brand manual and
                product landing page made with Javascript, Html and Css.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Oct 2020 - Jul 2021</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Faculdade Descomplica</h3>
              <div className="subheading mb-3">
                Information Systems Projects Specialization
              </div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Dec 2021 - Nov 2022</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Instituto Metrópole Digital</h3>
              <div className="subheading mb-3">
                Internet Computer Technician
              </div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Feb 2020 - Nov 2021</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">
                Technische Universität Chemnitz - Germany
              </h3>
              <div className="subheading mb-3">Systems Engineering</div>
              <p>Capes Scholarship - CSF</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Sep 2014 - Aug 2015</span>
            </div>
          </div>
          <br></br>
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">
                Universidade Federal do Rio Grande do Norte - UFRN
              </h3>
              <div className="subheading mb-3">Production Engineering</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Feb 2009 - Jun 2016</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>

          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-html5"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-css3-alt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square"></i>
            </li>

            <li className="list-inline-item">
              <i className="fab fa-react"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-node-js"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-git"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-yarn"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-npm"></i>
            </li>
          </ul>

          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              Mobile-First, Responsive Design
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Browser Testing &amp; Debugging
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Functional Teams
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Agile Development &amp; Scrum
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>
            Currently I have dedicated myself to courses and bootcamps to
            improve of my skills in React, Node and Javascript, in addition I
            have actively participated in discussions in area communities.
          </p>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="certifications"
      >
        <div className="w-100">
          <h2 className="mb-5">Certifications</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-award text-warning"></i>
              SOLID principles apply - Macoratti
            </li>
            <li>
              <i className="fa-li fa fa-award text-warning"></i>
              GoStack Bootcamp 14 by RocketSeat
            </li>
            <li>
              <i className="fa-li fa fa-award text-warning"></i>
              Web Developer certified by IMD-UFRN
            </li>
            <li>
              <i className="fa-li fa fa-award text-warning"></i>
              Javascript course certified by IFRS
            </li>
            <li>
              <i className="fa-li fa fa-award text-warning"></i>
              Javascript Tutorial course certified by Sololearn
            </li>
            <li>
              <i className="fa-li fa fa-award text-warning"></i>
              HTML Fundamentals course certified by Sololearn
            </li>
            <li>
              <i className="fa-li fa fa-award text-warning"></i>
              Responsive Web Design certified by FreeCodeCamp
            </li>
            <li>
              <i className="fa-li fa fa-award text-warning"></i>
              Six Sigma Yellow Belt certified by 6sigmastudy
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
