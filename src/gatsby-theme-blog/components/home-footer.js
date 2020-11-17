import React, { Fragment } from "react"
import { Styled, css } from "theme-ui"
import { StaticQuery, graphql } from "gatsby"

const Footer = ({ socialLinks, author }) => (
  <footer
    css={css({
      mt: 4,
      pt: 3,
    })}
  >
    © {new Date().getFullYear()}
    {` ${author}, `}
    {socialLinks
      ? socialLinks.map((platform, i, arr) => (
          <Fragment key={platform.url}>
            <Styled.a
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {platform.name}
            </Styled.a>
            {arr.length - 1 !== i && (
              <Fragment>
                {` `}&bull;{` `}
              </Fragment>
            )}
          </Fragment>
        ))
      : null}
  </footer>
)

export default ({ socialLinks }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            author
          }
        }
      }
    `}
    render={data => (
      <Footer
        socialLinks={socialLinks}
        author={data.site.siteMetadata.author}
      />
    )}
  />
)
