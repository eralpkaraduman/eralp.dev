module.exports = {
  plugins: [
    `gatsby-theme-blog`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        feeds: [require("./gatsby-plugin-feed-config")],
      },
    },
  ],
  siteMetadata: {
    title: `eralp.dev`,
    author: `Eralp Karaduman`,
    authorHomePage: "https://eralpkaraduman.com",
    authorHomePageTitle: "eralpkaraduman.com",
    authorBio:
      "I'm Eralp Karaduman, a software engineer. I make apps, games and digital toys.",
    description: `Blog of Eralp Karaduman`,
    siteUrl: `https://eralp.dev`,
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
