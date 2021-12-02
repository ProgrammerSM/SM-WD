// Modules
import { Helmet } from 'react-helmet'
import React from 'react'

// Components
import Button from 'components/global-components/Button'
import Heading from 'components/global-components/Heading'
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
      <Heading as='h1' >
        This is a Test Heading
      </Heading>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
      <SquareImage
        height={400}
        image='https://loremflickr.com/1800/400/space'
        imageAlt='Testing'
        width={1800}
      />
    </PageWrapper>
  </PageLayout>
)

export default IndexPage
