// Implementation is bases on: https://github.com/kentcdodds/kentcdodds.com/blob/4976c89de5dd4246807c0d7a1ad140d703bcc0b0/src/components/mdx/code.js
/** @jsx jsx */
import { jsx } from "theme-ui"
import theme from "./prism-theme"
import Highlight, { defaultProps } from "prism-react-renderer"
import { css } from "@emotion/core"
import Prism from "prism-react-renderer/prism"
// Add non-default languages
;(typeof global !== "undefined" ? global : window).Prism = Prism
require("prismjs/components/prism-dart")

const RE = /{([\d,-]+)}/

const wrapperStyles = css`
  overflow: auto;
  background-color: ${theme.plain.backgroundColor};
  border-radius: 0.2rem;
`

const preStyles = css`
  float: left;
  min-width: 100%;
  overflow: initial;
`

function calculateLinesToHighlight(meta) {
  if (RE.test(meta)) {
    const lineNumbers = RE.exec(meta)[1]
      .split(",")
      .map(v => v.split("-").map(y => parseInt(y, 10)))
    return index => {
      const lineNumber = index + 1
      const inRange = lineNumbers.some(([start, end]) =>
        end ? lineNumber >= start && lineNumber <= end : lineNumber === start
      )
      return inRange
    }
  } else {
    return () => false
  }
}

function Code({ codeString, language, metastring }) {
  const shouldHighlightLine = calculateLinesToHighlight(metastring)
  return (
    <Highlight
      prism={Prism}
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div css={wrapperStyles}>
          <pre className={className} style={style} css={preStyles}>
            {tokens.map((line, i) => (
              <div
                key={i}
                {...getLineProps({
                  line,
                  key: i,
                  sx: {
                    paddingLeft: "1rem",
                    paddingRight: "1rem",
                    backgroundColor: shouldHighlightLine(i)
                      ? "codeHighlight"
                      : undefined,
                  },
                })}
              >
                <span
                  sx={{
                    display: "inline-block",
                    width: "2em",
                    userSelect: "none",
                    opacity: 0.2,
                  }}
                >
                  {i + 1}
                </span>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        </div>
      )}
    </Highlight>
  )
}

export default Code
