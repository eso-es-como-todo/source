/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Header from "./header"

import "normalize.css";
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
      <div className="page">
        <Header siteTitle={data.site.siteMetadata?.title || `Eso es como todo`} />

        <main>
          {children}
        </main>

        <footer className="footer">
          <nav className="footer__listenUs">
            <h1 className="footer__title">Escuchanos en</h1>
            <ul className="footer__links">
              <li>
                <a href="https://www.ivoox.com/escuchar-eso-es-como-todo_nq_1350840_1.html"
                  rel="me"
                  title="Eso es como todo en iVoox"
                  aria-label="Eso es como todo en iVoox">
                  <StaticImage
                    src="../images/ivoox.png"
                    formats={["auto", "webp", "png"]}
                    alt="Eso es como todo, podcast de humor en iVoox" />
                </a>
              </li>
              <li>
                <a href="https://open.spotify.com/show/7KdIzvC8bKAD4MCo2dlu2O"
                  rel="me"
                  title="Eso es como todo en Spotify"
                  aria-label="Eso es como todo en Spotify">
                  <StaticImage
                    src="../images/spotify.png"
                    formats={["auto", "webp", "png"]}
                    alt="Eso es como todo, podcast de entretenimiento en Spotify" />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UCvL-YC95Oh7Gu-WrOynq3zA"
                  rel="me"
                  title="Eso es como todo en YouTube"
                  aria-label="Eso es como todo en YouTube">
                  <StaticImage
                    src="../images/youtube.png"
                    formats={["auto", "webp", "png"]}
                    alt="Eso es como todo, podcast para reír en YouTube" />
                </a>
              </li>
            </ul>
          </nav>

          <div className="footer__twitter">
            <a href="https://twitter.com/EsoEsComoToders"
              rel="me"
              title="Twitter de Eso es como todo"
              aria-label="Twitter de Eso es como todo">
              <span className="footer__twitterName">EsoEsComoToders</span>
            </a>
          </div>
        </footer>
      </div>
      <p className="footer__copyright">
        &copy; {new Date().getFullYear()} &middot; Eso es como todo
      </p>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
