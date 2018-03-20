import React from 'react'
import Link from 'gatsby-link'
import Image from '../components/Image';
import { brendan, tom } from '../images';

const nomadBio = [
  "We work while we travel",
  "We specialize in software & yoga",
  "We value lifestyle & experience over a paycheck",
  "We look for contracts that allow us maintain our freedom",
];
const brendanBio = [
  "A nomadic yogi whos codes", 
  "iOS/Android/Web Applications with React & Node", 
  "Ashtanga Vinyasa & Yin Yoga",
];
const tomBio = [
  "Travel the world on a shoestring budget",
  "Always looking for adventure.",
  "Ashtanga Vinyasa & Yin Yoga",
];

const nomads = {
  brendan: {
    image: brendan,
    name: "Brendan O'Brien",
    current: "Yoga Instructor at El Zopilote",
    descriptions: brendanBio,
  },
  tom: {
    image: tom,
    name: "Tom Mayell",
    current: "Yoga Instructor at El Zopilote",
    descriptions: tomBio,
  }
}

const IndexPage = () => (
  <div>
    <h1>Coders & Yogis Who Travel</h1>
    <h2>Consulting Firm of Nomads</h2>
    {nomadBio.map(code => <h5>{code}</h5>)}
    <h1>Nomads</h1>
    {Object.values(nomads).map((obj, i, a) => (
      <div>
        <Image {...obj} />
        {(i + 1 < a.length) ? <br /> : null}
      </div>
    ))}
  </div>
)

export default IndexPage
