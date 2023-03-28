import React from 'react';
import ReactDOM from 'react-dom';
import RdsCompProfilePicture from './RdsCompProfilePicture';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RdsCompProfilePicture />, div);
  ReactDOM.unmountComponentAtNode(div);
});