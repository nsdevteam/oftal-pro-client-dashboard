import React, { ChangeEvent, FC, useState } from 'react';

import { Input, Typography } from '../../elements';

const FileName: FC = () => {
  const [fileName, setFileName] = useState<string>('');

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFileName(selectedFile.name);
    } else {
      setFileName('');
    }
  };

  return (
    <>
      <Input
        p="L"
        type="file"
        multiple
        accept=".doc,.pdf,.jpg,.jpeg,.png"
        borderRadius="M"
        border="none"
        color="#FFF"
        className="inputFile"
        mr={['NONE', 'S']}
        ml={['NONE', 'S']}
        fontWeight="bold"
        width={['12rem', 'NONE']}
        minWidth={['100%', '10rem']}
        bg="#4763E4"
        onChange={handleFileChange}
      />
      {fileName && (
        <Typography padding="0.5rem">Ficheiro: {fileName}</Typography>
      )}
    </>
  );
};

export default FileName;
