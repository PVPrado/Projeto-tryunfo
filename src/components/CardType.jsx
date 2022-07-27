import React, { Component } from 'react';

class CardType extends Component {
  render() {
    return (
      <label htmlFor="tipo">
        Esta carta é de qual tipo:
        <select name="" id="tipo" data-testid="rare-input">
          <option value="normal" selected>normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
      </label>
    );
  }
}

export default CardType;
