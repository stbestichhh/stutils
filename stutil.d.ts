import { PathLike } from 'fs';

// fs
export interface CreateOptions {
  create: boolean;
  recursive?: boolean;
  content?: string;
}

export function isExistsSync(path: PathLike, options?: CreateOptions): boolean;
export function isExists(
  path: PathLike,
  options?: CreateOptions,
): Promise<boolean>;

// cli
export interface OptionsType {
  [key: string]: string | boolean;
}

export function parseArgs(argv: string[]): OptionsType;
export const options: OptionsType;

// linked list
export class LinkedList<T> {
  constructor(values?: T[]);
  public add(value: T): void;
  public remove(value: T): boolean;
  public removeIdx(index: number): boolean;
  public contains(value: T): boolean;
  public indexOf(value: T): number;
  public get(index: number): T;
  public getSize(): number;
  public toArray(): Array<T>;
}

// arrays
export class Arrays extends Array {
  public static unique<T>(array: T[]): T[];
  public static chunk<T>(array: T[], size: number): T[][];
  public static asort<T extends string | number>(array: Array<T>): T[];
  public static dsort<T extends string | number>(array: Array<T>): T[];
  public static toList<T>(array: T[]): LinkedList<T>;
  public static sum(array: number[], start: number = 0, end: number = array.length - 1): number; 
}
