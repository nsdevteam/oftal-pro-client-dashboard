import { ReactNode } from 'react';
import { Props } from 'react-modal';

export interface ModalProps {
  modalProps: Props;
  background?: string;
  children?: ReactNode;
}
