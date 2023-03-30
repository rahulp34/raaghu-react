import React from 'react';
import ReactDOM from 'react-dom';
import RdsCompElements from './RdsCompElements';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RdsCompElements />, div);
  ReactDOM.unmountComponentAtNode(div);
});