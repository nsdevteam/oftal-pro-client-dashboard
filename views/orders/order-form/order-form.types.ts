import { DropdownProps } from '../../../elements/dropdown/dropdown.types';

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

export interface IOrderForm {
  ref: string;
  leftEye?: IEye;
  rightEye?: IEye;
  prisma: boolean;
  precal?: FileList;
  recipe?: FileList;
  diameter: number;
  coloring: boolean;
  observation: string;
  minimumHeight: string;
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

export interface EyeFieldsProps {
  label: string;
  name: 'rightEye' | 'leftEye';
}

export interface DropdownFieldProps
  extends Pick<
    DropdownProps,
    'label' | 'values' | 'legend' | 'disabled' | 'defaultValue'
  > {
  isBoolean?: boolean;
  name: keyof Omit<IOrderForm, 'leftEye' | 'rightEye'>;
  allowed?: [
    keyof Omit<IOrderForm, 'leftEye' | 'rightEye'>,
    ReadonlyArray<string | number>
  ];
}
