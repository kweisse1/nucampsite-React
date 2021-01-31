import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './DirectoryComponent';
import { CAMPSITES } from '../shared/campsites';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      campsites: CAMPSITES,
      buttonColor: "primary"
    };
  }

  render() {
    return (
      <div>
        <Navbar dark color={this.state.buttonColor}>
          <div className="container">
            <NavbarBrand href="/">NuCamp</NavbarBrand>
          </div>
        </Navbar>
        <Directory campsites={this.state.campsites} />
      </div>
    );
  }
}

export default Main;
