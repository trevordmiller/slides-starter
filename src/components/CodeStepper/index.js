import React from "react";
import { CodeSurfer } from "mdx-deck-code-surfer";
import prismReactRendererTheme from "./utils/prismReactRendererTheme";

const CodeStepper = ({ code, steps }) => (
  <CodeSurfer
    code={code}
    steps={steps}
    theme={prismReactRendererTheme}
    notes="Let's step through this code"
  />
);

export default CodeStepper;
