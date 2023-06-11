import React from "react";
import "../styles/About.css";
const About = () => {
  return (
    <div className="about">
      <div>
        <p>
          <span className="exprence">
            <h3>About Developer</h3>
          </span>
          My name is Rajani kant Das. I live in Brahmapur Odisha. Currently i'm
          learning WebDevelopment after finishing my degree.
        </p>
        <p>
          <span className="exprence">
            <h3>Education</h3>
          </span>
          I have completed my BTech in Electrical and Electronics Engineering
          (EEE) in Roland Institute of Technology Odisha Brahmapur. After
          completing the Degree i started Softwear course in Hyderabad. I have
          completed UI FULLSTACK WEB DEVELOPMENT, in which i learned in Frontend
          HTML, CSS, BOOTSTRAP, JAVASCRIPT, JQUERY and in Backend i learned
          ExpressJs, NodeJs and Database like MongoDB. This course took 5months
          to complete. After completing my UI fullstack course i Started learing
          ReactJs, it took 3months to complete.
        </p>
        <br />
        <p>
          <span className="exprence">
            <h3>Project and Experience</h3>
          </span>
          <b>Project-1 - </b> I have created a portfolio as my first project.
          <br />
          <b>Skills - </b>ReactJs, MUI, Routing.
          <br />
          <br />
          <b>Project-2 - </b> I have created a Marvel Heros project.
          <br />
          <ol type="1">
            <li>
              <b>About Project: </b> <br />
              <li>
                - created a Database using MongoDB, From where data are coming.
              </li>
              <br />
              <li>
              - created a searchbar you can search by name and get data in a
                popup, and a shopping page in which user can browse, filter,
                sort and created a custom shopping cart.
              </li>
            </li>
          </ol>
          <br />
          <b>Skills - </b> ReactJs, HTML, CSS, Javascript, Bootstrap, MongoDB,
          ExpressJs, Axios, Routing, MUI.
        </p>
        <br />
        <p>
          <b>College Project - </b> In college we created a Automatic Water
          Level Controller In Overhead Tanks. This system can turn off motor
          when water level touched a limit.By this system we can reduce water
          wastage. and our second project was Real Time Embedded System And
          Mechatronics.
        </p>
      </div>
    </div>
  );
};

export default About;
