import React, { Component } from "react";

class Form extends Component {
  render() {
    return <div className={"login-comp"}>
      <form>
        <label htmlFor="user">Username</label>
        <input name="user" id="user" type="text"/>

        <label htmlFor="pass">Password</label>
        <input name="pass" id="pass" type="password"/>

        <button type="submit">Login</button>
      </form>
    </div>;
  }
}

export default Form;
