import { DropdownProps } from '../../../elements/dropdown/dropdown.types';

export interface OrderFormProps {
  closeForm: () => void;
}

interface IEye {
  axis?: string;
  active: boolean;
  cylinder?: string;
  spherical?: string;
  additional?: string;
}

export interface IOrderForm {
  leftEye: IEye;
  rightEye: IEye;
  minimumHeight: string;
  prisma: 'true' | 'false';
  precal: 'true' | 'false';
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
}
