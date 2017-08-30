import React, { Component } from "react"
import { NavLink } from "react-router-dom"

export default class BaseLayout extends Component {
  render() {
    return (
      <div className="container">
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/sup">Sup</NavLink>
            </li>
            <li>
              <NavLink to="/surflongboard">Surf Longboard</NavLink>
            </li>
          </ul>
          {this.props.children}
        </nav>
      </div>
    )
  }
}
