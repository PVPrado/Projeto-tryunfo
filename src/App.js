import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      // hasTrunfo: false,
      // onSaveButtonClick:
    };
  }

  selectComp = ({ target }) => {
    const { name, type, checked } = target;
    const value = type === 'checkbox' ? checked : target.value;
    this.setState({
      [name]: value,
    }, () => {
      this.verificacaoDoBotao();
    });
  }

  verificacaoDoBotao = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;

    const validacao = cardName.length > 0
     && cardDescription.length > 0 && cardImage.length > 0 && cardRare.length > 0;

    const sum = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);

    const numberMax = 210;
    const validacaoSoma = sum <= numberMax;

    const numberMaxInd = 90;
    const validacaoAttr = Number(cardAttr1) <= numberMaxInd
    && Number(cardAttr2) <= numberMaxInd && Number(cardAttr3) <= numberMaxInd;

    const zero = 0;
    const validacaoAttrNeg = Number(cardAttr1) >= zero
    && Number(cardAttr2) >= zero && Number(cardAttr3) >= zero;

    const validacaoFinal = validacao
    && validacaoSoma && validacaoAttr && validacaoAttrNeg;

    this.setState({
      isSaveButtonDisabled: !validacaoFinal,
    });
  }

  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          onInputChange={ this.selectComp }
          isSaveButtonDisabled={ isSaveButtonDisabled }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
