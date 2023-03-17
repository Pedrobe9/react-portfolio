import React from 'react';
//import { Link, Route, Routes } from 'react-router-dom';
import EmailForm from '../components/EmailForm.js';
import Pdf from '../components/assets/pb-cv.pdf';

// Ass seeing in https://gist.github.com/jdtdesigns/936839ea2cea6b4d3193b520c750a09b, part 16-18
function Contact() {
  return (
    // Use bootstrap classes.
    <div className="container-fluid">
      <h1 className="aboutme">Contact Me</h1>
      <div className='page-section'>
        <section className='col-6 cont1'>
          <div className="row ">
          <nav id="contact-txt" className="col-md-8">
            <a className="contact-foot" href="">Facebook</a>
            <a className="contact-foot" href="https://github.com/Pedrobe9">GitHub</a>
            <a className="contact-foot" href="">Twitter</a>
            <a className="contact-foot" href="https://www.linkedin.com/in/pedro-bernal-8b7580266/">LinkedIn</a>
            <a className="contact-foot" href = {Pdf}>CV</a>
          </nav>
          </div>
        </section>
        <section className='col-6 cont2'>
          <div className="row ">   
            <EmailForm />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;
