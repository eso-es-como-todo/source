import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <div className="main__disclaimer">
      <p>En septiembre se vienen cositas</p>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
