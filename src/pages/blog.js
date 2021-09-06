import React, { useState } from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Blogcard from "../components/blogcard"
import Line from "../images/line.svg"

const BlogIndex = ({ data, location }) => {
  const allPosts = data.allMarkdownRemark.nodes
  const postsToDisplay = 6
  const [posts, setPosts] = useState(allPosts)

  if (posts.length === 0) {
    return (
      <Layout>
        <Seo title="All posts" />
        <Bio />
        <p>No blog posts found</p>
      </Layout>
    )
  }

  return (
    <Layout>
      <Seo title="All posts" />
      <div className="App">
        <div className="">
          <div className="blog layout">
            <div className="left">
              <p className="sticky-header">latest blogs</p>
              <div className="sticky">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus sit amet faucibus nisi. Ut a pharetra urna. Nulla
                  facilisi. Nunc ac mi tempor, maximus dolor venenatis, rhoncus
                  nisi. Donec egestas viverra quam, non auctor 
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus sit amet faucibus nisi. Ut a pharetra urna. Nulla
                  facilisi. Nunc ac mi tempor,
                </p>
              </div>
              <div className='sticky-line'>
              <img src={Line} className='sticky-img'/>xxx
              </div>
            </div>
            <ol className="blog-grid list">
              {posts.map(post => (
                <Blogcard post={post} />
              ))}
            </ol>
            {/* <ol style={{ listStyle: `none` }}>
                 {posts.map(post => {
                     const title = post.frontmatter.title || post.fields.slug
 @@ -54,7 +57,7 @@ function Blog({ data, location }) {
                         </li>
                     )
                 })}
             </ol> */}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          featuredimage
        }
      }
    }
  }
`
