import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import Project from "../components/main/projects"
import Stack from "../components/main/stacks"
import Contact from "../components/main/contact"

const IndexPage = () => (
  <div className=" h-screen w-screen bg-[#101418] font-leagueGothic ">
    <Contact />
  </div>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
