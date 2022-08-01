import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CardType extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="tipo">
        Esta carta é de qual tipo:
        <select
          value={ value }
          onChange={ onChange }
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
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CardType;
