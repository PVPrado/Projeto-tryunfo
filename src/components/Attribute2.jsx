import React, { Component } from 'react';

class Attribute2 extends Component {
  render() {
    return (
      <label htmlFor="Attr1">
        Segundo atributo:
        <input id="Attr1" type="number" data-testid="attr2-input" />
      </label>
    );
  }
}

export default Attribute2;
