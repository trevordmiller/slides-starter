# Contributing

## Setup

- Copy the contents of this `slides-starter` to your own repo
- Replace `some-title`, `Some title`, and `Some description` with your presentation title/description
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
- Keep everything explicitly in slides so all you have to do is use left/right arrow keys when presenting
  - For content you can place everything in the slides and use speaker notes
  - For code demos, you can render components directly in the slides
  - For end-to-end demos, you can record your terminal and/or record a screencast and embed it in a slide
  - For showing websites you can use `iframe` in a slide

## Terminal recording

- Install Terminalizer with `npm install -g terminalizer`
- Start the recording with where you want the recording file to be stored like `terminalizer record ./src/static/some-recording.yml --config terminalizerrc.yml`
- Use your terminal like normal, take your time as the rendered output will have a max idle time and can be edited
- Type `Ctrl` + `D` to stop the recording
- You can edit the recording file if you made any typos etc.
- Replay the recording file with `terminalizer play ./src/static/some-recording.yml`
- Render the recording file to an animated gif with `terminalizer render ./src/static/some-recording.yml --output ./src/static/some-recording.gif`
- Use the generated `.gif` with the `FullscreenImage` component like any other image file

## Technology

- Language: [Markdown](https://guides.github.com/features/mastering-markdown)
- Packages: [npm](https://www.npmjs.com)
- Wrapper: [MDX Deck](https://github.com/jxnblk/mdx-deck)
- UI: [React](https://reactjs.org)
- Styling: [Styled Components](https://www.styled-components.com)
- Linting: [ESLint](https://eslint.org)
- Formatting: [Prettier](https://prettier.io)
- Colors: [Nova](https://trevordmiller.com/projects/nova)
