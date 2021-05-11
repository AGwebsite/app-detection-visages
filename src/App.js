import './App.css';
import Navigation from './composants/Navigation/Navigation' ;
import Logo from './composants/Logo/Logo' ;
import SaisieImg from './composants/SaisieImg/SaisieImg'
import Rank from './composants/Rank/Rank'
import Particles from 'react-particles-js';
import { render } from '@testing-library/react';
import { Component } from 'react';

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
    };
  }

  onInputChange = (event) =>{
    console.log(event.target.value)
  }

  onButtonSubmit = () => {
    console.log('clic boum bam')
  }

  render(){
    return (
      <div className="App">
        <Particles className='particles'
        params={particlesOptions}/>
        <Navigation/>
        <Logo/>
        <Rank/>
        <SaisieImg onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        {/* // <ReconnaissanceFaciale/> */} 
      </div>
    );
  }
}

export default App;
