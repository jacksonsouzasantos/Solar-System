import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name } = this.props;
    const { year } = this.props;
    const { country } = this.props;
    const { destination } = this.props;
    return (
      <div data-testid="mission-card" className="missionsCard">

        <p data-testid="mission-name" className="nameMission">{name}</p>

        <p data-testid="mission-year" className="yearMission">{year}</p>

        <p data-testid="mission-country" className="country">{country}</p>

        <p data-testid="mission-destination" className="destination">
          {destination}
        </p>

      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
