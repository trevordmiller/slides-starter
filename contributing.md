# Contributing

## Setup

- Copy the contents of this `slides-starter` to your own repo
- Replace each `some-title`, `Some title`, and `Some description` with your presentation title/description
- For GitHub Pages hosting from each `master` branch update, remove `docs` from the `.gitignore` and enable `master branch /docs folder` in your project's GitHub settings

## Workflow

- Ensure you have the latest [Git](https://git-scm.com/) and [Node + npm](https://nodejs.org) installed
- Create a feature branch off of `master`
- Run `npm install` to install dependencies
- Run `npm run dev` and open `http://localhost:8080` to develop
- Control the presentation by using the left/right arrow keys
- Type `Option` + `P` (`Alt` + `P`) key to enter presenter mode
- Type `Option` + `O` (`Alt` + `O`) key to enter overview mode
- Commit your changes
  - `npm run precommit` runs automatically to ensure things are working as expected related to your changed files
- Submit a pull request to `master`
- Run `npm run release` to publish the latest version from `master`

## Organization

- `src/`: source code
  - `index.md`: entry point
  - `components/`: UI components
  - `utils/`: utility modules
  - `static/`: static assets like images, videos, audio etc.
- `docs/`: generated HTML and PDF output from `src/`
- Other: tooling

## Presenting

- Plug in your laptop to the projector
- Disable display mirroring
- Turn on `Do Not Disturb`
- Run `npm run dev`
- Open two windows in the same browser, both to `http://localhost:8080`
- Move one of the windows to the projector's display for the audience
- On the projector's display for the audience
  - Fullscreen the slides
  - Start a fullscreen screen recording with audio
- On your laptop's display for you
  - Type `Option` + `P` (`Alt` + `P`) key to enter presenter mode
  - Start the timer

## Tips

- Keep everything explicitly in the slides so all you have to do is use left/right arrow keys when presenting
- Keep everything stored locally in the project so it works offline for bad internet connections

## Technology

- Language: [Markdown](https://guides.github.com/features/mastering-markdown)
- Packages: [npm](https://www.npmjs.com)
- Wrapper: [MDX Deck](https://github.com/jxnblk/mdx-deck)
- UI: [React](https://reactjs.org)
- Styling: [Styled Components](https://www.styled-components.com)
- Linting: [ESLint](https://eslint.org)
- Formatting: [Prettier](https://prettier.io)
- Colors: [Nova](https://trevordmiller.com/projects/nova)
