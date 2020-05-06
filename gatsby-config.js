module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {
        mdxOtherwiseConfigured: true
      },
    },
    `gatsby-plugin-mdx`
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `eralp.dev`,
    author: `Eralp Karaduman`,
    description: `Blog of Eralp Karaduman`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/eralpkaraduman`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/eralpkaraduman`,
      },
      {
        name: `github`,
        url: `https://github.com/eralpkaraduman`,
      },
      {
        name: `linkedin`,
        url: `https://linkedin.com/in/eralpkaraduman`,
      },
      {
        name: `eralpkaraduman.com`,
        url: `https:///eralpkaraduman.com`,
      },
    ],
  },
}
