// Modules
import { Helmet } from 'react-helmet'
import React from 'react'

// Components
import Container from 'components/global-components/PageWrapper'
import PageWrapper from 'components/global-components/PageLayout'
import SquareImage from 'components/global-components/SquareImage'
import TestComp from 'components/ThemeTransitionExample'

// Markup
const IndexPage = () => (
  <PageWrapper>
    <Helmet>
      <title>Coming Soon</title>
    </Helmet>

    <Container>
      <TestComp />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          margin: '0 auto',
          maxWidth: '1800px',
          gap: '50px',
        }}
      >
        <SquareImage
          height={400}
          image='https://picsum.photos/500/400'
          imageAlt='testing'
          width={500}
        />
        <SquareImage
          height={400}
          image='https://picsum.photos/500/400'
          imageAlt='testing'
          width={500}
        />
      </div>
    </Container>
  </PageWrapper>
)

export default IndexPage
