import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div>
      <img src={require('../images/linkedin.jpg')} />
    </div>
    <div>
      <Link to="/page-2/">Go to page 2</Link>
    </div>
  </div>
)

export default IndexPage
