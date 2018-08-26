import theme from "mdx-deck/themes";
import colorValues, { uiGroups } from "nova-colors";
import okaidia from "react-syntax-highlighter/styles/prism/okaidia";
import prismJavaScript from "react-syntax-highlighter/languages/prism/javascript";
import prismJsx from "react-syntax-highlighter/languages/prism/jsx";

const customTheme = {
  ...theme,
  font: '"Helvetica Neue", "Helvetica", "Arial", sans-serif',
  monospace: "monospace",
  heading: {
    fontWeight: 300
  },
  blockquote: {
    color: uiGroups.gray4,
    fontStyle: "italic",
    fontWeight: 400,
    fontSize: "inherit"
  },
  colors: {
    text: uiGroups.gray5,
    background: uiGroups.background,
    heading: uiGroups.userCurrentState,
    preBackground: "rgba(0, 0, 0, 0.25)",
    codeBackground: "transparent",
    link: colorValues.colors.blue
  },
  prism: {
    style: okaidia,
    languages: {
      javascript: prismJavaScript,
      jsx: prismJsx
    }
  }
};

export default customTheme;
