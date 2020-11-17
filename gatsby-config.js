const siteTitle = `eralp.dev`
const siteDescription = `Blog of software engineer Eralp Karaduman`

module.exports = {
  plugins: [
    `gatsby-theme-blog`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        feeds: [require("./gatsby-plugin-feed-config")],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-85599671-3`,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: siteTitle,
        short_name: siteTitle,
        description: siteDescription,
        start_url: "/",
        background_color: "#121212",
        theme_color: "#D19A66",
        display: "standalone",
        icon: "src/images/icon_512.png",
        icons: [
          {
            src: "/favicons/icon_192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/favicons/icon_512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    },
    `gatsby-plugin-sitemap`,
  ],
  siteMetadata: {
    title: siteTitle,
    author: `Eralp Karaduman`,
    authorHomePage: "https://eralpkaraduman.com",
    authorHomePageTitle: "eralpkaraduman.com",
    authorBio:
      "I'm Eralp Karaduman, a software engineer. I make apps, games and digital toys.",
    description: siteDescription,
    siteUrl: `https://eralp.dev`,
    social: [
      {
        name: `Twitter`,
        url: `https://twitter.com/eralpkaraduman`,
      },
      {
        name: `GitHub`,
        url: `https://github.com/eralpkaraduman`,
      },
      {
        name: `LinkedIn`,
        url: `https://linkedin.com/in/eralpkaraduman`,
      },
      {
        name: `RSS`,
        url: `/rss.xml`,
      },
    ],
  },
}
