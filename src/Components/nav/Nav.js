import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import Home from "../home/Home";
import Skills from "../skills/Skills";
import Blog from "../blog/Blog";
import Portfolio from "../portfolio/Portfolio";
import Hire from "../hire/Hire";

function Nav() {
  return (
    <div className="navBackground">
      <nav>
        <ul>
          <li>
            <NavLink className="link" exact to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/Skills" activeClassName="active">
              My-Skills
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/Blog" activeClassName="active">
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/Portfolio" activeClassName="active">
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/Hire" activeClassName="active">
              Hire-Me
            </NavLink>
          </li>
        </ul>
      </nav>

      <div>
        <Route exact path="/" component={Home} />
        <Route path="/Skills" component={Skills} />
        <Route path="/Blog" component={Blog} />
        <Route path="/Portfolio" component={Portfolio} />
        <Route path="/Hire" component={Hire} />
      </div>
    </div>
  );
}

export default Nav;
