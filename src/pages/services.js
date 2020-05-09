import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reusable/HeroSection"
import InfoBlock from "../components/Reusable/InfoBlock"
import DualInfoBlock from "../components/Reusable/DualInfoBlock"
import Services from "../components/Services/Services"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />

    <HeroSection
      img={data.img.childImageSharp.fluid}
      title="Our Services"
      subtitle=""
      heroclass="services-background"
    />
    <InfoBlock heading="About Us" />
    <DualInfoBlock heading="Message from CTO" />
    <Services />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "heromain.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
