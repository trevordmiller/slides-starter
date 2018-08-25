# Contributing

## Setup

- Copy the contents of this `slides-starter` to your own repo
- Replace `some-title`, `Some title`, and `Some description` with your presentation title/description
- For GitHub Pages hosting from each `master` branch update, enable `master branch /docs folder` in your project's GitHub settings

## Workflow

- Ensure you have the latest [Git](https://git-scm.com/) and [Node + npm](https://nodejs.org) installed
- Create a feature branch off of `master`
- Run `npm install` to install dependencies
- Run `npm run dev` and open `http://localhost:8080` to develop the slides and present offline locally
- Commit your changes
  - `npm run precommit` runs automatically to ensure things are working as expected related to your changed files
- Submit a pull request to `master`
- Run `npm run release` to publish the latest version from `master`

## Organization

- `src/`: source code
  - `index.mdx`: entry point source code
  - `components/`: UI components
    - `test.js` files can optionally be added for tests
  - `static/`: static assets like images, videos, audio etc.
- `docs/`: static HTML output from `src/`
- Other: tooling

## Presenter mode

- Open two windows in the same browser with the same URL
- Type `Option` + `P` (`Alt` + `P`) key to enter presenter mode in your window
- Move the non-presenter window to the screen for the audience to see
- Control the presentation from your presenter window by using the left and right arrow keys and the audience non-presenter window will stay in sync

## Technology

- Language: [Markdown](https://guides.github.com/features/mastering-markdown)
- Packages: [npm](https://www.npmjs.com)
- Wrapper: [MDX Deck](https://github.com/jxnblk/mdx-deck)
- UI: [React](https://reactjs.org)
- Styling: [Styled Components](https://www.styled-components.com)
- Linting: [ESLint](https://eslint.org)
- Testing: [Jest](http://jestjs.io)
- UI Testing: [Enzyme](http://airbnb.io/enzyme)
- Formatting: [Prettier](https://prettier.io)
- Colors: [Nova](https://trevordmiller.com/projects/nova)
