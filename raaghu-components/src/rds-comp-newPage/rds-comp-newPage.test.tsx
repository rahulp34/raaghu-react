import React from 'react';
import ReactDOM from 'react-dom';
import RdsCompNewPage from './RdsCompNewPage';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RdsCompNewPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});