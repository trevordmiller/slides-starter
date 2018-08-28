import { uiGroups, syntaxGroups } from "nova-colors";

const prismTheme = {
  'code[class*="language-"]': {
    color: uiGroups.foreground,
    direction: "ltr",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    lineHeight: "1.5",
    MozTabSize: "4",
    OTabSize: "4",
    tabSize: "4",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none"
  },
  'pre[class*="language-"]': {
    color: uiGroups.foreground,
    background: "rgba(0, 0, 0, 0.25)",
    direction: "ltr",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    lineHeight: "1.5",
    MozTabSize: "4",
    OTabSize: "4",
    tabSize: "4",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
    padding: "1em",
    margin: ".5em 0",
    overflow: "auto",
    borderRadius: "0.3em"
  },
  ':not(pre) > code[class*="language-"]': {
    background: "rgba(0, 0, 0, 0.25)",
    padding: ".1em",
    borderRadius: ".3em"
  },
  comment: {
    color: syntaxGroups.trivial
  },
  prolog: {
    color: syntaxGroups.trivial
  },
  doctype: {
    color: syntaxGroups.trivial
  },
  cdata: {
    color: syntaxGroups.trivial
  },
  punctuation: {
    color: syntaxGroups.trivial
  },
  property: {
    color: syntaxGroups.identifier
  },
  keyword: {
    color: syntaxGroups.identifier
  },
  tag: {
    color: syntaxGroups.statement
  },
  "class-name": {
    color: syntaxGroups.constant
  },
  boolean: {
    color: syntaxGroups.constant
  },
  constant: {
    color: syntaxGroups.constant
  },
  symbol: {
    color: syntaxGroups.constant
  },
  deleted: {
    color: syntaxGroups.statement
  },
  number: {
    color: syntaxGroups.constant
  },
  selector: {
    color: syntaxGroups.statement
  },
  "attr-name": {
    color: syntaxGroups.identifier
  },
  string: {
    color: syntaxGroups.constant
  },
  char: {
    color: syntaxGroups.constant
  },
  builtin: {
    color: syntaxGroups.global
  },
  inserted: {
    color: syntaxGroups.constant
  },
  variable: {
    color: syntaxGroups.constant
  },
  operator: {
    color: syntaxGroups.statement
  },
  entity: {
    color: syntaxGroups.constant
  },
  url: {
    color: syntaxGroups.constant
  },
  ".language-css .token.string": {
    color: syntaxGroups.constant
  },
  ".style .token.string": {
    color: syntaxGroups.constant
  },
  atrule: {
    color: syntaxGroups.identifier
  },
  "attr-value": {
    color: syntaxGroups.constant
  },
  function: {
    color: syntaxGroups.statement
  },
  regex: {
    color: syntaxGroups.statement
  },
  important: {
    color: syntaxGroups.special
  }
};

export default prismTheme;
