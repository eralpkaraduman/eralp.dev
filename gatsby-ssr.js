const React = require("react")

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    React.createElement("script", {
      key: "umami",
      defer: true,
      src: "https://umami.cicex.cloud/script.js",
      "data-website-id": "62947848-8acb-4820-9ddb-1ed5f3c3d6b2",
    }),
  ])
}
