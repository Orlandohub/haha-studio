import React from 'react'
import { map } from 'lodash'
import PropTypes from 'prop-types'
import { css } from 'emotion'
import { styles } from './styles'
import Img from 'gatsby-image'
import Link from 'gatsby-link'
import { genericHashLink } from 'react-router-hash-link'
import ScrollTop from '../ScrollToTop/index'

const MyHashLink = props => genericHashLink(props, Link)

const Projects = projectsList => {
  const { projects } = projectsList
  const { edges } = projects

  return (
    <div className={css(styles.projectWrapper)}>
      <ScrollTop />
      {map(edges, project => {
        const { id } = project && project.node
        const { title, year, image_gallery } =
          project && project.node && project.node.frontmatter
        const { slug } = project && project.node && project.node.fields
        return (
          <React.Fragment key={id}>
            <div className={css(styles.projectTitle)}>
              <MyHashLink to={`${slug}#Menu`}>
                <p>
                  {title}, {year}
                </p>
              </MyHashLink>
            </div>
            <div className={css(styles.imageWrapper)}>
              <MyHashLink to={`${slug}#Menu`}>
                <Img fluid={image_gallery[0].image.childImageSharp.fluid} />
              </MyHashLink>
            </div>
          </React.Fragment>
        )
      })}
    </div>
  )
}

Projects.propTypes = {
  projectsList: PropTypes.object,
}

export default Projects
