export interface Dic<T> {
  [key: string]: T;
}

export type Dic2<T> = Map<string, T>;
