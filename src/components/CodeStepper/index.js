import React from "react";
import { CodeSurfer } from "mdx-deck-code-surfer";
import theme from "prism-react-renderer/themes/duotoneDark";

const CodeStepper = ({ code, steps }) => (
  <CodeSurfer code={code} steps={steps} theme={theme} />
);

export default CodeStepper;
