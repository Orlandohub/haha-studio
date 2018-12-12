import React from 'react'
import PropTypes from 'prop-types'
import { ProjectsTemplate } from '../../templates/projects'

const ProjectPreview = ({ entry, widgetFor }) => (
  <div>
    <ProjectsTemplate
      content={widgetFor('body')}
      title={entry.getIn(['data', 'title'])}
      isSelected={entry.getIn(['data', 'is_selected'])}
      projectAssistant={entry.getIn(['data', 'project_assistant'])}
      photoCredits={entry.getIn(['data', 'photo_credits'])}
      producer={entry.getIn(['data', 'producer'])}
      year={entry.getIn(['data', 'year'])}
      cmsImageGallery={widgetFor('image_gallery')}
    />
  </div>
)

ProjectPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ProjectPreview
