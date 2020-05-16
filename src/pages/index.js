import React from "react"
import Seo from "../components/Seo"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Start from "../sections/Start"
import Projects from "../sections/Projects"

const Home = ({ data }) => {
  return (
    <Layout>
      <Seo title="Home" />
      <Start />
      <Projects />
    </Layout>
  )
}

export default Home
