// Modules
import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'
import React from 'react'

// Components
import Layout from 'components/global-components/Layout'

// Markup
const NotFoundPage = () => (
  <Layout>
    <Helmet>
      <title>Not found</title>
    </Helmet>

    <h1>Page not found</h1>
    <p>
      Sorry{' '}
      <span
        aria-label='Pensive emoji'
        role='img'
      >
        😔
      </span>{' '}
      we couldn’t find what you were looking for.
      <br />
      <Link to='/'>Go home</Link>.
    </p>
  </Layout>
)

export default NotFoundPage
