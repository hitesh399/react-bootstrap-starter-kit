import React from "react";

import { NavLink } from "react-router-dom";

export default class Header extends React.PureComponent {
  render() {
    console.log("Render func call in header");
    return (
      <nav>
        <ul>
          <li>
            <NavLink exact to="/">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/admin/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/admin/dashboard">
              Dashboard
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
  componentDidMount() {
    console.log("Header is mounted", this.props);
  }
  componentDidUpdate() {
    console.log("Header is updated");
  }
}
