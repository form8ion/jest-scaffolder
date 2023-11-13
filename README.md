# jest-scaffolder

opinionated scaffolder for [Jest](https://jestjs.io)

<!--status-badges start -->

[![Node CI Workflow Status][github-actions-ci-badge]][github-actions-ci-link]
![SLSA Level 2][slsa-badge]
[![Codecov][coverage-badge]][coverage-link]

<!--status-badges end -->

## Table of Contents

* [Usage](#usage)
  * [Installation](#installation)
  * [Features](#features)
  * [Example](#example)
    * [Import](#import)
    * [Execute](#execute)
* [Contributing](#contributing)
  * [Dependencies](#dependencies)
  * [Verification](#verification)

## Usage

<!--consumer-badges start -->

[![MIT license][license-badge]][license-link]
[![npm][npm-badge]][npm-link]
[![Try @form8ion/jest-scaffolder on RunKit][runkit-badge]][runkit-link]

<!--consumer-badges end -->

### Installation

```sh
$ npm install @form8ion/jest-scaffolder --save-prod
```

### Features

* Includes [jest-when](https://www.npmjs.com/package/jest-when) since the mocks
  built into [Jest](https://jestjs.io) [do not enable conditional returns](https://github.com/facebook/jest/issues/6180)
  and can encourage behavior that relies on side effects

### Example

#### Import

```javascript
import {scaffold} from '@form8ion/jest-scaffolder';
```

#### Execute

```javascript
(async function example() {
  await scaffold({projectRoot: process.cwd()});
}());
```

## Contributing

<!--contribution-badges start -->

[![PRs Welcome][PRs-badge]][PRs-link]
[![Conventional Commits][commit-convention-badge]][commit-convention-link]
[![Commitizen friendly][commitizen-badge]][commitizen-link]
[![semantic-release][semantic-release-badge]][semantic-release-link]
[![Renovate][renovate-badge]][renovate-link]

<!--contribution-badges end -->

### Dependencies

```sh
$ nvm install
$ npm install
```

### Verification

```sh
$ npm test
```

[PRs-link]: http://makeapullrequest.com

[PRs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg

[commit-convention-link]: https://conventionalcommits.org

[commit-convention-badge]: https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg

[commitizen-link]: http://commitizen.github.io/cz-cli/

[commitizen-badge]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg

[semantic-release-link]: https://github.com/semantic-release/semantic-release

[semantic-release-badge]: https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release

[renovate-link]: https://renovatebot.com

[renovate-badge]: https://img.shields.io/badge/renovate-enabled-brightgreen.svg?logo=renovatebot

[license-link]: LICENSE

[license-badge]: https://img.shields.io/github/license/form8ion/jest-scaffolder.svg

[npm-link]: https://www.npmjs.com/package/@form8ion/jest-scaffolder

[npm-badge]: https://img.shields.io/npm/v/@form8ion/jest-scaffolder?logo=npm

[runkit-link]: https://npm.runkit.com/@form8ion/jest-scaffolder

[runkit-badge]: https://badge.runkitcdn.com/@form8ion/jest-scaffolder.svg

[github-actions-ci-link]: https://github.com/form8ion/jest-scaffolder/actions?query=workflow%3A%22Node.js+CI%22+branch%3Amaster

[github-actions-ci-badge]: https://github.com/form8ion/jest-scaffolder/workflows/Node.js%20CI/badge.svg

[slsa-badge]: https://slsa.dev/images/gh-badge-level2.svg

[coverage-link]: https://codecov.io/github/form8ion/jest-scaffolder

[coverage-badge]: https://img.shields.io/codecov/c/github/form8ion/jest-scaffolder?logo=codecov
