import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CardType extends Component {
  render() {
    const { cardRare, onInputChange } = this.props;
    return (
      <label htmlFor="tipo">
        Esta carta é de qual tipo:
        <select
          value={ cardRare }
          onChange={ onInputChange }
          id="tipo"
          data-testid="rare-input"
          name="rarity"
        >
          <option value="normal" selected>normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
      </label>
    );
  }
}

CardType.propTypes = {
  cardRare: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default CardType;
