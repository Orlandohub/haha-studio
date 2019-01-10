const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

function createPagesWithNavigation(pages, createPage) {
  _.forEach(pages, (edge, index) => {
    const id = edge.node.id
    const next = index === 0
      ? `${pages[pages.length - 1].node.fields.slug}`
      : pages[index - 1].node.fields.slug

    const prev = pages.length === index + 1
      ? `${pages[0].node.fields.slug}`
      : pages[index + 1].node.fields.slug

    createPage({
      path: edge.node.fields.slug,
      component: path.resolve(
        `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
      ),
      // additional data can be passed via context
      context: {
        id,
        prev,
        next
      },
    })
  })
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    const press = _.filter(posts, post => {
      return post.node.frontmatter.templateKey === 'press-page'
    })

    const texts = _.filter(posts, post => {
      return post.node.frontmatter.templateKey === 'text-page'
    })

    const projects = _.filter(posts, post => {
      return post.node.frontmatter.templateKey === 'project-page'
    })

    const products = _.filter(posts, post => {
      return post.node.frontmatter.templateKey === 'product-page'
    })

    createPagesWithNavigation(products, createPage)
    createPagesWithNavigation(projects, createPage)
    createPagesWithNavigation(press, createPage)
    createPagesWithNavigation(texts, createPage)

    posts.forEach(edge => {
      if (edge.node.frontmatter.templateKey === 'text-page') {
        return null
      }
      if (edge.node.frontmatter.templateKey === 'press-page') {
        return null
      }
      if (edge.node.frontmatter.templateKey === 'project-page') {
        return null
      }
      if (edge.node.frontmatter.templateKey === 'product-page') {
        return null
      }
      const id = edge.node.id
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}