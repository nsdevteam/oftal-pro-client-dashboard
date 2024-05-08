import { ReactNode } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IEmptyObject {}

export interface MenuProps {
  url: string;
  title: string;
  icon: ReactNode;
}

export enum orderStatusEnum {
  Pendente,
  Encomendado,
}

export interface OrderFormProps {
  closeForm: () => void;
}

interface IEye {
  axis?: string;
  active: boolean;
  cylinder?: string;
  addition?: string;
  spherical?: string;
}

export interface IAdmin {
  email: string;
  fullName: string;
  lastLoginAt?: number;
}

export interface IClient {
  type: number;
  email: string;
  fullName: string;
  createdAt?: number;
  lastLoginAt?: number;
  phoneNumber?: string;
  clientId: `CL${number}`;
}

export interface IOrder {
  ref: string;
  leftEye?: IEye;
  rightEye?: IEye;
  prisma: boolean;
  diameter: number;
  coloring: boolean;
  precal?: FileList;
  recipe?: FileList;
  observation: string;
  minimumHeight: string;
  clientId: `CL${number}`;
  status: orderStatusEnum;
  precals?: ReadonlyArray<string>;
  recipes?: ReadonlyArray<string>;
  refractiveIndex: string | undefined;
  treatment: 'HMC' | 'SHMC' | 'UC' | 'HC';
  color: 'white' | 'photochromatic' | 'transitions' | 'polarised';
  type:
    | 'single-focal'
    | 'boost'
    | 'dynamic'
    | 'extend'
    | 'office'
    | 'invisible'
    | 'bifocal';
}

export type TRowData = ReadonlyArray<
  Record<string, ReactNode | string | number | undefined>
>;

export interface TableProps {
  data: TRowData;
  columns: Record<string, string>;
  special?: Record<string, 'date'>;
  onSelect: (index: number) => void;
}

export interface IUserPrices {
  extra: Record<string, number>;
  lens: Record<string, ReadonlyArray<number | null>>;
}
