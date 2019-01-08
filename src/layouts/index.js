import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Menu from '../components/Menu'
import fonts from '../fonts'
import { StaticQuery, graphql } from 'gatsby'
import PageTransition from 'gatsby-v2-plugin-page-transitions'
import { css } from 'emotion'
import { styles } from './styles'

import '../assets/bootstrap/css/bootstrap.min.css'

import { injectGlobal } from 'emotion'

injectGlobal`
  @font-face {
    font-family: "Ginto Normal Regular";
    font-style: normal;
    font-weight: normal;
    src: local("Ginto Normal Regular"), local("ginto-normal-regular"), url(${
      fonts.GintoNormalRegularEot
    }) format("eot"), url(${fonts.GintoNormalRegularWoff}) format("woff");
  }
  html, body, #___gatsby, div[role=group] {
    font-family: "Ginto Normal Regular";
    height: 100%;
  }
  img {
    max-width: 100%;
  }
  .slick-dots li {
    flex: 1!important;
  }
  .slick-dots li:first-child {
    margin-left: 0;
  }
  .slick-dots li:last-child {
    margin-right: 0;
  }
  .slick-dots li div {
    background-color: #D9D9D7;
  }
  .slick-dots li div:hover {
    background-color: #000;
  }
  .slick-dots li.slick-active div {
    background-color: #000;
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
        logoImage: file(relativePath: { eq: "logo_large.png" }) {
          childImageSharp {
            fluid(maxWidth: 1060) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'HAHA Studio' },
            {
              name: 'keywords',
              content: 'design, design studio, stockholm, gatsby, react',
            },
          ]}
        >
          <html lang="en" />
          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
        </Helmet>
        <Menu location={location} data={data} />
        <div className={css(styles.pageWrapper)}>
          <PageTransition>{children}</PageTransition>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
}

export default Layout
