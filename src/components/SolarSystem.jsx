import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <div className="planetas">
          <Title headline="Planetas" />
        </div>

        <div className="allPlanets">
          {planets.map(({ name, image }) => (
            <PlanetCard
              key={ name }
              planetName={ name }
              planetImage={ image }
            />))}
        </div>
      </div>
    );
  }
}
export default SolarSystem;
