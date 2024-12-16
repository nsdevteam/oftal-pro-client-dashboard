import { FC, useEffect,useState } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { IOrder } from '../../../interface';
import DropdownField from './dropdown-field';

const MinimumHeightField: FC<{ disabled: boolean }> = ({ disabled }) => {
  const { control, setValue } = useFormContext<IOrder>();
  const type = useWatch({ control, name: 'type' });
  const [show,setShow] = useState<boolean>(false);

  useEffect(()=>{
    if (['single-focal', 'bifocal'].includes(type)) {
      setValue('minimumHeight', '17');
      setShow(false);
    }else{
      setShow(true);
    }
  },[type]);        

  return (
    <>
    { show 
      ? 
      <DropdownField
      label="Altura mín"
      disabled={disabled}
      name="minimumHeight"
      values={['13', '15', '17', '19', '21']}
      /> 
      : 
      <></>
    }
    </>
 
  );
};

export default MinimumHeightField;
