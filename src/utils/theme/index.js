import theme from "mdx-deck/themes";
import colorValues, { uiGroups, syntaxGroups } from "nova-colors";
import reactSyntaxHighlighterJavaScript from "react-syntax-highlighter/languages/prism/javascript";
import reactSyntaxHighlighterJsx from "react-syntax-highlighter/languages/prism/jsx";
import reactSyntaxHighlighterTheme from "./utils/reactSyntaxHighlighterTheme";

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
    style: reactSyntaxHighlighterTheme,
    languages: {
      javascript: reactSyntaxHighlighterJavaScript,
      jsx: reactSyntaxHighlighterJsx
    }
  }
};

export default customTheme;
