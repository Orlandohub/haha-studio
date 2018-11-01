import React from 'react'
import Link from 'gatsby-link'
import { css } from 'emotion'


const div1 = css ({
  backgroundColor : 'skyblue'
})

const div2 = css ({
  margin: '0 auto',
  maxWidth: 960,
  padding: '1.45rem 1.0875rem'
})

const H1 = css ({
  margin: '0'
})

const LinkStyle = css ({
  color: 'white',
  textDecoration: 'none',
  textShadow : 'none'
})

const Header = ({ siteTitle }) => (
  <div
    className={div1}
  >
    <div
      className={div2}>
      <h1 className={H1}>
        <Link to="/" className = {LinkStyle}>
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

export default Header


/*const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

export default Header*/