import React from 'react'
import {Link} from 'gatsby'

import Layout from '../components/layout'
import Head  from '../components/head'

const AboutPage = () => {
    return (
        <Layout>
            <Head title="About"/>
            <h1>About me</h1> 
        <p> I am a self-taught coder.<Link to='https://github.com/kubulimbu4' >Find me here</Link></p>
        </Layout>
      
    )
}

export default AboutPage