import React, { Fragment } from "react"
import { Styled } from "theme-ui"
import { StaticQuery, graphql } from "gatsby"

const Content = ({ authorHomePage, authorBio, authorHomePageTitle, socials }) => (
  <Fragment>
    {authorBio} Visit{" "}
    <Styled.a href={authorHomePage}>{authorHomePageTitle}</Styled.a> to learn
    more about me, also find me on other internets: {" "}
    {socials.map(({ name, url }, index, list) => <><Styled.a
      href={url}>{name}</Styled.a>{index < list.length - 1 ? ", " : "."}</>)}
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
            social {
              name
              url
            }
          }
        }
      }
    `}
    render={data => (
      <Content
        authorBio={data.site.siteMetadata.authorBio}
        authorHomePage={data.site.siteMetadata.authorHomePage}
        authorHomePageTitle={data.site.siteMetadata.authorHomePageTitle}
        socials={data.site.siteMetadata.social}
      />
    )}
  />
)
