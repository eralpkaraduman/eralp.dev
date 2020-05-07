import React, { Fragment } from "react"
import { Styled } from "theme-ui"
import { StaticQuery, graphql } from "gatsby"

const Content = ({ authorHomePage, authorBio, authorHomePageTitle }) => (
  <Fragment>
    {authorBio} Visit{" "}
    <Styled.a href={authorHomePage}>{authorHomePageTitle}</Styled.a> to learn
    more about me.
  </Fragment>
)

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            authorHomePage
            authorHomePageTitle
            authorBio
          }
        }
      }
    `}
    render={data => (
      <Content
        authorBio={data.site.siteMetadata.authorBio}
        authorHomePage={data.site.siteMetadata.authorHomePage}
        authorHomePageTitle={data.site.siteMetadata.authorHomePageTitle}
      />
    )}
  />
)
