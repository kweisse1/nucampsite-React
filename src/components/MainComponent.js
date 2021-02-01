import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import { CAMPSITES } from '../shared/campsites';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      campsites: CAMPSITES,
      buttonColor: "primary",
      selectedCampsite: null
    };
  }

  onCampsiteSelect(campId) {
    this.setState({selectedCampsite: campId});
  }

  render() {
    let info = null;

    //the rest is left as an exercise to the reader
    if (this.state.selectedCampsite !== null){
         info = <CampsiteInfo campsite={this.state.campsites.filter(campsite => campsite.id === this.state.selectedCampsite)[0]}/>
    }

    return (
      <div>
        <Navbar dark color={this.state.buttonColor}>
          <div className="container">
            <NavbarBrand href="/">NuCamp</NavbarBrand>  
          </div>    
        </Navbar>
        <Directory campsites={this.state.campsites} onClick={campsiteId => {return this.onCampsiteSelect(campsiteId)}}/>
        {info}
      </div>
    );
  }
}


export default Main;