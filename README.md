# Serenity/JS Cucumber Playwright Demo

## Overview

## Quick Start

### Run locally

#### Prerequisites
You'll need the following software installed on your machine to run this demo:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Java JRE 17+](https://www.oracle.com/java/technologies/java-se-glance.html)

#### Clone this repository

```shell
git clone <your-repo-url>
cd <your-project>
```

#### Install dependencies

Install the project dependencies and [Playwright browsers](https://playwright.dev/docs/browsers):

```shell
npm ci
npx playwright install
```

#### Run the tests

Run the example tests:
```
npm test
```

#### View reports

View the Serenity BDD report generated under `./target/site/serenity/index.html`

Alternatively, serve the Serenity BDD report using the built-in HTTP server,
accessible at [http://localhost:8080](http://localhost:8080):
```
npm run start
```

## Execution

The project provides several [NPM scripts](https://docs.npmjs.com/cli/v6/using-npm/scripts) defined in [`package.json`](package.json):

```
npm run lint            # runs code linter
npm run lint:fix        # attempts to automatically fix linting issues
npm run clean           # removes reports from any previous test run
npm test                # executes the example test suite
                        # and generates the report under ./target/site/serenity
npm start               # starts a mini HTTP server and serves the test reports
                        # at http://localhost:8080
```

### Test execution modes

```shell
# Run all tests
npm test

# Run specific feature file
npm test -- features/authentication/form-based_authentication.feature

# Run tests with specific tags
npm test -- --tags "@smoke"

# Run tests in headed mode (see the browser)
HEADLESS=false npm test

# Run tests with different configuration
npm test -- --profile <profile-name>
```

## Next steps

- Replace the example tests with your own
- Add new tasks, interactions, and assertions using Serenity/JS
- Extend the test suite or integrate it into CI/CD pipelines
- Use the sample reports to understand expected testing and reporting workflows


## Documentation

- [Using Serenity/JS with Cucumber](https://serenity-js.org/handbook/test-runners/cucumber/)
- [API Reference](https://serenity-js.org/api/)
- [Screenplay Pattern Guide](https://serenity-js.org/handbook/design/screenplay-pattern/)
- [Serenity/JS Project Templates](https://serenity-js.org/handbook/project-templates/)
- [More examples and reference implementations](https://github.com/serenity-js/serenity-js/tree/main/examples)
- [Tutorial: First Web Scenario](https://serenity-js.org/handbook/tutorials/your-first-web-scenario/)
- [Tutorial: First API Scenario](https://serenity-js.org/handbook/tutorials/your-first-api-scenario/)

