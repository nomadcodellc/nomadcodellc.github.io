import React from 'react'
import Link from 'gatsby-link'
import Image from '../components/Image';
import { brendan, tom } from '../images';

const IndexPage = () => (
  <div>
    {[brendan, tom].map(source => <Image source={source} />)}
    <div>
      <Link to="/page-2/">Go to page 2</Link>
    </div>
  </div>
)

export default IndexPage
