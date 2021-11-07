// Modules
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import React from 'react'
import { withPrefix } from 'gatsby'
import { ThemeContext, ThemeProvider } from '@emotion/react'

// Components

// Scripts
import commonThemeValues from 'scripts/commonThemeValues'
import themeColorGroups from 'scripts/themeColorGroups'
import useSiteMetadata from 'scripts/useSiteMetadata'

// Styles
import 'styles/reset.scss'
import 'styles/typography.scss'

// PropTypes
const propTypes = {}
const Layout = ({
  children
}) => {
  const {
    author,
    description,
    siteUrl,
    title,
  } = useSiteMetadata()

  let canonical = siteUrl
  if (typeof window !== 'undefined') {
    let currentURL = window.location.href

    if (currentURL.includes('?'))
      [currentURL] = currentURL.split('?')

    canonical = currentURL
  }

  const themeName = 'light'
  const theme = {
    ...commonThemeValues,
    ...themeColorGroups[themeName],
  }
  
  return (
    <>
      <Helmet>
        <html lang='en' />

        <meta name="author" content={author} />
        <meta content='text/html; charset=utf-8' httpEquiv='Content-Type' />
        <meta content='width=device-width, initial-scale=0.86, maximum-scale=3.0, minimum-scale=0.86' name='viewport' />
        <meta content='noindex nofollow' name='robots' />

        <title>{title}</title>
        <meta content={title} property='og:title' />

        <meta content={description} name='description' />
        <meta content={description} property='og:description' />

        <meta content={title} property='og:site_name' />
        <meta content='website' property='og:type' />

        <meta content={canonical} property='og:url' />
        <link href={canonical} rel='canonical' />

        <meta content='#FFFFFF' name='theme-color' />
        <meta content='#FFFFFF' name='msapplication-TileColor' />
        {/* <meta content={`${withPrefix('/')}mstile-144x144.png`} name='msapplication-TileImage' />
        <meta content={`${withPrefix('/')}browserconfig.xml`} name='msapplication-config' />

        <link href={`${withPrefix('/')}favicon.ico`} rel='shortcut icon' />
        <link href={`${withPrefix('/')}favicon-16x16.png`} rel='icon' sizes='16x16' type='image/png' />
        <link href={`${withPrefix('/')}favicon-32x32.png`} rel='icon' sizes='32x32' type='image/png' />

        <link color='#FFFFFF' href={`${withPrefix('/')}safari-pinned-tab.svg`} rel='mask-icon' />
        <link href={`${withPrefix('/')}apple-touch-icon-57x57.png`} rel='apple-touch-icon' sizes='57x57' />
        <link href={`${withPrefix('/')}apple-touch-icon-60x60.png`} rel='apple-touch-icon' sizes='60x60' />
        <link href={`${withPrefix('/')}apple-touch-icon-72x72.png`} rel='apple-touch-icon' sizes='72x72' />
        <link href={`${withPrefix('/')}apple-touch-icon-76x76.png`} rel='apple-touch-icon' sizes='76x76' />
        <link href={`${withPrefix('/')}apple-touch-icon-114x114.png`} rel='apple-touch-icon' sizes='114x114' />
        <link href={`${withPrefix('/')}apple-touch-icon-120x120.png`} rel='apple-touch-icon' sizes='120x120' />
        <link href={`${withPrefix('/')}apple-touch-icon-144x144.png`} rel='apple-touch-icon' sizes='144x144' />
        <link href={`${withPrefix('/')}apple-touch-icon-152x152.png`} rel='apple-touch-icon' sizes='152x152' />
        <link href={`${withPrefix('/')}apple-touch-icon-180x180.png`} rel='apple-touch-icon' sizes='180x180' />

        <link href={`${withPrefix('/')}site.webmanifest`} rel='manifest' />
        <link href={`${withPrefix('/')}android-chrome-192x192.png`} rel='icon' sizes='192x192' type='image/png' />
        <link href={`${withPrefix('/')}android-chrome-256x256.png`} rel='icon' sizes='256x256' type='image/png' /> */}
      </Helmet>
      <ThemeProvider theme={theme}>
        <main
          style={{
            alignItems: 'center',
            background: theme.colors.backgroundColor,
            color: theme.colors.fontColor,
            display: 'flex',
            height: '100vh',
            justifyContent: 'center',
            textAlign: 'center', 
            width: '100vw',
          }} 
        >
          {/* {children} */}
          <h1>Website Coming Soon</h1>
        </main>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = propTypes
export default Layout
