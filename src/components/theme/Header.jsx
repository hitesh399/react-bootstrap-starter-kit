import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeSidebarStatus } from '../../actions/sidebar.action';
export class Header extends React.PureComponent {
  static propTypes = {
    sidebarStatus: PropTypes.oneOf(['open', 'close', 'mini']),
  };

  toggleSidebar(e) {
    e.stopPropagation();
    this.props.dispatch(
      changeSidebarStatus(
        this.props.sidebarStatus === 'open' ? 'close' : 'open'
      )
    );
  }
  render() {
    return (
      <header>
        <Navbar bg="default" variant="light" className="main-nav">
          <Button type="button" onClick={(e) => this.toggleSidebar(e)}>
            <span className="oi oi-menu" title="menu" aria-hidden="true"></span>
          </Button>
          <Navbar.Brand href="#home">
            &nbsp; React Bootstrap Starter Kit
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Navbar>
      </header>
    );
  }
  componentDidMount() {
    console.log('Header is mounted', this.props);
  }
  componentDidUpdate() {
    console.log('Header is updated');
  }
}
export const HeaderComponent = connect(function (state) {
  return {
    sidebarStatus: state.sidebar.status,
  };
})(Header);
