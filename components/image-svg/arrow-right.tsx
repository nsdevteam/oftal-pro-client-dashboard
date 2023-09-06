import { FC } from 'react';

import { SVGProps } from '../../types/svg.types';

const ArrowRight: FC<SVGProps> = ({ maxHeight, maxWidth, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    {...props}
    viewBox="0 0 11 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.35715 4.6875C2.4602 4.68625 2.56237 4.70646 2.65709 4.74682C2.75182 4.78719 2.837 4.84682 2.90715 4.92187L9.97858 11.9531C10.2929 12.2656 10.2929 12.75 9.97858 13.0625L2.90715 20.0781C2.59287 20.3906 2.10572 20.3906 1.79144 20.0781C1.47715 19.7656 1.47715 19.2812 1.79144 18.9687L8.31287 12.5L1.79144 6.01563C1.47715 5.70313 1.47715 5.21875 1.79144 4.90625C1.94858 4.75 2.15287 4.67187 2.34144 4.67187L2.35715 4.6875Z"
      fill="#27272A"
    />
  </svg>
);

export default ArrowRight;
