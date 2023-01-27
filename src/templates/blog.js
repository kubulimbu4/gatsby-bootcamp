import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout'


import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Head  from '../components/head'


export const query = graphql`
    query($slug: String!) {
        contentfulBlogPost(slug: {eq: $slug}){
            title
            publishedDate
            body {
                raw
            }
        }
    }
`

const Blog = (props) =>{
    const options = {
        renderNode: {
            "embedded-asset-block": (node) => {
                const alt = node.body.raw.references['filename']
                const url = node.body.raw.references['srcSet'].url
                return <img alt={alt} src={url} /> 
            }
        }
    }
    return (
        <Layout>
            <Head title={props.data.contentfulBlogPost.title}/>
            <h1> {props.data.contentfulBlogPost.title}</h1>
            <p> {props.data.contentfulBlogPost.publishedDate}</p>
            {documentToReactComponents(JSON.parse(props.data.contentfulBlogPost.body.raw, options))}
        </Layout>
    )
}
    
export default Blog