import React from 'react';
import Proptypes from 'prop-types';
import Typewriter from 'typewriter-effect';

class Header extends React.Component {
  render() {
    const { header } = this.props;

    return (

      <header className="textHeader">
        <Typewriter
          options={ {
            strings: ['Sistema Solar'],
            autoStart: true,
            loop: true,
          } }
        />
        <h1>
          {' '}
          {header}
          Sistema Solar
          {' '}
        </h1>

      </header>
    );
  }
}

Header.propTypes = {
  header: Proptypes.string.isRequired,
};

export default Header;
