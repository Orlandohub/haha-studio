import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import { css } from 'emotion'
import { styles, StyledScrollTop } from './styles'
import Img from 'gatsby-image'
import Link from 'gatsby-link'

const Projects = (projectsList) => {
  const { projects } = projectsList
  const { edges } = projects
  return (
    <div className={css(styles.projectWrapper)}>
      <StyledScrollTop
        text=""
        distance={1500}
        breakpoint={1024}
        speed={500}
        target={0}
        icon={null}
      />
      {
        _.map(edges, (project) => {
          const { id } = project && project.node
          const { title, year, image_gallery } = project && project.node && project.node.frontmatter
          const { slug } = project && project.node && project.node.fields
          return (
            <React.Fragment key={id}>
              <div className={css(styles.projectTitle)}>
                <Link to={slug}>
                  <p>{title}, {year}</p>
                </Link>
              </div>
              <div className={css(styles.imageWrapper)}>
                <Link to={slug}>
                  <Img fluid={image_gallery[0].image.childImageSharp.fluid} />
                </Link>
              </div>
            </React.Fragment>
          )
        })
      }
    </div>
  )
}

Projects.propTypes = {
  projectsList: PropTypes.object
}

export default Projects
