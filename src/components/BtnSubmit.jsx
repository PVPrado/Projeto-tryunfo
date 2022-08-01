import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BtnSubmit extends Component {
  render() {
    const { isSaveButtonDisabled, onSaveButtonClick } = this.props;
    return (
      <input
        type="submit"
        value="Salvar"
        data-testid="save-button"
        disabled={ isSaveButtonDisabled }
        onClick={ onSaveButtonClick }
      />
    );
  }
}

BtnSubmit.propTypes = {
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default BtnSubmit;
