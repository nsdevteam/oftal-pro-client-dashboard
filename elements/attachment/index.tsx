import { ChangeEventHandler, FC } from 'react';

import { Box, Typography } from '../index';
import { AttachmentProps } from './attachment.types';

const Attachment: FC<AttachmentProps> = ({ label, files, onChange }) => {
  const handleOnChangeFile: ChangeEventHandler<HTMLInputElement> = (e) =>
    onChange(e.target.files ?? ([] as unknown as FileList));

  return (
    <Box>
      <input
        multiple
        type="file"
        id="attachment"
        name="attachment"
        style={{ display: 'none' }}
        onChange={handleOnChangeFile}
        accept=".doc,.pdf,.jpg,.jpeg,.png"
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
          nHover={{ opacity: 0.8 }}
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
    </Box>
  );
};

export default Attachment;
