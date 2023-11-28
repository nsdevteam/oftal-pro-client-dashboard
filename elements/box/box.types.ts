import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';

export type BoxElementProps = Omit<HTMLAttributes<HTMLDivElement>, 'color'> &
  StylinComponentProps;

export interface BoxProps extends BoxElementProps {
  as?: keyof JSX.IntrinsicElements;
}
