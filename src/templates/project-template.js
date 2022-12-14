import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import VisitWebsiteIcon from "../images/icons/portfolio4.svg"

const projecttemplate = ({ data, children }) => {
  //single post info:
  const {
    frontmatter: { title },
  } = data.mdx

  return <Layout>{title}</Layout>
}
export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`
export default projecttemplate

// import React from "react"
// import { graphql } from "gatsby"
// import { MDXProvider } from "@mdx-js/react"
// import { Link } from "gatsby"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"

// import Layout from "../components/Layout"
// import VisitWebsiteIcon from "../images/icons/portfolio4.svg"
// // import Projectslist from "../components/Projectslist"

// const shortcodes = { Link }

// const PageTemplate = ({ data, children }) => {
//   //single post info:
//   const {
//     frontmatter: { title, tags, link, image },
//   } = data.mdx
//   //for Projectslist component:
//   const { nodes: projectslist } = data.allMdx

//   return (
//     <Layout>
//       <div className="project-page">
//         <div className="img-wrapper">
//           <a href={link} className="site-link" target="_blank">
//             <GatsbyImage
//               image={getImage(image)}
//               className="main-img"
//               alt={title}
//             />
//           </a>
//         </div>
//         <h1>{title}</h1>
//         <div className="project-info">
//           <div className="description">
//             <MDXProvider components={shortcodes}>{children}</MDXProvider>
//           </div>
//           <div className="details">
//             <a href={link} className="site-link" target="_blank">
//               <VisitWebsiteIcon className="icon" />
//               <span>Zobacz stron??</span>
//             </a>
//             <div>
//               <h3>Technologie: </h3>
//               <div className="tags">
//                 {tags.map(tag => {
//                   return <span className="tag">{tag}</span>
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>
//         <h2>Inne projekty</h2>
//         {/* <Projectslist projects={projectslist} /> */}
//       </div>
//     </Layout>
//   )
// }

// export const query = graphql`
//   query ($id: String!) {
//     mdx(id: { eq: $id }) {
//       frontmatter {
//         title
//         category
//         tags
//         link
//         image {
//           childImageSharp {
//             gatsbyImageData(placeholder: TRACED_SVG)
//           }
//         }
//       }
//     }
//     allMdx {
//       nodes {
//         frontmatter {
//           category
//           title
//           slug
//           image {
//             childImageSharp {
//               gatsbyImageData(placeholder: TRACED_SVG)
//             }
//           }
//         }
//       }
//     }
//   }
// `

// export default PageTemplate
