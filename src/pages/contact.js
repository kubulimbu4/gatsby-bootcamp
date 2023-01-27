import React from 'react'

import Layout from '../components/layout'
import Head  from '../components/head'

const ContactPage = ( )=> {
    return (
        <Layout>
            <Head title='Contact' />
            <h1> Contact me</h1>
            <p>email: kubuhang2@gmail.com</p>
            <p>Find my twitter at <a href='https://twitter.com/KubuLimbu' target="blank"> KubuLimbu</a></p>
        </Layout>
    )
}

export default ContactPage