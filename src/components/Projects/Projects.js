import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { IoLogoGithub } from "react-icons/io5";
import "./Projects.css";

export default function Projects() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <section
      className={`projects ${darkMode ? "projects-dark" : "projects-light"}`}
      id="projects"
    >
      <h2>My Projects ⚡️</h2>
      <p>
        Hover or tap for information on each project. More of my projects can be
        found on{" "}
        <a
          href="https://github.com/lewisgormanneale"
          target="_blank"
          rel="noreferrer"
          aria-label="link to my GitHub profile"
        >
          GitHub <IoLogoGithub />
        </a>
      </p>
      <div className="project-row">
        <div className="project project-large" id="indygo-project">
          <img
            className="project-screenshot"
            src="images/indygo-logo.webp"
            alt="project screenshot"
          ></img>
          <div className="project-overlay">
            <h3>IndyGo</h3>
            <p>
              My final project for School of Code, built in an agile team of six
              bootcampers over four weeks. IndyGo enables businesses to offer
              live, limited-time deals to consumers within a walkable distance.
            </p>
            <div className="project-links">
              <a
                href="https://indygo.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="project-button"
                aria-label="link to the IndyGo website"
              >
                View Live
              </a>
              <a
                href="https://github.com/SchoolOfCode/indygo"
                target="_blank"
                rel="noreferrer"
                className="project-button"
                aria-label="link to the IndyGo GitHub repo"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="project project-small" id="ptp-project">
          <img
            className="project-screenshot"
            src="images/ptp-logo.webp"
            alt="project screenshot"
          ></img>
          <div className="project-overlay">
            <h3>Pokémon Team Planner</h3>
            <p>
              A Pokémon Team Planner to help you plan out a team of 6 for games
              in the popular RPG series.
            </p>
            <div className="project-links">
              <a
                href="https://lewisgormanneale.github.io/pokemon-team-planner/"
                target="_blank"
                rel="noreferrer"
                className="project-button"
                aria-label="link to the Pokémon Team Planner website"
              >
                View Live
              </a>
              <a
                href="https://github.com/lewisgormanneale/pokemon-team-planner"
                target="_blank"
                rel="noreferrer"
                className="project-button"
                aria-label="link to the Pokémon Team Planner's GitHub repo"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="project-row">
        <div className="project project-small" id="portfolio-project">
          <img
            className="project-screenshot"
            src="images/portfolio-screenshot.webp"
            alt="project screenshot"
          ></img>
          <div className="project-overlay">
            <h3>Portfolio Website</h3>
            <p>
              You're here already! I built this website myself. It's intended to
              highlight my major projects and I will update this list over time.
            </p>
            <div className="project-links">
              <a
                href="https://github.com/lewisgormanneale/portfolio-website"
                target="_blank"
                rel="noreferrer"
                className="project-button"
                aria-label="link to this portfolio's GitHub repo"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="project project-large" id="mdoc-project">
          <img
            className="project-screenshot"
            src="images/mdoc-logo.webp"
            alt="project screenshot"
          ></img>
          <div className="project-overlay">
            <h3>My Days Of Code</h3>
            <p>A website to record and share your #100DaysOfCode progress.</p>
            <div className="project-links">
              <a
                href="https://mydaysofcode.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="project-button"
                aria-label="Link to the My Days Of Code website"
              >
                View Live
              </a>
              <a
                href="https://github.com/lewisgormanneale/my-days-of-code"
                target="_blank"
                rel="noreferrer"
                className="project-button"
                aria-label="Link to the My Days Of Code GitHub repo"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
