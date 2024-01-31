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
  leftEye: IEye;
  rightEye: IEye;
  diameter: number;
  minimumHeight: string;
  prisma: boolean;
  precal: boolean;
  coloring: 'true' | 'false';
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
  extends Pick<DropdownProps, 'label' | 'values' | 'legend' | 'disabled'> {
  name: keyof Omit<IOrderForm, 'leftEye' | 'rightEye'>;
  isBoolean?: boolean;
}
