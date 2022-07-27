import React, { Component } from 'react';

class Attribute1 extends Component {
  render() {
    return (
      <label htmlFor="Attr1">
        Primeiro atributo:
        <input id="Attr1" type="number" data-testid="attr1-input" />
      </label>
    );
  }
}

export default Attribute1;
