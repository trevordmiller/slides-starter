import { uiGroups, syntaxGroups } from "nova-colors";

const prismReactRendererTheme = {
  plain: {
    backgroundColor: uiGroups.background,
    color: uiGroups.foreground
  },
  styles: [
    {
      types: [
        "boolean",
        "string",
        "entity",
        "url",
        "attr-value",
        "control",
        "directive",
        "unit",
        "regex",
        "at-rule",
        "placeholder",
        "inserted",
        "property",
        "number"
      ],
      style: {
        color: syntaxGroups.constant
      }
    },
    {
      types: ["attr-name", "variable"],
      style: {
        color: syntaxGroups.identifier
      }
    },
    {
      types: [
        "tag",
        "operator",
        "function",
        "tag-id",
        "selector",
        "atrule-id",
        "deleted",
        "statement"
      ],
      style: {
        color: syntaxGroups.statement
      }
    },
    {
      types: ["keyword"],
      style: {
        color: syntaxGroups.global
      }
    },
    {
      types: ["important"],
      style: {
        color: syntaxGroups.special
      }
    },
    {
      types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
      style: {
        color: syntaxGroups.trivial
      }
    }
  ]
};

export default prismReactRendererTheme;
