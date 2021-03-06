import React from 'react';
import ReactDOM from 'react-dom';
import SevenSegmentDisplay from './../src';

const root = document.createElement('root');
document.body.appendChild(root);

function Digits() {
  const arr = [];

  for (let i = 0; i <= 9; i += 1) {
    arr.push(<SevenSegmentDisplay style={{ marginRight: '5px' }} value={i} key={i} width={40} height={10} />);
  }

  return arr;
}

ReactDOM.render(<Digits />, root);
