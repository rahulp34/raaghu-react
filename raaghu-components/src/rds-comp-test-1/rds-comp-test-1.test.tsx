import React from 'react';
import ReactDOM from 'react-dom';
import RdsCompTest1 from './RdsCompTest1';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RdsCompTest1 />, div);
  ReactDOM.unmountComponentAtNode(div);
});