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
- Control the presentation from your presenter window by using the arrow keys and the audience non-presenter window will stay in sync
- Type `Option` + `O` (`Alt` + `O`) key to enter overview mode
- Commit your changes
  - `npm run precommit` runs automatically to ensure things are working as expected related to your changed files
- Submit a pull request to `master`
- Run `npm run release` to publish the latest version from `master`

## Organization

- `src/`: source code
  - `index.mdx`: entry point source code
  - `components/`: UI components
  - `utils/`: utility modules
  - `static/`: static assets like images, videos, audio etc.
- `docs/`: static HTML and PDF output from `src/`
- Other: tooling

## Presenting

- Run `npm run dev`
- Open two windows in the same browser both to `http://localhost:8080`
- Type `Option` + `P` (`Alt` + `P`) key to enter presenter mode in your window
- Move the non-presenter window to the screen for the audience to see
- Fullscreen the audience window
- Turn on `Do Not Disturb`
- Start a timer
- Start a screen recording with audio

## Tips

- Keep everything stored in the project so it works offline for bad connections
- Keep everything explicitly in slides so all you have to do is use arrow keys when presenting
  - For showing other websites you can use `iframe`
  - For simple demos, you can render components directly in the slides
  - For complete demos, you can use a terminal recorder like `asciinema` and/or a video recording

## Technology

- Language: [Markdown](https://guides.github.com/features/mastering-markdown)
- Packages: [npm](https://www.npmjs.com)
- Wrapper: [MDX Deck](https://github.com/jxnblk/mdx-deck)
- UI: [React](https://reactjs.org)
- Styling: [Styled Components](https://www.styled-components.com)
- Linting: [ESLint](https://eslint.org)
- Formatting: [Prettier](https://prettier.io)
- Colors: [Nova](https://trevordmiller.com/projects/nova)
