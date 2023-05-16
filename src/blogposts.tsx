import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const BlogPosts = () => {
    const data = useStaticQuery(graphql`
    query {
      allContentfulPost(sort: {createdAt: ASC}) {
        nodes {
          blogImage {
            file {
              fileName
              url
            }
            filename
            gatsbyImageData(cornerRadius: 5)
            title
          }
        }
      }
    }
  `)
    return <pre>{JSON.stringify(data, null, 4)}</pre>
}

export default BlogPosts
