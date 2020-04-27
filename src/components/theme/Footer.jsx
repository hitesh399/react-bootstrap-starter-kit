import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
export class FooterComponent extends React.PureComponent {
  render() {
    return (
      <footer className="footer">
        <Navbar bg="default" variant="light">
          <Nav className="m-auto">
            <Nav.Item>
              Copyright © 2020, Demo Theme. All Rights Reserved.
            </Nav.Item>
          </Nav>
        </Navbar>
      </footer>
    );
  }
}
