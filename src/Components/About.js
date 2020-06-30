import React from 'react';
import '../style/About.css'


function About() {
  return (
    <div className="container">
       <div className="about">
            <p id="text-welcome">Hello and welcome to my website :)</p>
            <h1 id="text-title">I’m a Software Engineer based in London - UK.</h1>
            <p id="text-about">Prior to deciding I wanted to pursue coding as a career, I spent the last ten years leading financial and maintenance teams for a hospital group in Brazil. During this time, I gained a lot of professional experience which I have no doubt will help me to become a successful software engineer. I have always been curious about development and decided to take some additional courses to further my understanding and I haven’t looked back since. I am highly determined and extremely committed to pursuing a career in development.</p>
        </div>

        <div className="buttons-about">
            <button id="btn-cv">Download CV</button>
            <button id="btn-get-in-touch">Get in Touch</button>
        </div>

    </div>
  );
}

export default About;