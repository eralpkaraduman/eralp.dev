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
        name: `Twitter`,
        url: `https://twitter.com/eralpkaraduman`,
      },
      {
        name: `Instagram`,
        url: `https://instagram.com/eralpkaraduman`,
      },
      {
        name: `GitHub`,
        url: `https://github.com/eralpkaraduman`,
      },
      {
        name: `LinkedIn`,
        url: `https://linkedin.com/in/eralpkaraduman`,
      },
    ],
  },
}
