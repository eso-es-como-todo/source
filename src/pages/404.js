import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <h1>Esta página no existe</h1>
    <p>Comprueba que has escrito bien la url, por favor.</p>
  </Layout>
)

export const Head = () => <Seo title="Página no encontrada" />

export default NotFoundPage
