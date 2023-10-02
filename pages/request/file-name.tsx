import { FC } from 'react';
import { Control, useWatch } from 'react-hook-form';

import { Typography } from '../../elements';
import { FormData } from '../../hooks/use-form-input';

const FileName: FC<{ control: Control<FormData> }> = ({ control }) => {
  const files = useWatch({ control, name: 'file' });
  const filename = files
    ? [...(files as unknown as Array<File>)][0]?.name ?? ''
    : '';

  console.log('>> files :: ', files);

  if (!filename) return null;

  return <Typography padding="0.5rem">Ficheiro: {filename}</Typography>;
};

export default FileName;
