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
        fileAbsolutePath: {regex: "//content//"},
        sort: {order: DESC, fields: [frontmatter___date]}) {
        edges {
          node {
            excerpt(pruneLength: 250)
            html
            fields {
              slug
            }
            frontmatter {
              title
              date
            }
          }
        }
      }
     }
   `,
  serialize: ({ query: { allMdx, site } }) => {
    const {
      siteUrl,
      title: siteTitle,
      author,
      authorBio,
      authorHomePage,
      authorHomePageTitle,
    } = site.siteMetadata
    const stripSlash = slug => (slug.startsWith("/") ? slug.slice(1) : slug)
    return allMdx.edges.map(edge => {
      const { excerpt, html, frontmatter, fields } = edge.node
      const { title, date } = frontmatter
      const { slug } = fields
      const url = `${siteUrl}/${stripSlash(slug)}`

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
                <div>
                  <div style="width: 100%; margin: 0 auto; max-width: 800px; padding-top: 40px; padding-bottom: 30px;">
                    <div style="display: flex; align-items: center;">
                      <div style="padding-right: 10px; align-items: center;">
                        <img
                          src="${siteUrl}/images/icon_64.png"
                          alt="${author}"
                        />
                      </div>
                      <p>${authorBio}<br/>Visit <a href="${authorHomePage}">${authorHomePageTitle}</a> to learn more about me.</p>
                    </div>
                  </div>
                </div>
                <div style="font-style: italic;">(This article was posted to my blog at <a href="${siteUrl}">${siteTitle}</a>. You can <a href="${url}">read it online by clicking here</a>.)</div>
              </div>
            `,
          },
        ],
      }
    })
  },
}
