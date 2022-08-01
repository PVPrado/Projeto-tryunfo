import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Image extends Component {
  render() {
    const { cardImage, onInputChange } = this.props;
    return (
      <label htmlFor="img">
        Imagem:
        <input
          id="img"
          type="file"
          data-testid="image-input"
          value={ cardImage }
          onChange={ onInputChange }
        />
      </label>
    );
  }
}

Image.propTypes = {
  cardImage: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Image;
