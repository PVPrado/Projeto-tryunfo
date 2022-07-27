import React, { Component } from 'react';

class Image extends Component {
  render() {
    return (
      <label htmlFor="img">
        Imagem:
        <input id="img" type="file" data-testid="image-input" />
      </label>
    );
  }
}

export default Image;
