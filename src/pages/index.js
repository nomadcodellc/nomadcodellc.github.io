import React from 'react'
import Link from 'gatsby-link'
import Nomad from '../components/Nomad';
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
    current: "Yoga Instructor at El Zopilote",
    descriptions: brendanBio,
    image: brendan,
    link: "https://brendobrien.github.io/",
    name: "Brendan O'Brien",
  },
  tom: {
    current: "Yoga Instructor at El Zopilote",
    descriptions: tomBio,
    image: tom,
    link: "https://hitchhikeadelic.com",
    name: "Tom Mayell",
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
        <Nomad {...obj} />
        {(i + 1 < a.length) ? <br /> : null}
      </div>
    ))}
    <h1>Contact</h1>
    <h2>nomadcodellc@gmail.com</h2>
  </div>
)

export default IndexPage
