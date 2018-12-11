import React from 'react'
import PropTypes from 'prop-types'
import { BlogPostTemplate } from '../../templates/blog-post'

const BlogPostPreview = ({ entry, widgetFor }) => (
  <div>
    <BlogPostTemplate
      content={widgetFor('body')}
      title={entry.getIn(['data', 'title'])}
      isSelected={entry.getIn(['data', 'is_selected'])}
      year={entry.getIn(['data', 'year'])}
      cmsImageGallery={entry.getIn(['data', 'image_gallery'])}
    />
  </div>
)

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default BlogPostPreview
