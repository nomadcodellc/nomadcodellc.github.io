import React from 'react';

const Image = ({ image, name, description }) => { console.log(name); return (
  <div>
    <div
      style={{
        maxWidth: 200
      }}
    >
      <img src={image} />
    </div>
    <h2>{name}</h2>
    <h5>{description}</h5>
  </div>
)};

export default Image;
