import React from 'react'
import Link from 'gatsby-link'
import { css } from 'emotion'


const sexyBlueHeaderWrapper = css ({
  backgroundColor : 'skyblue'
})

const yesHeaderTitle = css ({
  margin: '0 auto',
  maxWidth: 960,
  padding: '1.45rem 1.0875rem'
})

const headerTextMargin = css ({
  margin: '0'
})

const headerLinkStyle = css ({
  color: 'white',
  textDecoration: 'none',
  textShadow : 'none'
})

const Header = ({ siteTitle }) => (
  <div
    className={sexyBlueHeaderWrapper}
  >
    <div
      className={yesHeaderTitle}>
      <h1 className={headerTextMargin}>
        <Link to="/" className = {headerLinkStyle}>
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

export default Header