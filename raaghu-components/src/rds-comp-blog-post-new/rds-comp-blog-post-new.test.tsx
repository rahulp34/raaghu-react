import React from 'react';
import ReactDOM from 'react-dom';
import RdsCompBlogPostNew from './rds-comp-blog-post-new';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RdsCompBlogPostNew onSubmit={undefined} />, div);
  ReactDOM.unmountComponentAtNode(div);
});