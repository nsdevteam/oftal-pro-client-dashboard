import { ChangeEventHandler, FC } from 'react';

import { Box, Input, Typography } from '../../elements';

type AddAttachmentsProps = {
  label: string;
  files: FileList;
  onChange: (file: FileList) => void;
};

export const AddAttachments: FC<AddAttachmentsProps> = ({
  files,
  onChange,
}) => {
  const handleOnChangeFile: ChangeEventHandler<HTMLInputElement> = (e) =>
    onChange(e.target.files ?? ([] as unknown as FileList));

  return (
    <Box
      as="div"
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      mt="2.1rem"
    >
      <Input
        className="input-file"
        p="L"
        type="file"
        multiple
        accept=".doc,.pdf,.jpg,.jpeg,.png"
        borderRadius="M"
        border="none"
        color="#FFF"
        mr={['NONE', 'S']}
        ml={['NONE', 'S']}
        fontWeight="bold"
        width={['12rem', 'NONE']}
        minWidth={['100%', '10rem']}
        bg="#4763E4"
        placeholder="23SW34B"
        onChange={handleOnChangeFile}
      />
      {!!files.length && <Typography color="white">{files.length}</Typography>}
    </Box>
  );
};
