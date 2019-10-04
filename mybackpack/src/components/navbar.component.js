import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          My Backpack
        </Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/list" className="nav-link">
                Items
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">
                Backpacks
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/user" className="nav-link">
                Create Item
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
