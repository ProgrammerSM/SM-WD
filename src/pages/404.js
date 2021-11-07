// Modules
import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'
import React from 'react'

// Components
import Layout from 'components/global-components/Layout'

// markup
const NotFoundPage = () => {
  return (    
    <Layout>
      <Helmet>
        <title>Not found</title>
      </Helmet>
      
      <h1>Page not found</h1>
      <p>
        Sorry{' '}
        <span role='img' aria-label='Pensive emoji'>
          😔
        </span>{' '}
        we couldn’t find what you were looking for.
        <br />
        <Link to='/'>Go home</Link>.
      </p>
    </Layout>
  )
}

export default NotFoundPage
