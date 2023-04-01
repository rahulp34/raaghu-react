import React from 'react';
import ReactDOM from 'react-dom';
import RdsCompChangePassword from './rds-comp-change-password';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RdsCompChangePassword />, div);
  ReactDOM.unmountComponentAtNode(div);
});