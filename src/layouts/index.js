import React from 'react'
import PropTypes from 'prop-types'
import Menu from '../components/Menu'
import fonts from '../fonts'
import { StaticQuery, graphql } from 'gatsby'
import PageTransition from 'gatsby-v2-plugin-page-transitions'
import { css } from 'emotion'
import { styles } from './styles'
import SEO from '../components/SEO/index'
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
    height: auto;
    overflow-x: hidden;    
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
    height: 2px;
    background-color: #D9D9D7;
  }
  .slick-dots li div:hover {
    background-color: #000;
  }
  .slick-dots li.slick-active div {
    background-color: #000;
  }
  li.slick-active div.color_wrapp {
    border-bottom: 2px solid black;
  }
  @media (min-width: 1024px) {
    .pressThumbnailCounterCover {
      display: none;
    }
    .pressThumbnailWrap:hover .pressThumbnailCover {
      display: none;
    }
    .pressThumbnailWrap:hover .pressThumbnailCounterCover {
      display: block;
    }
  }
  .ril-outer.ril__outer.ril__outerAnimating   {
    background-color: white;
  }
  .ril-toolbar.ril__toolbar {
    display: none;
  }

  .snip-layout {
    visibility: hidden;
  }

`

const Layout = ({ children, location, hideMenu }) => (
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
        fileName: file(relativePath: { eq: "hero_image.jpg" }) {
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
        <SEO
          title={data.site.siteMetadata.title}
          description={
            'HAHA studio is the Stockholm based design practice. Hailing from different cultures— Scandinavia and East Asia. HAHA works hand in hand with craftspeople in Sweden and Taiwan. The practice designs lighting fixtures, accessories, limited editions, and undertakes regular collaborations in interior architecture.'
          }
          location={location}
          thumbnail={data.fileName.childImageSharp.fluid.src}
        />

        {!hideMenu && <Menu location={location} data={data} />}

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
