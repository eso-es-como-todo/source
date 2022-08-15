/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

import "normalize.css";
import "@fontsource/dangrek/400.css";
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Eso es como todo`} />

      <main>{children}</main>

      <footer
        style={{
          marginTop: `var(--space-5)`,
          fontSize: `var(--font-sm)`,
        }}
      >
        &copy; {new Date().getFullYear()} &middot; Eso es como todo
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
