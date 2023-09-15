// eslint-disable-next-line @typescript-eslint/no-empty-interface

import { ReactNode } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IEmptyObject {}

export type MaybeArray<T> = T | Array<T>;

export interface Links {
  map(arg0: (socialIcon: any) => JSX.Element): import('react').ReactNode;
  map(arg0: (link: any) => JSX.Element): import('react').ReactNode;
  id: number;
  url: string;
  title: string;
  icon: ReactNode;
  submenu?: unknown;
}

export interface Notification {
  map(arg0: (socialIcon: any) => JSX.Element): import('react').ReactNode;
  map(arg0: (link: any) => JSX.Element): import('react').ReactNode;
  id: number;
  title: string;
  description: string;
  createdAt: ReactNode;
  currentDate: unknown;
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
