import React from 'react';
import ReactDOM from 'react-dom';
import RdsCompProfilePicture from './rds-comp-profile-picture';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RdsCompProfilePicture />, div);
  ReactDOM.unmountComponentAtNode(div);
});