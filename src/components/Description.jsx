import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Description extends Component {
  render() {
    const { cardDescription, onInputChange } = this.props;
    return (
      <label htmlFor="Description">
        Descrição da carta:
        <textarea
          value={ cardDescription }
          id="Description"
          cols="30"
          rows="10"
          data-testid="description-input"
          onInput={ onInputChange }
          name="cardDescription"
        />
      </label>
    );
  }
}

Description.propTypes = {
  cardDescription: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Description;
