import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Inicio"
      keywords="podcast humor spotify,podcast de humor spotify,podcast spotify humor,podcast ivoox humor,podcast de humor ivoox,podcast humor ivoox,mejores podcast spotify humor,podcast entretenimiento,podcast de entretenimiento,podcast de humor 2022,podcast humor 2022,mejores podcast comedia,podcast para reir,podcast amazon humor,podcast humor amazon,podcast humor youtube, podcast entretenimiento youtube,podcast youtube humor" />

    <div className="main__disclaimer">
      <iframe style={{ borderRadius:"12" }}
        title="Promoción de Eso es como todo en Spotify"
        src="https://open.spotify.com/embed/show/7KdIzvC8bKAD4MCo2dlu2O?utm_source=generator&theme=0"
        width="100%"
        height="152"
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Inicio" />

export default IndexPage
