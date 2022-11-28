import React from 'react';
import Header from './components/Header';
import PlanetCard from './components/PlanetCard';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';
import './App.css';

class App extends React.Component {
  render() {
    return (

      <>
        <Header />
        <SolarSystem />
        <PlanetCard />
        <Missions />
      </>

    );
  }
}

export default App;
