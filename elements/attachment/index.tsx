import { ChangeEventHandler, FC } from 'react';

import { Box, Button, Typography } from '../index';
import { AttachmentProps } from './attachment.types';

const Attachment: FC<AttachmentProps> = ({ label, files, onChange }) => {
  const handleOnChangeFile: ChangeEventHandler<HTMLInputElement> = (e) =>
    onChange(e.target.files ?? ([] as unknown as FileList));

  return (
    <Box as="label">
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
        <Button aria-label="add attachment">{label}</Button>
        {!!files.length && (
          <Typography color="white">{files.length}</Typography>
        )}
      </Box>
    </Box>
  );
};

export default Attachment;
