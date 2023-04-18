import React from 'react';
import ReactDOM from 'react-dom';
import RdsCompPages from './RdsCompPages';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RdsCompPages />, div);
  ReactDOM.unmountComponentAtNode(div);
});