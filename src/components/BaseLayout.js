import React, { Component } from "react"
import { NavLink } from "react-router-dom"

export default class BaseLayout extends Component {
  render() {
    return (
      <div className="container">
        <nav>
          <ul>
            <li>
              <NavLink activeClassName="selected" to="/">Awestruck Co</NavLink>
            </li>
            <li>
              <NavLink activeClassName="selected"  to="/boards">Boards</NavLink>
            </li>
            <li>
              <NavLink activeClassName="selected"  to="/kites">Kites</NavLink>
            </li>
            <li>
              <NavLink activeClassName="selected"  to="/destinations">Destinations</NavLink>
            </li>
            <li>
              <NavLink activeClassName="selected"  to="/contact">Contact</NavLink>
            </li>
          </ul>
          {this.props.children}
        </nav>
      </div>
    )
  }
}
