import React, { Component } from "react"
import { NavLink } from "react-router-dom"

export default class BaseLayout extends Component {
  render() {
    return (
      <div className="container">
        <nav>
          <ul>
            <li>
              <NavLink to="/">Awestruck Co</NavLink>
            </li>
            <li>
              <NavLink to="/boards">Boards</NavLink>
            </li>
            <li>
              <NavLink to="/kites">Kites</NavLink>
            </li>
            <li>
              <NavLink to="/destinations">Destinations</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
          {this.props.children}
        </nav>
      </div>
    )
  }
}
