import './App.css';
import Navigation from './composants/Navigation/Navigation' ;
import Logo from './composants/Logo/Logo' ;
import SaisieImg from './composants/SaisieImg/SaisieImg'
import Rank from './composants/Rank/Rank'
import Particles from 'react-particles-js';
import { render } from '@testing-library/react';
import { Component } from 'react';
import Clarifai from 'clarifai';
import ReconnaissanceFaciale from './composants/ReconnaissanceFaciale/ReconnaissanceFaciale' ;


const app = new Clarifai.App({
 apiKey: 'd3a7c14617b14d0c9d2b9ddafb2f2082'
});


const particlesOptions = {
                    particles: {
                        number: {
                          value :100 ,
                          density:{
                            enable: true,
                            value_area: 800
                          }
                        }
                    }
                } 
                
class App extends Component {
  constructor() {
    super();
    this.state = {
      input : '',
      imageUrl : '',
    };
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    // console.log('clic boum bam');
    //clarifai//
    this.setState({imageUrl: this.state.input});
    app.models
      .predict(
        // HEADS UP! Sometimes the Clarifai Models can be down or not working as they are constantly getting updated.
        // A good way to check if the model you are using is up, is to check them on the clarifai website. For example,
        // for the Face Detect Mode: https://www.clarifai.com/models/face-detection
        // If that isn't working, then that means you will have to wait until their servers are back up. Another solution
        // is to use a different version of their model that works like: `c0c0ac362b03416da06ab3fa36fb58e3`
        // so you would change from:
        // .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
        // to:
        // .predict('c0c0ac362b03416da06ab3fa36fb58e3', this.state.input)
        Clarifai.FACE_DETECT_MODEL,
        this.state.input)
      .then(response => {
        console.log('hi', response)
        if (response) {
          fetch('http://localhost:3000/image', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
            .then(response => response.json())
            .then(count => {
              this.setState(Object.assign(this.state.user, { entries: count}))
            })
        }
        this.displayFaceBox(this.calculateFaceLocation(response))
      })
      .catch(err => console.log(err));
  }
      //clarifai
  

  render(){
    return (
      <div className="App">
        <Particles className='particles'
        params={particlesOptions}/>
        <Navigation/>
        <Logo/>
        <Rank/>
        <SaisieImg 
        onInputChange={this.onInputChange} 
        onButtonSubmit={this.onButtonSubmit}/>
        <ReconnaissanceFaciale imageUrl={this.state.imageUrl}/> 
      </div>
    );
  }
}

export default App;
