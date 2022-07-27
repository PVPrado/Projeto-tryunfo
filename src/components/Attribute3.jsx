import React, { Component } from 'react';

class Attribute3 extends Component {
  render() {
    return (
      <label htmlFor="Attr1">
        Terceiro atributo:
        <input id="Attr1" type="number" data-testid="attr3-input" />
      </label>
    );
  }
}

export default Attribute3;
