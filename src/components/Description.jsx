import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Description extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="Description">
        Descrição da carta:
        <textarea
          value={ value }
          id="Description"
          cols="30"
          rows="10"
          data-testid="description-input"
          onInput={ onChange }
          name="cardDescription"
        />
      </label>
    );
  }
}

Description.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Description;
