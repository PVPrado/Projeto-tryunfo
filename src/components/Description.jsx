import React, { Component } from 'react';

class Description extends Component {
  render() {
    return (
      <label htmlFor="Des">
        Descrição da carta:
        <textarea id="Des" cols="30" rows="10" data-testid="description-input" />
      </label>
    );
  }
}

export default Description;
