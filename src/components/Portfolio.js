import React from "react"
import { graphql, useStaticQuery } from "gatsby"

// import Projectslist from "./Projectslist"

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            category
            title
            slug
            image {
              childImageSharp {
                gatsbyImageData(placeholder: TRACED_SVG)
              }
            }
          }
          id
        }
      }
    }
  `)
  const {
    allMdx: { nodes: projects },
  } = data

  return (
    <div className="section dark">
      <h1 id="portfolio">Moje strony</h1>
      {/* <Projectslist projects={projects} /> */}
    </div>
  )
}

export default Portfolio
