// Modules
import { Helmet } from 'react-helmet'
import React from 'react'

// Components
import PageWrapper from 'components/global-components/PageWrapper'
import TestComp from 'components/ThemeTransitionExample'

// Markup
const IndexPage = () => (
  <PageWrapper>
    <Helmet>
      <title>Coming Soon</title>
    </Helmet>

    <TestComp />
  </PageWrapper>
)

export default IndexPage
