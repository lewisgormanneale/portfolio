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
            Hello again!{" "}
            <span>Thanks for taking a look at my portfolio website</span>. As
            you may have seen already, I'm an aspiring developer currently
            enrolled at the School Of Code bootcamp learning Full Stack
            Development. It teaches the <span>fundamentals of programming</span>
            , how to work in a <span>high performance tech team</span> and how
            to work to <span>industry best practices and standards</span>.
          </p>
          <p>
            Most recently in my career I held an{" "}
            <span>IT role as a Senior Business Systems Analyst</span>, where I
            worked on improving business processes and systems, while helping
            colleagues with techical issues. I really enjoyed finding solutions
            that helped others, but <span>wanted to be able to do more</span> -
            I wanted to be capable of building my own solutions to problems that
            required custom solutions. <span>I wanted to be a developer!</span>
          </p>
          <p>
            Once I began learning to code for myself,
            <span> I knew it was the career path for me</span> and enrolled in
            the School of Code. I've had the time of my life learning to code
            and building the projects you can see above over the last few
            months, and{" "}
            <span>
              plan to take this energy forward into this new career path
            </span>
            , continuing to develop my coding knowledge and progress my skills
            as far as possible.
          </p>
        </div>
        <div className="image-container">
          <img src="images/real-me.jpg" alt="me irl" className="me-irl"></img>
          <p>(To-Do: Find another picture of myself to put in here...)</p>
        </div>
      </div>
    </section>
  );
}
