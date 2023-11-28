// eslint-disable-next-line @typescript-eslint/no-empty-interface

import { ReactNode } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IEmptyObject {}

export type MaybeArray<T> = T | Array<T>;

export interface MenuProps {
  id: number;
  url: string;
  title: string;
  icon: ReactNode;
}

export interface NotificationProps {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  currentDate: string;
}

export interface AddressProps {
  id: string;
  province: string;
  state: string;
  city?: string;
  street?: string;
  apt?: string;
  house?: string;
  building?: string;
}

export interface PaymentProps {
  entity?: string;
  amount?: number;
  reference?: string;
  phoneNumber?: number;
}

export interface RefractionProps {
  id: number;
  value: string;
}

export interface IndicesProps {
  id: number;
  size: string;
}

export interface IRequest extends IClient {
  leftSpherical?: number;
  leftCylinder?: number;
  leftAxis?: number;
  rightSpherical?: number;
  rightCylinder?: number;
  rightAxis?: number;
  refraction?: string;
  geometry?: string;
  indiceOfRefraction?: number;
  color?: string;
  treatment?: string;
  diameter?: number;
  alway?: number;
  coloring?: number;
  prism?: number;
  precal?: number;
  patientName: string;
  jobReference: string;
  observation: string;
  file?: FileList | unknown;
  amount?: number;
  address?: AddressProps | undefined;
  payment?: PaymentProps | undefined;
}

export type TTableHeadings = Pick<
  IRequest,
  | 'patientName'
  | 'geometry'
  | 'indiceOfRefraction'
  | 'color'
  | 'treatment'
  | 'diameter'
>;

export type TRowData = Record<
  keyof TTableHeadings,
  string | number | undefined
>;

export interface IClient {
  id?: string;
  fullName?: string;
  email?: string;
  password?: string;
}
