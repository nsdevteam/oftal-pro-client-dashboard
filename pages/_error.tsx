import { NextPageContext } from 'next';
import { ErrorProps } from 'next/error';
import { ReactElement } from 'react';

import { Typography } from '../elements';

const ErrorPage = ({ statusCode }: ErrorProps): ReactElement => (
  <Typography>
    {statusCode
      ? `Erro ${statusCode} ocorreu no servidor`
      : 'Ocorreu um erro no cliente'}
  </Typography>
);

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;

  return { statusCode };
};

export default ErrorPage;
