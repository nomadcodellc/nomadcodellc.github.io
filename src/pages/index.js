import React from 'react'
import Link from 'gatsby-link'
import Image from '../components/Image';
import { brendan, tom } from '../images';

const nomads = {
  brendan: {
    image: brendan,
    name: "Brendan O'Brien",
    description: "Yoga Instructor at El Zopilote"
  },
  tom: {
    image: tom,
    name: "Tom Mayell",
    description: "Yoga Instructor at El Zopilote"
  }
}

const IndexPage = () => (
  <div>
    <h1>Nomads</h1>
    {Object.values(nomads).map(obj => (
      <Image {...obj} />
    ))}
    <div>
      <Link to="/page-2/">Go to page 2</Link>
    </div>
  </div>
)

export default IndexPage
