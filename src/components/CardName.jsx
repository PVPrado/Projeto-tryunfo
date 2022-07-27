import React, { Component } from 'react';

class CardName extends Component {
  render() {
    return (
      <label htmlFor="Nome">
        Nome da carta:
        <input id="Name" type="text" data-testid="name-input" />
      </label>
    );
  }
}

export default CardName;
