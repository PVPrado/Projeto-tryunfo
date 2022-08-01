import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CardName extends Component {
  render() {
    const { cardName, onInputChange } = this.props;

    return (
      <label htmlFor="Nome">
        Nome da carta:
        <input
          id="Name"
          type="text"
          data-testid="name-input"
          value={ cardName }
          onChange={ onInputChange }
          name="cardName"
        />
      </label>
    );
  }
}

CardName.propTypes = {
  cardName: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default CardName;
