// eslint-disable-next-line @typescript-eslint/no-empty-interface

import { ReactNode } from 'react';

import { FormData } from '../hooks/use-form-input';

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
  id: string;
  province: string;
  state: string;
  city?: string;
  street?: string;
  apt?: string;
  house?: string;
  building?: string;
}

export interface Payment {
  entity?: string;
  amount?: number;
  reference?: string;
  phoneNumber?: number;
}

export interface Refraction {
  id: number;
  value: string;
}

export interface Indices {
  id: number;
  size: string;
}

export type TTableHeadings = Pick<
  FormData,
  'patientName' | 'geometry' | 'refraction' | 'color' | 'treatment' | 'diameter'
>;

export type TRowData = Record<
  keyof TTableHeadings,
  string | number | undefined
>;
