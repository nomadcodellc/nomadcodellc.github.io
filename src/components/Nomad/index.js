import React from 'react';

const Image = ({ current, descriptions, link="", image, name }) => (
  <div>
    <div
      style={{
        maxWidth: 200
      }}
    >
      {link ? 
        <a href={link} target="blank"><img src={image} /></a>
        : <img src={image} /> 
      }
    </div>
      {link ? 
        <a href={link} target="blank" style={{color: '#03A9F4'}}>
          <h2>{name}</h2>
        </a>
        : <h2 style={{
            color: '#03A9F4',
            textDecoration: 'underline',
          }}>{name}</h2>
      }
    <h4>{`Currently: ${current}`}</h4>
    {descriptions.map(descr => <h5>{descr}</h5>)}
  </div>
);

export default Image;
