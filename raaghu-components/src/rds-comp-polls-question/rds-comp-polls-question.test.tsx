import React from 'react';
import ReactDOM from 'react-dom';
import RdsCompPollsQuestion from './RdsCompPollsQuestion';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RdsCompPollsQuestion />, div);
  ReactDOM.unmountComponentAtNode(div);
});