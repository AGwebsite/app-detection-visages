import './App.css';
import Navigation from './composants/Navigation/Navigation' ;
import Logo from './composants/Logo/Logo' ;
import SaisieImg from './composants/SaisieImg/SaisieImg'


function App() {
  return (
    <div className="App">
      <Navigation/>
      <Logo/>
      <SaisieImg/>
      {/* // <ReconnaissanceFaciale/> */} 
    </div>
  );
}

export default App;
