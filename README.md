[![Node.js CI](https://github.com/stbestichhh/stutils/actions/workflows/node.js.yml/badge.svg)](https://github.com/stbestichhh/stutils/actions/workflows/node.js.yml)
[![NPM Version](https://img.shields.io/npm/v/st-nodeutils)](https://www.npmjs.com/package/st-nodeutils)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)

# @stlib/utils

## Getting started

### Installation

```shell
$ yarn add st-nodeutils
```

> [!IMPORTANT]
> **Node.js 18.x+** version must be installed in your OS.

### Usage
#### Linked List
```typescript
class LinkedList<T> {
  constructor(values?: T[]); // initialize empty list or with passed values
  public add(value: T): void; // add value to the list
  public remove(value?: T): boolean; // remove last node or with the same value from the list
  public removeIdx(index: number): boolean; // remove value from the list by index
  public contains(value: T): boolean; // check if list contains a value
  public indexOf(value: T): number; // get index of the value
  public get(index: number): T; // get value by index
  public getSize(): number; // get size of the list
  public toArray(): Array<T>; // convert list to array
}
```

#### Arrays
```typescript
export class Arrays extends Array {
  public static unique<T>(array: T[]): T[]; // remove duplicates
  public static chunk<T>(array: T[], size: number): T[][]; // single array to chunks
  public static asort<T extends string | number>(array: Array<T>): T[]; // sort in ascending order
  public static dsort<T extends string | number>(array: Array<T>): T[]; // sort in descending order
  public static toList<T>(array: T[]): LinkedList<T>; // convert to linked list
  public static sum(array: number[], start: number = 0, end: number = array.length - 1): number // sum all elements in bounds of array
}
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
```typescript
CreateOptions {
  create: boolean; // create missing file 
  recursive?: boolean; // recursive creation
  content?: string; // write something to the created file
}
```

#### Args parser
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
import { options } from 'st-nodeutils';

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
