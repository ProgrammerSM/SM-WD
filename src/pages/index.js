// Modules
import { Helmet } from 'react-helmet'
import React from 'react'

// Components
import Layout from 'components/global-components/Layout'
import TestComp from 'components/ThemeTransitionExample'

// Markup
const IndexPage = () => (
  <Layout>
    <Helmet>
      <title>Coming Soon</title>
    </Helmet>

    <TestComp />
  </Layout>
)

export default IndexPage
