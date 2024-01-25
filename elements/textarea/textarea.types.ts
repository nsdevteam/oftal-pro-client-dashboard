import { StylinComponentProps } from '@stylin.js/react';
import { TextareaHTMLAttributes } from 'react';

export type TextareaElementProps = Omit<
  TextareaHTMLAttributes<HTMLInputElement>,
  'color' | 'width' | 'height' | 'size'
>;

export type TextareaProps = TextareaElementProps & StylinComponentProps;
