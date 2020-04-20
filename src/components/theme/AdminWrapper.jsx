import React from "react";
import history from "../../history";

export default class AdminThemeWrapper extends React.Component {
  componentDidMount() {
    if (!this.isUserLogin()) {
      this.IfUnauthenticateUser();
    }
  }
  
  isUserLogin() {
    return true;
  }
  IfUnauthenticateUser() {
    history.push("/");
  }
  componentDidUpdate() {
    if (!this.isUserLogin()) {
      this.IfUnauthenticateUser();
    }
  }
  render() {
    return this.props.children;
  }
}
