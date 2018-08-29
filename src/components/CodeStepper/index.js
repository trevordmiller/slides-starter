import React from "react";
import { CodeSurfer } from "mdx-deck-code-surfer";

const CodeStepper = ({ code, steps }) => (
  <CodeSurfer code={code} steps={steps} />
);

export default CodeStepper;
