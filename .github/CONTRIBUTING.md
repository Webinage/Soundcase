# Soundcase Contributing Guide

Hi! I'm really excited that you are interested in contributing to Soundcase. Before submitting your contribution, please make sure to take a moment and read through the following guidelines:

- [Code of Conduct](https://github.com/soundcase/soundcase/blob/master/.github/CODE_OF_CONDUCT.md)
- [Issue Reporting Guidelines](#issue-reporting-guidelines)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)

## Issue Reporting Guidelines

- Always use [https://github.com/Soundcase/Soundcase/issues](https://github.com/Soundcase/Soundcase/issues) to create new issues.

## Pull Request Guidelines

- The `master` branch is just a snapshot of the latest stable release. All development should be done in dedicated branches. **Do not submit PRs against the `master` branch.**

- Checkout a topic branch from the relevant branch, e.g. `dev`, and merge back against that branch.

- Work in the `src` folder and **DO NOT** checkin `dist` in the commits.

- It's OK to have multiple small commits as you work on the PR - GitHub will automatically squash it before merging.

- Make sure `npm test` passes. (see [development setup](#development-setup))

- If adding a new feature:

  - Add accompanying test case.
  - Provide a convincing reason to add this feature. Ideally, you should open a suggestion issue first and have it approved before working on it.

- If fixing bug:
  - If you are resolving a special issue, add `(fix #xxxx[,#xxxx])` (#xxxx is the issue id) in your PR title for a better release log, e.g. `update entities encoding/decoding (fix #3899)`.
  - Provide a detailed description of the bug in the PR. Live demo preferred.
  - Add appropriate test coverage if applicable.

## Development Setup

You will need [Node.js](http://nodejs.org) **version 8+**, [Java Runtime Environment](http://www.oracle.com/technetwork/java/javase/downloads/index.html) (for running Selenium server during e2e tests) and [yarn](https://yarnpkg.com/en/docs/install).

After cloning the repo, run:

```bash
$ yarn # install the dependencies of the project
```

### Committing Changes

Commit messages should follow the [commit message convention](./COMMIT_CONVENTION.md) so that changelogs can be automatically generated. Commit messages will be automatically validated upon commit. If you are not familiar with the commit message convention, you can use `npm run commit` instead of `git commit`, which provides an interactive CLI for generating proper commit messages.

### Commonly used NPM scripts

```bash
# watch and run the documentation app
$ npm run docs

# build all dist files, including npm packages and typings .d.ts files
$ npm run build

# run the full test suite, including linting/type checking
$ npm test
```

<!-- There are some other scripts available in the `scripts` section of the `package.json` file.

The default test script will do the following: lint with ESLint -> type check with Flow -> unit tests with coverage -> e2e tests. **Please make sure to have this pass successfully before submitting a PR.** Although the same tests will be run against your PR on the CI server, it is better to have it working locally. -->

## Project Structure

- **`dist`**: Contains built files for distribution. Note this directory is only available when you build the project from source files with `npm run builg`.

- **`docs`**: Contains the docusaurus documentation. Usually, you don't need to touch them. However, if you plan on documenting the code it would be helpful to familiarize yourself with the following files/folders:

  - `docs/docs/`: Contains all the documentation items. Written in markdown.

  - `docs/website/sidebars.json`: Index and organise all the documentation.

<!-- - **`test`**: contains all tests. The unit tests are written with [Jasmine](http://jasmine.github.io/2.3/introduction.html) and run with [Karma](http://karma-runner.github.io/0.13/index.html). The e2e tests are written for and run with [Nightwatch.js](http://nightwatchjs.org/). -->

- **`src`**: contains the source code. The codebase is written in Typescript

  - **`classes`**: xxx.

    Consist of.

    - **`xxx`**: contains code related to xxx.

    - **`xxx`**: contains code related to xxx.

  - **`types`**: contains TypeScript type definitions.

    Consist of.

  - **`utils`**: xxx.

    Consist of.

  - `utils/xxx.ts`: xxx.

## Financial Contribution

As a pure community-driven project without major corporate backing, we also welcome financial contributions via Patreon and OpenCollective.

- [Become a backer or sponsor on Patreon](https://www.patreon.com/lenoirc)
- [Become a backer or sponsor on OpenCollective](https://opencollective.com/soundcase)
- [One-time donation via PayPal](https://paypal.me/xledocteurx)

### What's the difference between Patreon and OpenCollective funding?

Funds donated via Patreon go directly to support Christopher Lenoir's full-time work on Soundcase. Funds donated via OpenCollective are managed with transparent expenses and will be used for compensating work and expenses for core team members or sponsoring community events. Your name/logo will receive proper recognition and exposure by donating on either platform.

## Credits

Thank you to all the people who have already contributed to Soundcase!

<a href="https://github.com/soundcase/soundcase/graphs/contributors"><img src="https://opencollective.com/soundcase/contributors.svg?width=890" /></a>
