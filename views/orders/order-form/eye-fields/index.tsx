import { FC, useEffect, useState } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { Box, InputList, Typography } from '../../../../elements';
import { IOrder } from '../../../../interface';
import { EyeFieldsProps } from './eye-fields.types';
import EyeSpherical from './eye-spherical';

const EyeFields: FC<EyeFieldsProps> = ({
  name,
  label,
  disabled,
  isAddition,
  setAddition,
}) => {
  const { control, setValue, watch } = useFormContext<IOrder>();
  const eye = useWatch({ control, name: name });
  const type = useWatch({ control, name: 'type' });
  const cylinder = useWatch({control,name:`${name}.cylinder`});   
  
  return (
    <Box display="flex" flexDirection="column" gap="1rem">
      <Box display="flex" gap="1rem" alignItems="flex-end">
        <Typography>{label}</Typography>
        {type !== 'single-focal' && (
          <Typography as="label" fontSize="0.8rem">
            <input
              type="checkbox"
              disabled={disabled}
              defaultChecked={!isAddition}
              onClick={() => setAddition(!isAddition)}
            />{' '}
            Longe e Perto
          </Typography>
        )}
      </Box>
      <Box
        gap="0.5rem"
        display="grid"
        alignItems="center"
        gridTemplateColumns={['1rem 1fr 1fr', '1rem 1fr 1fr 1fr 1fr']}
      >
        <input
          type="checkbox"
          disabled={disabled}
          defaultChecked={eye?.active}
          onClick={() => setValue(name, { active: !eye?.active })}
        />
        <EyeSpherical
          name={name}
          isAddition={isAddition}
          disabled={disabled || !eye?.active}
        />
        <InputList
          label="Cilindro"
          defaultValue={eye?.cylinder}
          disabled={disabled || !eye?.active}
          onSelect={(value: string) => {
            const validValue = Number(value) - (Number(value) % 0.25);
            const isPositive = validValue > 0;

            setValue(
              `${name}.cylinder`,
              `${isPositive ? '+' : ''}${validValue.toFixed(2)}`
            );
          }}
        />
        <Box display={['block', 'none']} />
        {cylinder && cylinder != "0.00" && <InputList
          label="Eixo"
          defaultValue={eye?.axis}
          disabled={disabled || !eye?.active}
          onSelect={(value: string) => {
            const validValue = Number(value.replace('°', ''));

            setValue(
              `${name}.axis`,
              validValue > 180
                ? '180°'
                : validValue < 0
                ? '0°'
                : `${validValue}°`
            );
          }}
        />}   
        {type !== 'single-focal' && isAddition && (
          <InputList
            label="Adição"
            defaultValue={eye?.addition}
            disabled={disabled || !eye?.active}
            onSelect={(value: string) => {
              const validValue = Number(value) - (Number(value) % 0.25);

              setValue(
                `${name}.addition`,
                `+${(validValue > 3.5
                  ? 3.5
                  : validValue < 0.5
                  ? 0.5
                  : validValue - (validValue % 0.25)
                ).toFixed(2)}`
              );
            }}
          />
        )}
      </Box>
    </Box>
  );
};

const Eyes: FC<{ disabled: boolean }> = ({ disabled }) => {
  const [isAddition, setAddition] = useState(true);

  return (
    <Box display="flex" gap="1.25rem" flexDirection="column">
      <EyeFields
        name="rightEye"
        disabled={disabled}
        label="Olho Direito"
        isAddition={isAddition}
        setAddition={setAddition}
      />
      <EyeFields
        name="leftEye"
        disabled={disabled}
        label="Olho Esquerdo"
        isAddition={isAddition}
        setAddition={setAddition}
      />
    </Box>
  );
};

export default Eyes;
