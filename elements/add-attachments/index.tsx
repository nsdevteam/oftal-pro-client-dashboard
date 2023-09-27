import { ChangeEventHandler, FC } from 'react';

import { Box, Typography } from '../index';

type AddAttachmentsProps = {
  label: string;
  files: FileList;
  onChange: (file: FileList) => void;
};

export const AddAttachments: FC<AddAttachmentsProps> = ({
  label,
  files,
  onChange,
}) => {
  const handleOnChangeFile: ChangeEventHandler<HTMLInputElement> = (e) =>
    onChange(e.target.files ?? ([] as unknown as FileList));

  return (
    <div>
      <input
        type="file"
        multiple
        accept=".doc,.pdf,.jpg,.jpeg,.png"
        name="attachment"
        id="attachment"
        style={{ display: 'none', marginBottom: '15px' }}
        onChange={handleOnChangeFile}
      />
      <Box display="flex" columnGap="8px" alignItems="center">
        <Box
          as="label"
          color="#FFF"
          fontWeight="bold"
          fontSize="12px"
          height="40px"
          width="200px"
          padding="1rem"
          cursor="pointer"
          hover={{ opacity: 0.8 }}
          aria-label="add attachment"
          backgroundSize="contain"
          backgroundRepeat="no-repeat"
          backgroundImage="url(/add-an-attachment.png)"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {label}
        </Box>
        {!!files.length && (
          <Typography color="white">{files.length}</Typography>
        )}
      </Box>
    </div>
  );
};
