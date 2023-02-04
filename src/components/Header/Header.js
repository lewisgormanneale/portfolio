import React from "react";
import NavList from "../NavList/NavList";
import { IoChevronDown } from "react-icons/io5";
import "./Header.css";

export default function Header() {
  return (
    <div className="header-wrapper">
      <NavList />
      <header className="header">
        <div className="main-header-content">
          <div className="header-text">
            <h1>
              <span>Hi, I'm Lewis</span> 👋🏻
            </h1>
            <p>
              Trained in <span>Full Stack Development</span> 💻
            </p>
            <p>
              <span>
                <a
                  href="https://www.schoolofcode.co.uk/"
                  target="_blank"
                  rel="noreferrer"
                >
                  School of Code
                </a>
              </span>{" "}
              Graduate 🎓
            </p>
          </div>
          <div className="avatar-container">
            <img
              src="images/avatar.webp"
              alt="A selfie of Lewis"
              className="avatar"
              width={240}
              height={240}
            ></img>
          </div>
        </div>
        <p className="scroll-arrow">
          <IoChevronDown />
        </p>
      </header>
    </div>
  );
}
