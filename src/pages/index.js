import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Frontpage from "../components/frontpage"

import "../styles/styles.css"


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Frontpage></Frontpage>
  </Layout>
)

export default IndexPage
