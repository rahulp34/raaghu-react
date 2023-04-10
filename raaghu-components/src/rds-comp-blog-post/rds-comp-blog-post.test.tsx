import React from 'react';
import ReactDOM from 'react-dom';
import RdsCompBlogPost from './RdsCompBlogPost';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RdsCompBlogPost />, div);
  ReactDOM.unmountComponentAtNode(div);
});