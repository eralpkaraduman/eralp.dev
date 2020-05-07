import merge from "deepmerge"
import defaultThemeColors from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/colors"

const darkGray = `#121212`
const orangeYellow = `#D19A66`
const lightRed = `#E06C75`
const lightGray = `#343434`

export default merge(defaultThemeColors, {
  primary: lightRed,
  heading: lightRed,
  codeHighlight: lightGray,
  modes: {
    dark: {
      background: darkGray,
      primary: orangeYellow,
      highlight: lightGray,
    },
  },
})
