import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./AboutMe.css";

export default function AboutMe() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <section
      className={`about-me ${darkMode ? "about-me-dark" : "about-me-light"}`}
      id="about-me"
    >
      <h2>About Me 🙋🏻‍♂️</h2>
      <div className="about-me-content">
        <div className="about-me-description">
          <p>
            In my previous job as a Business Systems Analyst,{" "}
            <span className="emphasise">
              I always enjoyed finding solutions that helped others
            </span>
            . But I wanted to be able to do more, and be able to build these
            solutions for myself -{" "}
            <span className="emphasise">I wanted to be a developer</span>. Once
            I began learning to code, I knew it was the career path for me and
            enrolled onto the School of Code, an intensive 16-week full-time
            bootcamp which I highly recommend to anyone interested.
          </p>
          <p>
            I'm an
            <span className="emphasise">
              {" "}
              effective communicator, team player and problem-solver
            </span>{" "}
            able to clearly break down, understand and explain problems to
            others, and I found that all of these skills I had developed in
            previous roles translated extremely well into this new career path.
            I had the time of my life learning to code and building projects,
            both for the course and in my spare time. Now, I'm
            <span className="emphasise"> taking this energy forward </span>
            into my new career as I continue to work on improving my skills.
          </p>
        </div>
        <div className="image-container">
          <img
            src="images/soc-logo.webp"
            alt="school of code logo"
            className="soc-logo"
            width={300}
            height={300}
          ></img>
        </div>
      </div>
    </section>
  );
}
