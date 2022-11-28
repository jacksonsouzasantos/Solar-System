import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name } = this.props;
    const { year } = this.props;
    const { country } = this.props;
    const { destination } = this.props;
    return (
      <div data-testid="mission-card" className="mission-card">
        <div className="mission-name">
          <p data-testid="mission-name">{name}</p>
        </div>
        <div className="mission-data">
          <div className="mission-year">
            <p data-testid="mission-year">{year}</p>
          </div>
          <div className="mission-country">
            <p data-testid="mission-country" className="country-name">{country}</p>
          </div>
          <div className="mission-destination">
            <p data-testid="mission-destination" className="destination-name">
              {destination}
            </p>
          </div>
        </div>

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
