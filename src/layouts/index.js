import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Menu from '../components/Menu'
import fonts from '../fonts'
import { StaticQuery, graphql } from 'gatsby'

import { injectGlobal } from 'emotion'

injectGlobal`
  @font-face {
    font-family: "Ginto Normal Regular";
    font-style: normal;
    font-weight: normal;
    src: local("Ginto Normal Regular"), local("ginto-normal-regular"), url(${fonts.GintoNormalRegularEot}) format("eot"), url(${fonts.GintoNormalRegularWoff}) format("woff");
  }
  html, body, #___gatsby, div[role=group] {
    font-family: "Ginto Normal Regular";
    height: 100%;
  }
  img {
    max-width: 100%;
  }
`

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'illya test site' },
            { name: 'keywords', content: 'test, site, illya, gatsby, react' },
          ]}
        >
          <html lang="en" />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
            integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
            crossorigin="anonymous"
          />
        </Helmet>
        <Menu location={location} />
        <div style={{ height: '100%' }}>{children}</div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
}

export default Layout
