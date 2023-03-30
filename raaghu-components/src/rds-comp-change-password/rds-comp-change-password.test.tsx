import React from 'react';
import ReactDOM from 'react-dom';
import RdsCompChangePassword from './RdsCompChangePassword';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RdsCompChangePassword />, div);
  ReactDOM.unmountComponentAtNode(div);
});