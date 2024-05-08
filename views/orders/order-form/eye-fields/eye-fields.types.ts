import { Dispatch, SetStateAction } from 'react';

export interface EyeFieldsProps {
  label: string;
  disabled: boolean;
  isAddition: boolean;
  name: 'rightEye' | 'leftEye';
  setAddition: Dispatch<SetStateAction<boolean>>;
}
