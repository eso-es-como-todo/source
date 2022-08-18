import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Inicio" />

    <div className="main__disclaimer">
      <p>En septiembre se vienen cositas</p>
      <iframe style={{ borderRadius:"12" }}
        src="https://open.spotify.com/embed/show/7KdIzvC8bKAD4MCo2dlu2O?utm_source=generator&theme=0"
        width="100%"
        height="152"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Inicio" />

export default IndexPage
