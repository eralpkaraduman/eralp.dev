import merge from "deepmerge"
import defaultThemeColors from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/colors"
import prismTheme from './codesandbox-black-prism-theme'

const darkGray = `#121212`
const orangeYellow = `#D19A66`
const lightRed = `#E06C75`
const lightGray = `#343434`

export default merge(defaultThemeColors, {
  primary: lightRed,
  heading: lightRed,
  prism: prismTheme,
  modes: {
    dark: {
      background: darkGray,
      primary: orangeYellow,
      highlight: lightGray,
    },
  },
})
