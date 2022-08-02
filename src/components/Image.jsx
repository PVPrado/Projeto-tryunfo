import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Image extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <input
        id="img"
        type="text"
        data-testid="image-input"
        value={ value }
        onChange={ onChange }
        name="cardImage"
      />
    );
  }
}

Image.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Image;
