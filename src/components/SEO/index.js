import React from 'react'
import Helmet from 'react-helmet'

function SEO(props) {
  return (
    <Helmet
      title={props.title}
      meta={[
        { name: 'title', content: props.title },

        { name: 'description', content: props.description },
        {
          property: 'og:title',
          content: props.title,
        },
        {
          property: 'og:url',
          content: 'http://www.hahastudio.se' + location,
        },

        {
          property: 'og:image',
          content: props.thumbnail,
        },
        {
          property: 'og:image:secure_url',
          content: props.thumbnail,
        },

        {
          property: 'og:description',
          content: props.description,
        },

        {
          property: 'og:image:width',
          content: '1200',
        },

        {
          property: 'og:image:height',
          content: '630',
        },
        {
          property: 'og:locale',
          content: 'en',
        },
        { name: 'twitter:card', content: 'summary_large_image' },

        { name: 'twitter:title', content: props.title },

        {
          name: 'twitter:description',
          content: props.description,
        },
        {
          name: 'twitter:image',
          content: props.thumbnail,
        },
        { property: 'og:type', content: 'website' },
        { name: 'robots', content: 'index, follow' },

        { name: 'twitter:creator', content: '@HAHAStudio' },
        { property: 'og:site_name', content: 'HAHA Studio' },
        {
          name: 'keywords',
          content: 'design, design studio, stockholm, e-commerce',
        },
      ]}
    >
      <html lang="en" />
      <link
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
    </Helmet>
  )
}

export default SEO
