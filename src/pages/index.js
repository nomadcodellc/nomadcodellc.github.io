import React from 'react'
import Link from 'gatsby-link'
import Nomad from '../components/Nomad';
import { brendan, tom } from '../images';

const nomadBio = [
  "We specialize in software & yoga",
  "We look for short-term contracts (2-8 weeks)",
  "We value lifestyle & experience over a paycheck",
  "We operate with transparent schedules"
];
const brendanBio = [
  "A nomadic yogi who codes", 
  "iOS/Android/Web Applications with React & Node", 
  "Ashtanga Vinyasa & Yin Yoga",
  "Previously: Co-Founder & VP of Engineering at Brainbuild.io",
  "Previously: Yoga Instructor at El Zopilote",
];
const tomBio = [
  "Travel the world on a shoestring budget",
  "Web Development/Design with HTML/CSS/JS",
  "Ashtanga Vinyasa & Yin Yoga",
  "Previously: Yoga Instructor at El Zopilote",
];

const nomads = {
  brendan: {
    current: "Available",
    descriptions: brendanBio,
    image: brendan,
    link: "https://brendobrien.github.io/",
    name: "Brendan O'Brien",
  },
  tom: {
    current: "Available",
    descriptions: tomBio,
    image: tom,
    name: "Tom Mayell",
  }
}

const IndexPage = () => (
  <div>
    <h1>Working while Traveling</h1>
    <h2>Consulting Firm of Nomads</h2>
    {nomadBio.map(code => <h5>{code}</h5>)}
    <br />
    <h1>Nomads</h1>
    {Object.values(nomads).map((obj, i, a) => (
      <div>
        <Nomad {...obj} />
        <br />
      </div>
    ))}
    <br />
    <h1>Contact</h1>
    <h2 style={{
        color: '#03A9F4',
        textDecoration: 'underline',
      }}>nomadcodellc@gmail.com</h2>
  </div>
)

export default IndexPage
