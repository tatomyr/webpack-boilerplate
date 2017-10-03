import React from 'react';

import './style.scss';

export default props => (
  <div>
    <h1>Hello Server</h1>
    <div>{props.text}</div>
  </div>
);
