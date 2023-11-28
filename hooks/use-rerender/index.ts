import { useState } from 'react';

import { IEmptyObject } from '../../interface';

type TUseRerender = () => {
  renderer: IEmptyObject;
  rerender: () => void;
};

const useRerender: TUseRerender = () => {
  const [renderer, setRenderer] = useState<IEmptyObject>({});

  return {
    renderer,
    rerender: () => setRenderer({}),
  };
};

export default useRerender;
