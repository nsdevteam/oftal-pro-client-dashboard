import { FC } from 'react';

import { SVGProps } from './svg.types';

const Menu: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 14 9"
    fill="none"
    {...props}
  >
    <path d="M14 2H0V0H14V2Z" fill="currentColor" />
    <path d="M14 9H0V7H14V9Z" fill="currentColor" />
  </svg>
);

export default Menu;
