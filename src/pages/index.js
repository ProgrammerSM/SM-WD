// Modules
import { Helmet } from 'react-helmet'
import React from 'react'

// Components
import Button from 'components/global-components/Button'
import PageLayout from 'components/global-components/PageLayout'
import PageWrapper from 'components/global-components/PageWrapper'
import SquareImage from 'components/global-components/SquareImage'

// Markup
const IndexPage = () => (
  <PageLayout>
    <Helmet>
      <title>Coming Soon</title>
    </Helmet>

    <PageWrapper>
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
    </PageWrapper>
  </PageLayout>
)

export default IndexPage
