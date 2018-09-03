export { default as theme } from './theme'

# Some title

---

## Some heading

```javascript
const someCode = 42;
```

- Some list item
- Some list item

Some text, [a link](https://developer.mozilla.org), `code`, **bold**, _italic_

> "Some quote"

---

import SomeComponent from './components/SomeComponent'

<SomeComponent />

---

import CodeStepper from "./components/CodeStepper"

<CodeStepper
code={require("!raw-loader!./components/SomeComponent")}
steps={[
{ range: [1, 3], notes: "Some step 1" },
{ lines: [5, 10], notes: "Some step 2" },
{ range: [15, 20], notes: "Some step 3" },
{ lines: [22], notes: "Some step 4" }
]}
/>

---

import FullscreenImage from "./components/FullscreenImage"

<FullscreenImage src="./static/some-image.gif" />

---

import SpeakerNotes from "./components/SpeakerNotes"

## Some heading

<SpeakerNotes>
  Some speaker notes (only visible in presenter mode)
</SpeakerNotes>
