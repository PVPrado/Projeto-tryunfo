import React from 'react';
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
    return (
      <form>
        <div>
          <CardName />
        </div>
        <div>
          <Description />
        </div>
        <div>
          <Attribute1 />
        </div>
        <div>
          <Attribute2 />
        </div>
        <div>
          <Attribute3 />
        </div>
        <div>
          <Image />
        </div>
        <div>
          <CardType />
        </div>
        <div>
          <SuperTrunfo />
        </div>
        <div>
          <BtnSubmit />
        </div>
      </form>
    );
  }
}

export default Form;
