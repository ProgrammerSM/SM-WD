// Modules
import { Helmet } from 'react-helmet'
import React from 'react'

// Components
import Button from 'components/global-components/Button'
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
          alignItems: 'center',
          display: 'flex',
          gap: '50px',
          justifyContent: 'center',
          margin: '0 auto',
          maxWidth: '1800px',
        }}
      >

        <SquareImage
          height={400}
          image='https://picsum.photos/400'
          imageAlt='testing'
          width={400}
        />
        <Button
          label='Checking'
        />
      </div>
    </Container>
  </PageWrapper>
)

export default IndexPage
