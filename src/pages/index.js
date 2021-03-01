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
        Olá, Bem-vindo! Sou Paulo, Desenvolvedor web.

        Acesse minhas redes sociais nos links a seguir:
      </Resume>
      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experiência</h2>
          
            <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Desenvolvedor de software</h3>
              <div className="subheading mb-3">SistemasBR</div>
              <p>
                Atuo como estagiário em uma equipe que desenvolve software baseado em C# para micro e pequenas empresas.
               
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Fev-2021  - Atual</span>
            </div>
          </div>
        </div>

        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Desenvolvedor frontend</h3>
              <div className="subheading mb-3">
                Inventarium - Projeto pessoal
              </div>
              <p>
                Atuo como desenvolvedor frontend desse projeto utilizando next, tailwind e typescript.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Outubro 2020 - Atual</span>
            </div>
          </div>
          
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Educação</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Instituto Metrópole Digital</h3>
              <div className="subheading mb-3">
                Técnico de informática para internet
              </div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Fev 2020 - Atual</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">
                Technische Universität Chemnitz - Germany
              </h3>
              <div className="subheading mb-3">Systems Engineering</div>
              <p>Bolsista Capes - CSF</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Set 2014 - Ago 2015</span>
            </div>
          </div>
          <br></br>
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">
                Universidade Federal do Rio Grande do Norte - UFRN
              </h3>
              <div className="subheading mb-3">Engenharia de Produção</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Fev 2009 - Jun 2016</span>
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
            Linguagens &amp; ferramentas
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
          <h2 className="mb-5">Interesses</h2>
          
          <p className="mb-0">
            Tenho dedicado meu tempo livre para aprimorar meus conhecimentos 
            e participado de bootcamps, cursos de web development courses e discussões 
            em fóruns e comunidades de tecnologia para me manter atualizado.
          </p>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="certifications"
      >
        <div className="w-100">
          <h2 className="mb-5">Certificações</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-award text-warning"></i>
              GoStack Bootcamp 14 da RocketSeat
            </li>
            <li>
              <i className="fa-li fa fa-award text-warning"></i>
              Web Developer certified do IMD-UFRN
            </li>
            <li>
              <i className="fa-li fa fa-award text-warning"></i>
              Javascript course certified do IFRS
            </li>
            <li>
              <i className="fa-li fa fa-award text-warning"></i>
              Javascript Tutorial course certified do Sololearn
            </li>
            <li>
              <i className="fa-li fa fa-award text-warning"></i>
              HTML Fundamentals course certified do Sololearn
            </li>
            <li>
              <i className="fa-li fa fa-award text-warning"></i>
              Responsive Web Design certified do FreeCodeCamp
            </li>
            <li>
              <i className="fa-li fa fa-award text-warning"></i>
              Six Sigma Yellow Belt certified do 6sigmastudy
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
