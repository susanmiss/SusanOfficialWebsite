import React, {Component} from "react";
import "../style/Projects.css";
import BloodDonationCover from "../images/bloodDonationCover.png";
import BloodDonationCode from "../images/bloodDonationCode.png";
import Trip4meCover from "../images/trip4meCover.png";
import Trip4meCode from "../images/trip4meCode.png";
import QuarantineCover from '../images/quarantineCover.png';
import QuarantineCode from '../images/quarantineCode.png';
import ZombieCover from '../images/zombieCover.png'
import ZombieCode from '../images/zombieCode.png'

class Projects extends Component {


  render(){
   

  return (
    <div className="projects">
      <div className="row pg-1">

       <div className="cf">
          <img className="bottom" id="bdb" src={BloodDonationCode}/>
          <img className="top" id="bdt" src={BloodDonationCover}/>
        </div>

        <div className="project-content column">
          <h2>Blood Donation</h2>
          <p>
          Blood Donation Finder is a project about people who want donate blood and Hospital/Clinics in need of it. The Hospitals can send a post to the website and the users can interage informing the hospital if they are going, send emails, and in their own dashboard can see last and next time to donate. 
          <br />
          <p>Technologies Used:</p>
          <ul>
            <li>MongoDB</li>
            <li>Express</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Nodemailer</li>
            <li>Bootstrap</li>
            <li>AppointmentApp</li>

          </ul>
          </p>
          <a href="https://github.com/susanmiss/blood-donation-finder" target="_blank"><button className="btn-github">Access on Github</button></a>
          
        </div>
    
      </div>

      <div className="row">
        <div className="project-content column">
          <h2>Trip4Me</h2>
          <p>
          Trip4me is a project about my own trips. I wanted to create a website from scratch using MERN technology. There is an admin area where is possible to create, delete, and update a post with images.
          <br />
          <p>Technologies Used:</p>
          <ul>
            <li>MongoDB</li>
            <li>Express</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Bootstrap</li>
          </ul>
          </p>
          <a href="https://github.com/susanmiss/trip4me" target="_blank"><button className="btn-github">Access on Github</button></a>
        </div>

       
        <div className="cf">
          <img className="bottom" src={Trip4meCode}/>
          <img className="top" src={Trip4meCover}/>
        </div>
    
      </div>

      <div className="row">
      <div className="cf">
          <img className="bottom" src={ZombieCode}/>
          <img className="top" src={ZombieCover}/>
        </div>

        <div className="project-content column">
          <h2>Zombie Movies</h2>
          <p>
          Zombie Movies is a project when you can see a list of zombie movies (my favorites ). There is a search bar when you can search by actor's name or movie's name - don't need do be zombies related. I created that project in order to learn more about fetching APis, express and requests.
          <br />
          <p>Technologies Used:</p>
          <ul>
            <li>Express</li>
            <li>EJS - as engine template</li>
            <li>External API integration</li>
          </ul>
          </p>
          <a href="https://github.com/susanmiss/zombie-movies" target="_blank"><button className="btn-github">Access on Github</button></a>
        </div>
      </div>

      <div className="row">
        <div className="project-content column">
          <h2>Quarantine Thougts</h2>
          <p>
          Quarantine Thoughts is a simple blog when we can share our thoughts in this quarantine times. I wanted to create a blog from scratch using MERN technology. There is an admin area where is possible to create, delete, and update a post.
          <br />
          <p>Technologies Used:</p>
          <ul>
            <li>React</li>
            <li>Node.js</li>
            <li>MongoDB</li>
            <li>Node.js</li>
            <li>Bootstrap</li>
          </ul>
          </p>
          <a href="https://github.com/susanmiss/quarantine-thoughts" target="_blank"><button className="btn-github">Access on Github</button></a>
        </div>

        <div className="cf">
          <img className="bottom" src={QuarantineCode}/>
          <img className="top" src={QuarantineCover}/>
        </div>
      </div>
    </div>
  );
 }
}

export default Projects;
