import React from 'react';
import Proptypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { header } = this.props;

    return (
      <header>
        <h1>
          {header}
          Sistema Solar
        </h1>
      </header>
    );
  }
}

Header.propTypes = {
  header: Proptypes.string.isRequired,
};

export default Header;
