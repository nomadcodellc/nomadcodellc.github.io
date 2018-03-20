import React from 'react';

const Image = ({ source }) => (
  <div
    style={{
      maxWidth: 200
    }}
  >
    <img src={source} />
  </div>
);

export default Image;
