import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BtnSubmit extends Component {
  render() {
    const { disabled, onClick } = this.props;
    return (
      <button
        type="submit"
        disabled={ disabled }
        onClick={ onClick }
        data-testid="save-button"
      >
        Salvar
      </button>
    );
  }
}

BtnSubmit.propTypes = {
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default BtnSubmit;
