import React from "react";
import { Button, Nav, Navbar } from 'react-bootstrap'
import { connect } from "react-redux";
// import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
import { changeSidebarStatus } from "../../actions/sidebar.action";
export class Header extends React.PureComponent {
  static propTypes = {
    sidebarStatus: PropTypes.oneOf(['open', 'close', 'mini'])
  }

  toggleSidebar(e) {
    e.stopPropagation()
    this.props.dispatch(changeSidebarStatus(this.props.sidebarStatus === 'open' ? 'close' : 'open'))
  }
  render() {
    console.log("Render func call in header");
    return (
      <Navbar bg="primary" variant="dark" className="main-nav">
        <Button type="button" onClick={(e) => this.toggleSidebar(e)}>
          <span className="oi oi-menu" title="menu" aria-hidden="true"></span>
        </Button>
        <Navbar.Brand href="#home">React Bootstrap Starter Kit</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
  componentDidMount() {
    console.log("Header is mounted", this.props);
  }
  componentDidUpdate() {
    console.log("Header is updated");
  }
}
export const HeaderComponent = connect(function (state) {
  return {
    sidebarStatus: state.sidebar.status
  }
})(Header)
