import { FC } from 'react';

import { SVGProps } from '../../types/svg.types';

const LogoImage: FC<SVGProps> = ({ maxHeight, maxWidth, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    {...props}
    viewBox="0 0 318 274"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M24.5774 251.168C20.1451 251.168 16.4678 249.645 13.3342 246.512C10.2007 243.377 8.6773 239.7 8.6773 235.268C8.6773 230.836 10.2007 227.158 13.3337 224.025C16.4678 220.891 20.1451 219.368 24.5774 219.368C29.0098 219.368 32.6871 220.891 35.8212 224.025C38.9542 227.158 40.4776 230.836 40.4776 235.268C40.4776 239.7 38.9542 243.378 35.8212 246.511C32.6871 249.645 29.0098 251.168 24.5774 251.168ZM24.5774 210.69C17.8333 210.69 11.9838 213.119 7.1917 217.911C2.41966 222.683 0 228.523 0 235.268C0 242.013 2.41966 247.853 7.1917 252.626C11.9832 257.416 17.8327 259.845 24.5774 259.845C31.3249 259.845 37.1667 257.415 41.9304 252.63C46.7246 247.857 49.1554 242.015 49.1554 235.268C49.1554 228.521 46.7246 222.679 41.9392 217.914C37.1661 213.121 31.3243 210.69 24.5774 210.69Z"
      fill="#50ADE5"
    />
    <path
      d="M79.6154 210.776C72.869 210.776 66.975 213.196 62.2035 217.968C57.4126 222.759 54.929 228.608 54.929 235.353V273.247H63.8248V246.003H83.8403V237.108H63.8248V235.353C63.8248 230.921 65.2931 227.243 68.4317 224.105C71.5647 220.956 75.213 219.426 79.6426 219.426C80.0401 219.426 80.4432 219.441 80.8141 219.472L83.8403 219.725V210.914L81.1449 210.806C80.6551 210.786 80.1258 210.776 79.6154 210.776Z"
      fill="#50ADE5"
    />
    <path
      d="M99.408 204.86H91.0682V240.993C91.0682 246.144 92.8741 250.613 96.5531 254.269C100.196 257.913 104.622 259.76 109.768 259.76C113.495 259.76 116.871 258.779 119.849 256.846L121.092 256.023V244.302L116.452 248.515C114.545 250.243 112.35 251.083 109.733 251.083C106.923 251.083 104.471 250.116 102.482 248.127C100.493 246.138 99.408 243.805 99.408 240.993V220.984H121.092V212.088H99.408V204.86Z"
      fill="#50ADE5"
    />
    <path
      d="M151.566 219.368C155.998 219.368 159.675 220.891 162.809 224.025C165.942 227.158 167.466 230.836 167.466 235.269C167.466 239.7 165.942 243.378 162.809 246.511C159.675 249.645 155.997 251.168 151.566 251.168C147.134 251.168 143.456 249.645 140.322 246.512C137.189 243.378 135.665 239.7 135.665 235.269C135.665 230.836 137.189 227.158 140.322 224.025C143.456 220.891 147.134 219.368 151.566 219.368ZM151.566 210.691C144.821 210.691 138.972 213.12 134.18 217.911C129.408 222.684 126.988 228.524 126.988 235.269C126.988 242.012 129.407 247.859 134.184 252.657C138.974 257.427 144.822 259.846 151.566 259.846C155.936 259.846 159.953 258.738 163.744 256.543C165.035 255.786 166.126 254.93 167.238 253.98V258.235H176.134V235.269C176.134 228.521 173.708 222.679 168.922 217.914C164.149 213.121 158.312 210.691 151.566 210.691Z"
      fill="#50ADE5"
    />
    <path
      d="M183.362 258.235H191.702V200.969H183.362V258.235Z"
      fill="#50ADE5"
    />
    <path
      d="M234.154 248.477C230.506 252.124 226.103 253.948 220.945 253.948C215.786 253.948 211.383 252.124 207.735 248.477C204.089 244.81 202.266 240.408 202.266 235.268C202.266 230.109 204.089 225.706 207.735 222.059C211.383 218.393 215.786 216.56 220.945 216.56C226.103 216.56 230.506 218.393 234.154 222.059C237.801 225.706 239.625 230.109 239.625 235.268C239.625 240.408 237.801 244.81 234.154 248.477ZM220.945 213.47C214.936 213.47 209.686 215.596 205.416 219.848C201.165 224.118 198.93 229.259 198.93 235.268V270.467H202.266V246.407C204.192 249.658 206.791 252.228 210.06 254.118C213.405 256.084 217.034 257.066 220.945 257.066C226.954 257.066 232.085 254.93 236.336 250.66C240.606 246.407 242.742 241.278 242.742 235.268C242.742 229.259 240.606 224.118 236.336 219.848C232.085 215.596 226.954 213.47 220.945 213.47Z"
      fill="#253E6A"
    />
    <path
      d="M253.954 218.913C250.306 222.56 248.413 226.953 248.413 232.093V255.456H251.749V232.093C251.749 227.803 253.231 224.138 256.274 221.095C259.297 218.053 262.819 216.532 267.109 216.532C268.734 216.532 270.652 216.787 271.764 217.297V214.066C270.652 213.65 268.679 213.442 267.055 213.442C261.915 213.442 257.601 215.266 253.954 218.913Z"
      fill="#253E6A"
    />
    <path
      d="M309.411 248.477C305.764 252.124 301.36 253.948 296.201 253.948C291.044 253.948 286.64 252.124 282.993 248.477C279.346 244.83 277.522 240.427 277.522 235.268C277.522 230.109 279.346 225.706 282.993 222.059C286.64 218.412 291.044 216.589 296.201 216.589C301.36 216.589 305.764 218.412 309.411 222.059C313.059 225.706 314.882 230.109 314.882 235.268C314.882 240.427 313.059 244.83 309.411 248.477ZM311.594 219.876C307.342 215.606 302.212 213.47 296.201 213.47C290.193 213.47 285.053 215.606 280.782 219.876C276.531 224.128 274.405 229.259 274.405 235.268C274.405 241.278 276.531 246.407 280.782 250.66C285.053 254.93 290.193 257.066 296.201 257.066C302.212 257.066 307.342 254.93 311.594 250.66C315.864 246.407 318 241.278 318 235.268C318 229.259 315.864 224.128 311.594 219.876Z"
      fill="#253E6A"
    />
    <path
      d="M185.611 80.7493C185.611 66.7707 174.279 55.4391 160.301 55.4391C146.322 55.4391 134.99 66.7707 134.99 80.7493C134.99 94.728 146.322 106.06 160.301 106.06C174.279 106.06 185.611 94.728 185.611 80.7493Z"
      fill="white"
    />
    <path
      d="M160.189 0.000106812C115.592 0.000106812 79.5316 36.1526 79.5316 80.7495C79.5316 102.488 88.2884 122.218 102.188 136.735V82.4075C102.188 81.857 102.163 81.3044 102.163 80.7495C102.163 80.1941 102.188 79.6414 102.188 79.091V75.8713H102.19C104.7 46.4039 129.706 22.5726 160.189 22.5726C192.337 22.5726 218.398 48.6179 218.398 80.7656C218.398 112.913 192.221 138.967 160.073 138.967C145.666 138.967 132.211 133.722 122.204 125.052V152.141C133.879 158.112 146.434 161.498 160.073 161.498C204.669 161.498 240.88 125.346 240.88 80.7495C240.88 36.1526 204.785 0.000106812 160.189 0.000106812Z"
      fill="#253E6A"
    />
    <path
      d="M163.927 89.336C163.927 87.0976 165.742 85.2829 167.98 85.2829C169 85.2829 169.929 85.6626 170.641 86.2842C171.536 84.6262 172.045 82.7303 172.045 80.7149C172.045 74.2287 166.787 68.9702 160.301 68.9702C160.179 68.9702 160.061 68.9846 159.94 68.9885C160.125 69.5951 160.225 70.2373 160.225 70.9045C160.225 74.5328 157.284 77.4746 153.655 77.4746C152.096 77.4746 150.665 76.9286 149.538 76.0207C148.91 77.459 148.556 79.0447 148.556 80.7149C148.556 87.201 153.814 92.459 160.301 92.459C161.833 92.459 163.293 92.1565 164.635 91.6228C164.189 90.9717 163.927 90.1844 163.927 89.336Z"
      fill="#231F20"
    />
    <path
      d="M167.98 93.3886C165.742 93.3886 163.927 91.5744 163.927 89.336C163.927 87.0976 165.742 85.2829 167.98 85.2829C170.219 85.2829 172.033 87.0976 172.033 89.336C172.033 91.5744 170.219 93.3886 167.98 93.3886ZM153.656 77.4746C150.027 77.4746 147.085 74.5323 147.085 70.9045C147.085 67.2756 150.027 64.3338 153.656 64.3338C157.285 64.3338 160.226 67.2756 160.226 70.9045C160.226 74.5323 157.285 77.4746 153.656 77.4746ZM160.189 43.1557C139.427 43.1557 122.595 59.9871 122.595 80.7494C122.595 101.512 139.427 118.343 160.189 118.343C180.951 118.343 197.783 101.512 197.783 80.7494C197.783 59.9871 180.951 43.1557 160.189 43.1557Z"
      fill="#50ADE5"
    />
    <path
      d="M163.927 89.336C163.927 87.0976 165.742 85.2829 167.98 85.2829C169 85.2829 169.929 85.6626 170.641 86.2842C171.536 84.6262 172.045 82.7303 172.045 80.7149C172.045 74.2287 166.787 68.9702 160.301 68.9702C160.179 68.9702 160.061 68.9846 159.94 68.9885C160.125 69.5951 160.225 70.2373 160.225 70.9045C160.225 74.5328 157.284 77.4746 153.655 77.4746C152.096 77.4746 150.665 76.9286 149.538 76.0207C148.91 77.459 148.556 79.0447 148.556 80.7149C148.556 87.201 153.814 92.459 160.301 92.459C161.833 92.459 163.293 92.1565 164.635 91.6228C164.189 90.9717 163.927 90.1844 163.927 89.336Z"
      fill="#231F20"
    />
  </svg>
);

export default LogoImage;
