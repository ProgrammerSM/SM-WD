require("dotenv").config({
  path: `.env`,
})

const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://www.sm-wd.com/',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV
} = process.env;

const isNetlifyProduction = NETLIFY_ENV === 'production';
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

module.exports = {
  siteMetadata: {
    author: 'Sterling May',
    description: 'This is Sterling May\'s portfolio site. It is a place where he can showcase his skills as a web developer and experient with web technologies.',
    siteUrl,
    title: 'Sterling May - Web Developer',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-sass',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-webfonts',
      options: {
        fonts: {
          google: [
            {
              family: 'Orbitron',
              fontDisplay: 'swap',
              variants: ['400'],
            },
            {
              family: 'Jura',
              fontDisplay: 'swap',
              variants: ['400'],
            },
          ],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GATSBY_GA_ID,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            host: siteUrl,
            policy: [{ userAgent: '*', disallow: ['/'] }], // ***IMPORTANT*** Update this later once site is ready
            sitemap: `${siteUrl}/sitemap/sitemap-index.xml`,
          },
          'branch-deploy': {
            host: siteUrl,
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: `${siteUrl}/sitemap/sitemap-index.xml`,
          },
          'deploy-preview': {
            host: siteUrl,
            sitemap: `${siteUrl}/sitemap/sitemap-index.xml`,
          },
        },
      }
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-plugin-purgecss', // Purges all unused/unreferenced css rules
      options: { develop: true }, // Activates purging in npm run develop
    }, // Must be after other CSS plugins
  ],
};
