// eslint-disable-next-line @typescript-eslint/no-empty-interface

import { ReactNode } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IEmptyObject {}

export type MaybeArray<T> = T | Array<T>;

export interface Links {
  id: number;
  url: string;
  title: string;
  icon: ReactNode;
  submenu?: string;
}

export interface Notification {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  currentDate: string;
}

export interface Address {
  id: number;
  province: string;
  city?: string;
  street?: string;
  apt?: string;
}

export interface Refraction {
  id: number;
  value: string;
}
