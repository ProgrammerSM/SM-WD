// Modules
import { Helmet } from 'react-helmet'
import React from "react"

// Styles
import "styles/reset.scss"
import "styles/typography.scss"

// markup
const IndexPage = () => {
  return (
    <>
      <Helmet>
        <title>Coming Soon</title>
      </Helmet>
      <main
        style={{
          alignItems: 'center',
          display: 'flex',
          height: '100vh',
          justifyContent: 'center',
          textAlign: 'center', 
          width: '100vw',
        }} 
      >
        <h1>Website Coming Soon</h1>
      </main>
    </>
  )
}

export default IndexPage
