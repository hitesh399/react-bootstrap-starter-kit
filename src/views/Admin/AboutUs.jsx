import React from "react";

export default class AboutUs extends React.Component {
  render() {
    return "About Us Page";
  }
  componentDidMount() {
    console.log("About us mounted", this.props);
  }
}
