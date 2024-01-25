import { css } from '@emotion/react';
import stylin from '@stylin.js/react';
import { RefAttributes } from 'react';

import { TextareaElementProps, TextareaProps } from './textarea.types';

const Textarea = stylin<TextareaProps & RefAttributes<TextareaElementProps>>(
  'textarea'
)(
  css({
    width: '100%',
    height: '100%',
    outline: 'none',
    padding: '0.75rem',
    overflow: 'hidden',
    borderRadius: '0.8rem',
    background: 'transparent',
    border: '1px solid #CDCDCD',
    '&:-internal-autofill-selected': {
      background: 'transparent',
    },
    '&:focus-visible': {
      outline: 'none',
    },
  })
);

export default Textarea;
