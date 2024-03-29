import { FC } from 'react';

import { SVGProps } from '../svg/svg.types';

const EyeSVG: FC<SVGProps> = ({ maxHeight, maxWidth, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    {...props}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_511_3603)">
      <path
        d="M0.666748 8.08003C0.666748 8.08003 3.33341 3.19336 8.00008 3.19336C12.6667 3.19336 15.3334 8.08003 15.3334 8.08003C15.3334 8.08003 12.6667 12.9667 8.00008 12.9667C3.33341 12.9667 0.666748 8.08003 0.666748 8.08003Z"
        stroke="#4B5563"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 9.91256C9.10457 9.91256 10 9.09212 10 8.08006C10 7.068 9.10457 6.24756 8 6.24756C6.89543 6.24756 6 7.068 6 8.08006C6 9.09212 6.89543 9.91256 8 9.91256Z"
        stroke="#4B5563"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_511_3603">
        <rect
          width="16"
          height="14.66"
          fill="white"
          transform="translate(0 0.75)"
        />
      </clipPath>
    </defs>
  </svg>
);

export default EyeSVG;
