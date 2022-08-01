import React from 'react';
import PropTypes from 'prop-types';
import CardName from './CardName';
import Description from './Description';
import Attribute1 from './Attribute1';
import Attribute2 from './Attribute2';
import Attribute3 from './Attribute3';
import Image from './Image';
import CardType from './CardType';
import SuperTrunfo from './SuperTrunfo';
import BtnSubmit from './BtnSubmit';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form>
        <div>
          <CardName value={ cardName } onChange={ onInputChange } />
        </div>
        <div>
          <Description value={ cardDescription } onChange={ onInputChange } />
        </div>
        <div>
          <Attribute1 value={ cardAttr1 } onChange={ onInputChange } />
        </div>
        <div>
          <Attribute2 value={ cardAttr2 } onChange={ onInputChange } />
        </div>
        <div>
          <Attribute3 value={ cardAttr3 } onChange={ onInputChange } />
        </div>
        <div>
          <Image value={ cardImage } onChange={ onInputChange } />
        </div>
        <div>
          <CardType value={ cardRare } onChange={ onInputChange } />
        </div>
        <div>
          <SuperTrunfo checked={ cardTrunfo } onChange={ onInputChange } />
        </div>
        <div>
          <BtnSubmit disabled={ isSaveButtonDisabled } onClick={ onSaveButtonClick } />
        </div>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
