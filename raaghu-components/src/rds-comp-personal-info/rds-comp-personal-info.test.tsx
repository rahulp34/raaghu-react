import React from 'react';
import ReactDOM from 'react-dom';
import RdsCompPersonalInfo from './RdsCompPersonalInfo';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RdsCompPersonalInfo />, div);
  ReactDOM.unmountComponentAtNode(div);
});