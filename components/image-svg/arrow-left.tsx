import { FC } from 'react';

import { SVGProps } from '../svg/svg.types';

const ArrowLeft: FC<SVGProps> = ({ maxHeight, maxWidth, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 11 25"
    fill="none"
    {...props}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.64286 20.3125C8.53982 20.3137 8.43765 20.2935 8.34292 20.2532C8.2482 20.2128 8.16302 20.1532 8.09286 20.0781L1.02144 13.0469C0.707149 12.7344 0.707149 12.25 1.02144 11.9375L8.09286 4.92188C8.40715 4.60938 8.89429 4.60938 9.20858 4.92188C9.52286 5.23438 9.52286 5.71875 9.20858 6.03125L2.68715 12.5L9.20858 18.9844C9.52286 19.2969 9.52286 19.7812 9.20858 20.0937C9.05143 20.25 8.84715 20.3281 8.65858 20.3281L8.64286 20.3125Z"
      fill="#27272A"
    />
  </svg>
);

export default ArrowLeft;
