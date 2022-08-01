import React from 'react';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      onChange: '',
      checked: false,
      disabled: false,
    };
  }

  render() {
    const { value, onChange, checked, disabled } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          value={ value }
          onChange={ onChange }
          checked={ checked }
          disabled={ disabled }
        />
      </div>
    );
  }
}

export default App;
