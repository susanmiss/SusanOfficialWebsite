import React from "react";
import "../style/Projects.css";
import BloodDonationCover from "../images/bloodDonationCover.png";
import BloodDonationCode from "../images/bloodDonationCode.png";
import Trip4meCover from "../images/trip4meCover.png";
import Trip4meCode from "../images/trip4meCode.png";
import QuarantineCover from '../images/quarantineCover.png';
import QuarantineCode from '../images/quarantineCode.png';
import ZombieCover from '../images/zombieCover.png'
import ZombieCode from '../images/zombieCode.png'

function Projects() {
  return (
    <div className="projects">
      <div className="row pg-1">
        <div className="project-img column">
          <img src={BloodDonationCover} alt="blood donation web site cover" />
          {/* <img src={BloodDonationCode} alt="blood donation web site cover" /> */}
        </div>

        <div className="project-content column">
          <h2>Blood Donation</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            placerat turpis ac nisl ultricies mollis. Quisque blandit lobortis
            bibendum. Morbi aliquam malesuada lorem, ac placerat quam malesuada
            at. Proin fringilla dolor mauris, tincidunt gravida diam semper
            quis. Praesent molestie id orci eget elementum. Vestibulum sed massa
            tortor. Proin pharetra varius ultrices. Donec interdum eros et
            luctus volutpat. Phasellus metus sem, feugiat nec gravida vel,
            tempor eu tortor.
          </p>
          <a href="https://github.com/susanmiss/blood-donation-finder" target="_blank"><button className="btn-github">Access on Github</button></a>
          
        </div>
    
      </div>

      <div className="row">
        <div className="project-content column">
          <h2>Trip4Me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            placerat turpis ac nisl ultricies mollis. Quisque blandit lobortis
            bibendum. Morbi aliquam malesuada lorem, ac placerat quam malesuada
            at. Proin fringilla dolor mauris, tincidunt gravida diam semper
            quis. Praesent molestie id orci eget elementum. Vestibulum sed massa
            tortor. Proin pharetra varius ultrices. Donec interdum eros et
            luctus volutpat. Phasellus metus sem, feugiat nec gravida vel,
            tempor eu tortor.
          </p>
          <a href="https://github.com/susanmiss/trip4me" target="_blank"><button className="btn-github">Access on Github</button></a>
        </div>

        <div className="project-img column">
          <img src={Trip4meCover} alt="blood donation web site cover" />
        </div>
      </div>

      <div className="row">
        <div className="project-img column">
          <img src={ZombieCover} alt="blood donation web site cover" />
        </div>

        <div className="project-content column">
          <h2>Zombie Movies</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            placerat turpis ac nisl ultricies mollis. Quisque blandit lobortis
            bibendum. Morbi aliquam malesuada lorem, ac placerat quam malesuada
            at. Proin fringilla dolor mauris, tincidunt gravida diam semper
            quis. Praesent molestie id orci eget elementum. Vestibulum sed massa
            tortor. Proin pharetra varius ultrices. Donec interdum eros et
            luctus volutpat. Phasellus metus sem, feugiat nec gravida vel,
            tempor eu tortor.
          </p>
          <a href="https://github.com/susanmiss/zombie-movies" target="_blank"><button className="btn-github">Access on Github</button></a>
        </div>
      </div>

      <div className="row">
        <div className="project-content column">
          <h2>Quarantine Thougts</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            placerat turpis ac nisl ultricies mollis. Quisque blandit lobortis
            bibendum. Morbi aliquam malesuada lorem, ac placerat quam malesuada
            at. Proin fringilla dolor mauris, tincidunt gravida diam semper
            quis. Praesent molestie id orci eget elementum. Vestibulum sed massa
            tortor. Proin pharetra varius ultrices. Donec interdum eros et
            luctus volutpat. Phasellus metus sem, feugiat nec gravida vel,
            tempor eu tortor.
          </p>
          <a href="https://github.com/susanmiss/quarantine-thoughts" target="_blank"><button className="btn-github">Access on Github</button></a>
        </div>

        <div className="project-img column">
          <img src={QuarantineCover} alt="blood donation web site cover" />
        </div>
      </div>
    </div>
  );
}

export default Projects;
