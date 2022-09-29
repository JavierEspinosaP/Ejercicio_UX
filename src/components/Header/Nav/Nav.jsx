import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return <div className="nav-bar">
      <Link className="nav-link" to='/'>Login</Link>
      <Link className="nav-link" to='/form'>Formulario</Link>
    </div>;
  }
}

export default Nav;
