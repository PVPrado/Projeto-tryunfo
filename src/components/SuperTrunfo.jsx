import React, { Component } from 'react';

class SuperTrunfo extends Component {
  render() {
    return (
      <label htmlFor="ST">
        Esta carta é Super Trunfo:
        <input id="ST" type="checkbox" data-testid="trunfo-input" />
      </label>
    );
  }
}

export default SuperTrunfo;
