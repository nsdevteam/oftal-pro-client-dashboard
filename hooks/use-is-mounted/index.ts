import { useEffect, useState } from 'react';

import { TUseIsMounted } from './use-is-mounted.types';

const useIsMounted: TUseIsMounted = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  });

  return isMounted;
};

export default useIsMounted;
