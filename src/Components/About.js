import React from 'react';
import '../style/About.css'


function About() {
  return (
    <div className="container">
       <div className="about">
       <p id="text-welcome">Hello, my name is Susan Missaglia. Welcome :)</p>
            <h1 id="text-title">I’m a Junior Software Engineer based in London - UK.</h1>
            <p id="text-about">Prior to deciding I wanted to pursue coding as a career, I spent the last ten years leading financial and maintenance teams for a hospital group in Brazil. During this time, I gained a lot of professional experience which I have no doubt will help me to become a successful software engineer.</p>
            <p id="text-about">I applied to study at Futureproof Botcamp, and among more than 700 applicants, I've been selected. The bootcamp covered full stack development and gave me the skills needed to start a career as Junior Developer. </p>
            <p id="text-about"> Version Control via Github, problem solving, clean code, TDD always as a goal. These are skills that I'm fully committed to achieve always. </p>
            <p>MERN Technology is not just a work's tool, it's hobby and I love it.</p>
        </div>

        <div className="buttons-about">
        <a href="https://media-exp1.licdn.com/dms/document/C512DAQEuGxY1YMLFiw/profile-treasury-document-pdf-analyzed/0?e=1593687600&v=beta&t=JIJ3Su_8FTikbHOf1gNvTxPnVNrNaHT56YwnZLYkuYA" target="_blank"> <button id="btn-cv">Download CV</button></a>
            <a href="mailto: 'fsusan@icloud.com'"><button id="btn-get-in-touch">Get in Touch</button></a>
        </div>

    </div>
  );
}

export default About;