import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import ToolkitIcon from "../ToolkitIcon/ToolkitIcon";
import "./Toolkit.css";

export default function Toolkit() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <section
      className={`toolkit ${darkMode ? "toolkit-dark" : "toolkit-light"}`}
    >
      <h2>Skills 🧰</h2>
      <span>(A-Z)</span>
      <div className="toolkit-content">
        <div className="toolkit-icons">
          <ToolkitIcon
            name="Angular"
            url="https://angular.io/"
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/angularjs-colored.svg"
          />
          <ToolkitIcon
            name="Bootstrap"
            url="https://getbootstrap.com/"
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg"
          />
          <ToolkitIcon
            name="CSS3"
            url="https://www.w3.org/TR/CSS/#css"
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg"
          />
          <ToolkitIcon
            name="Express"
            url="https://expressjs.com/"
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg"
          />
          <ToolkitIcon
            name="Figma"
            url="https://www.figma.com/"
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg"
          />
          <ToolkitIcon
            name="HTML5"
            url="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg"
          />
          <ToolkitIcon
            name="Git"
            url="https://git-scm.com/"
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg"
          />
          <ToolkitIcon
            name="JavaScript"
            url="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg"
          />
          <ToolkitIcon
            name="NodeJS"
            url="https://nodejs.org/en/"
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg"
          />
          <ToolkitIcon
            name="Postgres"
            url="https://www.postgresql.org/"
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg"
          />
          <ToolkitIcon
            name="React"
            url="https://reactjs.org/"
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg"
          />
          <ToolkitIcon
            name="Sass"
            url="https://sass-lang.com/"
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg"
          />
          <ToolkitIcon
            name="Supabase"
            url="https://supabase.io/"
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/supabase-colored.svg"
          />
          <ToolkitIcon
            name="Tailwind CSS"
            url="https://tailwindcss.com/"
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg"
          />
          <ToolkitIcon
            name="TypeScript"
            url="https://www.typescriptlang.org/"
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg"
          />
        </div>
      </div>
    </section>
  );
}
