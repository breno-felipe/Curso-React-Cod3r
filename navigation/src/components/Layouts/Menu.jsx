import * as React from "react";
import { Link } from "react-router-dom";

import "./Styles/Menu.css";

const Menu = (props) => {
  return (
    <aside className="Menu">
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
          <li>
            <Link to="/params/123">Paramêtros #01</Link>
          </li>
          <li>
            <Link to="/params/legal">Paramêtros #02</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Menu;
