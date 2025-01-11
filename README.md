[![Node.js CI](https://github.com/stbestichhh/stlib-utils/actions/workflows/node.js.yml/badge.svg)](https://github.com/stbestichhh/stlib-utils/actions/workflows/node.js.yml)
[![NPM Version](https://img.shields.io/npm/v/@stlib/utils)](https://www.npmjs.com/package/@stlib/utils)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)

# @stlib/utils

## Table of contents

* [Description](#about)
* [Getting started](#getting-started)
  * [Instalation](#installation)
  * [Usage](#usage)
* [Contributing](#contributing)
* [Changelog](#changelog)
* [Authors](#authors)
* [License](#license)

## About

**stlib** - is a library with utilities and functions which makes developing easier. This library
also provides types for every utility and their params.

## Getting started

### Installation

```shell
$ yarn add @stlib/utils
```

> [!IMPORTANT]
> **Node.js 18.x+** version must be installed in your OS.

### Usage

#### Error utilities:

```TypeScript
abstract class AbstractError {}

// Provides template for your custom errors.

// Usage:
class CustomError extends AbstractError {
  constructor() {
    super('Message', { option: 'smth' }); // second parameter is optional
  }
  
  readonly code = 500;
}

const error = new CustomError();

error.code; // return error code
error.name; // return name of the error
error.message; // return error message
error.options; // return error options
error.serialize() // return formatted output with detailed error info
```

```TypeScript
isError(error: unknown): boolean;

// checks object or param to be instance of error
```

```TypeScript
handleErrorSync(error: unknown, options?: HandleErrorOptions,): { handledError: unknown };

// Handles error synchronously.
// It can log error to console, throw error and write it to log file.
```

```TypeScript
handleError(error: unknown, callback: () => T | Promise<T>, options?: HandleErrorOptions,): Promise<{ callbackResult: T | undefined, handledError: unknown }>;

// Handles error asynchronously.
// It can log error to console, throw error, write it to log file and calls a callback before error will be thrown.
```

Object type for options:
```
HandleErrorOptions {
  message?: string;
  throw?: boolean;
  toLog?: { path: PathLike; withStack?: boolean };
}
```

```TypeScript
logErrorSync(error: unknown, path: PathLike, stack?: boolean): void;

// Writes an error message and it's stack to the log file synchronously
```

```TypeScript
logError(error: unknown, path: PathLike, stack?: boolean): void;

// Writes an error message and it's stack to the log file asynchronously
```

#### File system utilities

```TypeScript
isExistsSync(path: PathLike, options?: CreateOptions): boolean;

// Checks is file or directory exists and creates it synchronously
```

```TypeScript
isExists(path: PathLike, options?: CreateOptions): boolean;

// Checks is file or directory exists and creates it asynchronously
```

Object type for options:
```
CreateOptions {
  create: boolean;
  recursive?: boolean;
  content?: string;
}
```

#### CLI
Object type for arguments

```TypeScript
OptionsType {
  [key: string]: string;
}
```

```TypeScript
// Parses arhuments and return object
function parseArgs(argv: string[]): OptionsType;

// Object with parsed arguments
const options: OptionsType;
```

**Example**
```shell
$ yarn ts-node index.ts -a --b -c=1 --d= 2 --e=smth=3 -f 4
```

```TypeScript
import { options } from '@stlib/utils';

console.log(options);

// Output: { a: true, b: true, c: '1', d: '2', e: 'smth=3', f: '4' }
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Changelog

Project changes are writen in changelog, see the [CHANGELOG.md](CHANGELOG.md).

We use [SemVer](https://semver.org/) for versioning.
For the versions available, see the [tags](https://github.com/stbestichhh/stlib-utils/tags) on this repository.
For the versions supported, see the [SECURITY.md](SECURITY.md).

## Authors

- [@stbestichhh](https://www.github.com/stbestichhh)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE)
