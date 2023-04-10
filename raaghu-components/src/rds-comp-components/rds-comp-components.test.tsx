import React from 'react';
import ReactDOM from 'react-dom';
import RdsCompComponents from './rds-comp-components';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RdsCompComponents />, div);
  ReactDOM.unmountComponentAtNode(div);
});