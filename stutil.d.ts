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
  constructor();
  public add(value: T): void;
  public remove(value: T): boolean;
  public removeIdx(index: number): boolean;
  public contains(value: T): boolean;
  public indexOf(value: T): number;
  public get(index: number): T;
  public getSize(): number;
  public toArray(): Array<T>;
}
