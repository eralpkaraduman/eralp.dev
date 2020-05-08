// Based on https://github.com/kentcdodds/kentcdodds.com/blob/4976c89de5dd4246807c0d7a1ad140d703bcc0b0/gatsby-config.js
module.exports = {
  title: `eralp.dev`,
  output: "/rss.xml",
  query: `
     {
       site {
        siteMetadata {
          title
          siteUrl
          description
          author
          authorBio
          authorHomePage
          authorHomePageTitle
        }
      }
      allMdx(
        limit: 1000,
        filter: {frontmatter: {published: {ne: false}}
        fileAbsolutePath: {regex: "//content//"}},
        sort: {order: DESC, fields: [frontmatter___date]}) {
        edges {
          node {
            id
            excerpt(pruneLength: 250)
            html
            frontmatter {
              title
              date
              slug
            }
          }
        }
      }
     }
   `,
  serialize: ({ query: { allMdx, site } }) => {
    const {
      siteUrl,
      title,
      author,
      authorBio,
      authorHomePage,
      authorHomePageTitle,
    } = site.siteMetadata
    const stripSlash = slug => (slug.startsWith("/") ? slug.slice(1) : slug)
    return allMdx.edges.map(edge => {
      const { id, excerpt, html, frontmatter } = edge.node
      const { title, date, slug } = frontmatter
      const url = `${siteUrl}/${stripSlash(slug)}`
      const footer = `
          <div style="width: 100%; margin: 0 auto; max-width: 800px; padding: 40px 40px;">
            <div style="display: flex;">
              <div style="padding-right: 20px;">
                <img
                  src="${siteUrl}/images/eralp.png"
                  alt="${author}"
                  style="max-width: 80px; border-radius: 50%;"
                />
              </div>
              <p>${authorBio}</p>
              <p>Visit <a href="${authorHomePage}">${authorHomePageTitle}</a> to learn more about me.</p>
            </div>
          </div>
        `

      const postText = `
        <div>\${footer}</div>
        <div style="font-style: italic;">(This article was posted to my blog at <a href="${siteUrl}">${siteUrl}</a>. You can <a href="${url}">read it online by clicking here</a>.)</div>
      `

      // Hacky workaround for https://github.com/gaearon/overreacted.io/issues/65
      const replacedHtml = (html || ``)
        .replace(/href="\//g, `href="${siteUrl}/`)
        .replace(/src="\//g, `src="${siteUrl}/`)
        .replace(/"\/static\//g, `"${siteUrl}/static/`)
        .replace(/,\s*\/static\//g, `,${siteUrl}/static/`)

      return {
        title,
        description: excerpt,
        url,
        date,
        guid: url,
        custom_elements: [
          {
            "content:encoded": `
              <div style="width: 100%; margin: 0 auto; max-width: 800px; padding: 40px 40px;">
                ${replacedHtml}
                ${postText}
              </div>
            `,
          },
        ],
      }
    })
  },
}
