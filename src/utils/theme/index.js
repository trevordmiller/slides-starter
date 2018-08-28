import theme from "mdx-deck/themes";
import colorValues, { uiGroups, syntaxGroups } from "nova-colors";
import prismJavaScript from "react-syntax-highlighter/languages/prism/javascript";
import prismJsx from "react-syntax-highlighter/languages/prism/jsx";
import prismTheme from "./utils/prismTheme";

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
    fontWeight: 400
  },
  colors: {
    text: uiGroups.gray5,
    background: uiGroups.background,
    heading: uiGroups.userCurrentState,
    preBackground: "rgba(0, 0, 0, 0.25)",
    codeBackground: "transparent",
    code: syntaxGroups.statement,
    link: colorValues.colors.blue
  },
  prism: {
    style: prismTheme,
    languages: {
      javascript: prismJavaScript,
      jsx: prismJsx
    }
  }
};

export default customTheme;
