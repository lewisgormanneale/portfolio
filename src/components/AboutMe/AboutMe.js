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
            Hello again! Thanks for taking a look at my portfolio website.{" "}
            <span>
              I'm an aspiring developer trained in Full Stack Development at the
              School of Code.
            </span>{" "}
            In my previous work as a Business Systems Analyst, I always enjoyed
            finding solutions that helped others. But I wanted to be able to do
            more, and be able to build these solutions for myself -{" "}
            <span>I wanted to be a developer!</span>
          </p>
          <p>
            Once I began learning to code, I knew it was the career path for me
            and enrolled in the<span> School of Code </span>bootcamp. It teaches
            the fundamentals of programming, how to work in a high performance
            tech team, and how to work to industry best practices and standards.
            I've had the
            <span> time of my life </span>learning to code and building projects
            since last year, and am<span> taking this energy forward </span>into
            my new career as I continue to work on developing my skills.
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
