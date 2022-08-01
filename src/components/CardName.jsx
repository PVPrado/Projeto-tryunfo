import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CardName extends Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <label htmlFor="Nome">
        Nome da carta:
        <input
          id="Nome"
          type="text"
          data-testid="name-input"
          value={ value }
          onChange={ onChange }
          name="cardName"
        />
      </label>
    );
  }
}

CardName.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CardName;
