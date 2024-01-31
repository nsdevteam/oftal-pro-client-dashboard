import { StylinComponentProps } from '@stylin.js/react';
import { ButtonHTMLAttributes } from 'react';

export type ButtonElementProps = StylinComponentProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'>;

export type ButtonProps = ButtonElementProps;
