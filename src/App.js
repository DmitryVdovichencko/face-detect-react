import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';
import 'tachyons';
import Clarifai from 'clarifai';
const particlesOptions={
  particles: {
    number:{
      value: 80,
      density:{
        enable: true,
        value_area: 800
      }
      }
  }
}

const app = new Clarifai.App({
 apiKey: '1b8b2c0ed8a94912ad3fd3092a1357e0'
});

class App extends Component {
  constructor(){
    super();
    this.state = {
      input:'',
    }
  }
  onInputChange = (event) =>{
    console.log(event.target.value);
  }
  onButtonSubmit = () => {
    console.log('click');
    app.models.predict("a403429f2ddf4b49b307e318f00e528b", "https://clarifai.com/cms-assets/20180320221617/face-004.jpg").then(
      function(response) {
        console.log(response);
      },
      function(err) {
        // there was an error
      }
    );
  }
  render() {
    return (
   
      <div className="App">
         <Particles className='particles'
              params={particlesOptions}
              
            />
   
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm 
        onInputChange={this.onInputChange} 
        onButtonSubmit={this.onButtonSubmit}
        />
        
        {/* 
         <FaceRecognition />*/}
      </div>
    );
  }
}

export default App;
