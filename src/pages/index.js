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
        I am experienced in leveraging agile frameworks to provide a robust
        synopsis for high level overviews. Iterative approaches to corporate
        strategy foster collaborative thinking to further the overall value
        proposition.
      </Resume>
      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Web Developer</h3>
              <div className="subheading mb-3">
                Inventarium - Personal Project
              </div>
              <p>
                I am working to implement, as a co-developer, new features of
                this solution to change the way of collect nature informations
                by forest engineers.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">October 2020 - Present</span>
            </div>
          </div>
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Administrative assistant</h3>
              <div className="subheading mb-3">CRQ</div>
              <p>
                I worked in customer service and implementation of routines'
                manual, mapping procedures and services and application of 5's.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">May 2016 - August 2020</span>
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
              <h3 className="mb-0">Instituto Metrópole Digital</h3>
              <div className="subheading mb-3">
                Internet Computer Technician
              </div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Feb 2020 - Present</span>
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
            Apart from being a web developer, I enjoy to run outdoors,
            especially near the beach. I also like to play guitar with friends
            in a Rock band. To distract, it's nice read a book or see some film
            or series. And, just to finish, i'm a big fan of soccer and
            (American) football.
          </p>
          <p className="mb-0">
            But currently I have dedicated my free time to improve my knowledge
            as a developer and studied by bootcamps, web development courses and
            participating as an active member of technology communities.
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
              GoStack Bootcamp RockeSeat (soon)
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
