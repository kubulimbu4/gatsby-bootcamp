import React from 'react'
import {Link} from 'gatsby'

import Layout from '../components/layout'
import Head  from '../components/head'

const IndexPage = () => {
  return (
    <Layout>
        <Head title="Home" />
        <h1>Hello </h1>
        <h2>I am Kubu, a front-end developer living in sunny Colchester.</h2>
        <p>Who am I?<Link to='/about'>About me</Link></p>
        <p> Recent adventures <Link to='/blog'>Blog</Link></p>

        <p>Need a developer? <Link to='/contact'>Contact me</Link></p>
    </Layout>
  )
}

export default IndexPage