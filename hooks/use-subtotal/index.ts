import { useEffect, useState } from 'react';
import { Control, useWatch } from 'react-hook-form';

import { IRequest } from '../../interface';

export const useSubtotal = (control: Control<IRequest, any>): number => {
  const { treatment, file } = useWatch({ control });
  const [treatmentAmount, setTreatmentAmount] = useState(0);
  const [recipeAmount, setRecipeAmount] = useState(0);

  useEffect(() => {
    setTreatmentAmount(() => {
      if (treatment === 'UC') return 2000;

      if (treatment === 'SHMC') return 1000;

      return 0;
    });
  }, [treatment]);

  useEffect(() => {
    setRecipeAmount(() => {
      if (file) return 5000;

      return 0;
    });
  }, [file]);

  return treatmentAmount + recipeAmount;
};
