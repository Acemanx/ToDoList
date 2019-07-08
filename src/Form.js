import React from "react";
import { withRouter } from "react-router-dom";

class Login extends React.Component {
  validateUser() {
    let user = document.getElementsByClassName("user")[0].value;
    let pass = document.getElementsByClassName("user")[1].value;

    if (user === "test" && pass === "test123") {
      let path = `/todo`;
      this.props.history.push(path);
    } else {
      alert("error");
    }
  }

  render() {
    return (
      <div className="App">
        <form className="LoginForm" onSubmit={this.validateUser.bind(this)}>
          <h3>To-Do Login</h3>
          <input type="text" placeholder="User" className="user" />
          <input type="password" placeholder="Password" className="user" />
          <button type="submit"> Log In</button>
        </form>
      </div>
    );
  }
}
export default withRouter(Login);
