import React from 'react';

const Image = ({ image, name, current, descriptions }) => { console.log(name); return (
  <div>
    <div
      style={{
        maxWidth: 200
      }}
    >
      <img src={image} />
    </div>
    <h2>{name}</h2>
    <h4>{`Currently: ${current}`}</h4>
    {descriptions.map(descr => <h5>{descr}</h5>)}
  </div>
)};

export default Image;
