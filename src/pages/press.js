import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../layouts'
import { css } from 'emotion'
import Link from 'gatsby-link'
import * as styles from '../components/IndexPageStyles/PressStyles/styles'
import keira from '../images/D_press_cover_index_image.png'
import keiraInverted from '../images/keirainverted.png'

class Press extends React.Component {
  constructor() {
    super()
    this.state = {
      img1: keira,
      img2: keira,
      img3: keira,
      img4: keira,
      img5: keira,
      img6: keira,
      img7: keira,
      img8: keira,
    }

    this.hoverOn = this.hoverOn.bind(this)
    this.hoverOut = this.hoverOut.bind(this)
  }

  hoverOn(i) {
    this.setState({ img: keiraInverted })
  }
  hoverOut() {
    this.setState({ img: keira })
  }

  render() {
    const location = this.props

    return (
      <React.Fragment>
        <Layout location={location}>
          <div className={css(styles.pressWrapper)}>
            <div className={css(styles.leftFloatingEmptySpace)} />

            <div className={css(styles.pressRightColumn)}>
              <div className={css(styles.pressText)}>
                <p className={css(styles.pressParagraph)}>
                  For press inquiries
                  <br />{' '}
                  <a
                    href="mailto:press@hahastudio.se"
                    className={css(styles.mailTo)}
                  >
                    press@hahastudio.se
                  </a>
                  <br />
                  <br />{' '}
                  <a href="/press/" className={css(styles.pressLink)}>
                    Download high-resolution images and media kits
                  </a>
                  <br />
                  <br />
                  <a href="/press/" className={css(styles.pressLink)}>
                    Download studio profile
                  </a>
                  <br />
                  <br />{' '}
                  <a href="/press/" className={css(styles.pressLink)}>
                    Download press releases
                  </a>
                  <br />
                  <br />
                </p>
              </div>

              {/*      BOTTOM IMAGE GRID PART        */}

              <div className={css(styles.pressGrid)}>
                <div className={css(styles.pressImage)}>
                  <Link to={'/press-expanded/'}>
                    <img
                      src={this.state.img1}
                      onMouseOver={() => this.setState({ img1: keiraInverted })}
                      onMouseOut={() => this.setState({ img1: keira })}
                    />
                  </Link>
                </div>
                <div className={css(styles.pressImage)}>
                  <Link to={'/press-expanded/'}>
                    <img
                      src={this.state.img2}
                      onMouseOver={() => this.setState({ img2: keiraInverted })}
                      onMouseOut={() => this.setState({ img2: keira })}
                    />
                  </Link>
                </div>
                <div className={css(styles.pressImage)}>
                  <Link to={'/press-expanded/'}>
                    <img
                      src={this.state.img3}
                      onMouseOver={() => this.setState({ img3: keiraInverted })}
                      onMouseOut={() => this.setState({ img3: keira })}
                    />
                  </Link>
                </div>
                <div className={css(styles.pressImage)}>
                  <Link to={'/press-expanded/'}>
                    <img
                      src={this.state.img4}
                      onMouseOver={() => this.setState({ img4: keiraInverted })}
                      onMouseOut={() => this.setState({ img4: keira })}
                    />
                  </Link>
                </div>
                <div className={css(styles.pressImage)}>
                  <Link to={'/press-expanded/'}>
                    <img
                      src={this.state.img5}
                      onMouseOver={() => this.setState({ img5: keiraInverted })}
                      onMouseOut={() => this.setState({ img5: keira })}
                    />
                  </Link>
                </div>
                <div className={css(styles.pressImage)}>
                  <Link to={'/press-expanded/'}>
                    <img
                      src={this.state.img6}
                      onMouseOver={() => this.setState({ img6: keiraInverted })}
                      onMouseOut={() => this.setState({ img6: keira })}
                    />
                  </Link>
                </div>
                <div className={css(styles.pressImage)}>
                  <Link to={'/press-expanded/'}>
                    <img
                      src={this.state.img7}
                      onMouseOver={() => this.setState({ img7: keiraInverted })}
                      onMouseOut={() => this.setState({ img7: keira })}
                    />
                  </Link>
                </div>
                <div className={css(styles.pressImage)}>
                  <Link to={'/press-expanded/'}>
                    <img
                      src={this.state.img8}
                      onMouseOver={() => this.setState({ img8: keiraInverted })}
                      onMouseOut={() => this.setState({ img8: keira })}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </React.Fragment>
    )
  }
}

Press.proptypes = {
  location: PropTypes.object.isRequired,
}

export default Press
