import stylin from '@stylin.js/react';
import { forwardRef } from 'react';

import { BoxProps } from './box.types';

const Box = forwardRef(({ as, ...props }: BoxProps, ref) => {
  const BoxElement = stylin(as || 'div')();

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <BoxElement {...props} ref={ref} />;
});

Box.displayName = 'Box';

export default Box;
