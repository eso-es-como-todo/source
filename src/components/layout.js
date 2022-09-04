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
import { OutboundLink } from "gatsby-plugin-google-gtag"

import Header from "./header"

import "normalize.css";
import "../assets/styles/layout.css";

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
            <h1 className="footer__title">Escúchanos en</h1>
            <ul className="footer__links">
              <li>
                <OutboundLink
                  href="https://www.ivoox.com/podcast-eso-es-como-todo_sq_f11622856_1.html?utm_source=site&utm_medium=web&utm_content=footer"
                  rel="me"
                  title="Eso es como todo en iVoox"
                  aria-label="Eso es como todo en iVoox">
                  <StaticImage
                    src="../assets/images/ivoox.png"
                    formats={["auto", "webp", "png"]}
                    alt="Eso es como todo, podcast de humor en iVoox" />
                </OutboundLink>
              </li>
              <li>
                <OutboundLink
                  href="https://open.spotify.com/show/7KdIzvC8bKAD4MCo2dlu2O?utm_source=site&utm_medium=web&utm_content=footer"
                  rel="me"
                  title="Eso es como todo en Spotify"
                  aria-label="Eso es como todo en Spotify">
                  <StaticImage
                    src="../assets/images/spotify.png"
                    formats={["auto", "webp", "png"]}
                    alt="Eso es como todo, podcast de entretenimiento en Spotify" />
                </OutboundLink>
              </li>
              <li>
                <OutboundLink
                  href="https://www.youtube.com/channel/UCvL-YC95Oh7Gu-WrOynq3zA?utm_source=site&utm_medium=web&utm_content=footer"
                  rel="me"
                  title="Eso es como todo en YouTube"
                  aria-label="Eso es como todo en YouTube">
                  <StaticImage
                    src="../assets/images/youtube.png"
                    formats={["auto", "webp", "png"]}
                    alt="Eso es como todo, podcast para reír en YouTube" />
                </OutboundLink>
              </li>
            </ul>
          </nav>

          <div className="footer__twitter">
            <OutboundLink
              href="https://twitter.com/EsoEsComoToders?utm_source=site&utm_medium=web&utm_content=footer"
              rel="me"
              title="Twitter de Eso es como todo"
              aria-label="Twitter de Eso es como todo">
              <span className="footer__twitterName">EsoEsComoToders</span>
            </OutboundLink>
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
