import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
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
    
    return (
      <div>
        <Header />
        <Directory campsites={this.state.campsites} onClick={campsiteId => {return this.onCampsiteSelect(campsiteId)}}/>
        <CampsiteInfo campsite={this.state.campsites.filter(cam => cam.id === this.state.selectedCampsite)[0]}/>
        <Footer/>
      </div>
    );
  }
}


export default Main;