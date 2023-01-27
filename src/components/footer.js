import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

import * as footerStyles from "./footer.module.scss"

const Footer = () => {
    const data = useStaticQuery(graphql`
        query{
            site{
                siteMetadata{
                    author
                }
            }
        }
    `)
    return (
       <footer className={footerStyles.footer}>
            <p>Created by Kubu Limbu, inspired by {data.site.siteMetadata.author}, ©2022</p> 
       </footer>
    )
}

export default Footer