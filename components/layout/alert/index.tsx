import React, { FC, useEffect } from 'react';

import { Typography } from '../../../elements';
import { AlertProps } from '../../../interface';

const Alert: FC<AlertProps> = ({ type, msg, removeAlert }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);
  return <Typography className={`alert${type}`}>{msg}</Typography>;
};

export default Alert;
