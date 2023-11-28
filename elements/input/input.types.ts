import { StylinComponentProps } from '@stylin.js/react';
import { CSSProperties, InputHTMLAttributes, ReactNode } from 'react';

import { BoxProps } from '../box/box.types';

export type InputElementProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'color' | 'width' | 'height' | 'size'
>;

export type InputFieldProps = InputElementProps & StylinComponentProps;

export interface InputProps extends InputFieldProps {
  Prefix?: ReactNode;
  Suffix?: ReactNode;
  shieldProps?: BoxProps;
  onClickPrefix?: () => void;
  onClickSuffix?: () => void;
  outline?: CSSProperties['outline'];
}
