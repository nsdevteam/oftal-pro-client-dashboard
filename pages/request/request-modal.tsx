import { FC } from 'react';
import { FiX } from 'react-icons/fi';

import {
  colorData,
  geometryData,
  refractionData,
  treatmentData,
} from '../../api';
import { Box, Button, Input, Modal, Typography } from '../../elements';
import { totalAmount } from '../../hooks/use-form-input';
import useFormInput from '../../hooks/use-form-input';
import FileName from './file-name';

const RequestModal: FC<{ isModalOpen: boolean; closeModal: () => void }> = ({
  isModalOpen,
  closeModal,
}) => {
  const {
    register,
    errors,
    handleSubmit,
    selectLeftEye,
    selectRightEye,
    onSubmit,
    handleToggleLeftEyeOption,
    handleToggleRightEyeOption,
  } = useFormInput();
  return (
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      <Box
        as="div"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography as="h4" padding="0.5rem">
          Novo pedido
        </Typography>
        <FiX size={20} color="#A1A1AA" onClick={closeModal} />
      </Box>
      <Box as="div" width="100%" padding="1rem">
        <Typography as="p" padding="0.5rem">
          Refração
        </Typography>
        <Box
          as="form"
          width="100%"
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="flex-start"
        >
          <Box
            as="div"
            width="auto"
            display="flex"
            flexDirection="row"
            alignItems="flex-start"
            justifyContent="flex-start"
          >
            <Box
              as="div"
              width="auto"
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              justifyContent="flex-start"
              mt="0.5rem"
            >
              <Typography padding="0.5rem">Olho esquerdo</Typography>
              <Box
                as="div"
                display="flex"
                flexDirection="row"
                alignItems="flex-start"
                justifyContent="flex-start"
              >
                <Box
                  as="div"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  height="3.5rem"
                >
                  {selectLeftEye ? (
                    <Input
                      p="L"
                      type="checkbox"
                      outline="none"
                      checked
                      border="1px solid #E4E4E7"
                      borderRadius="L"
                      color="textInverted"
                      mr={['NONE', 'S']}
                      ml={['NONE', 'S']}
                      minWidth={['100%', '5rem']}
                      width={['5rem']}
                      bg="transparent"
                      nFocus={{
                        borderColor: '#4763E4',
                      }}
                      onClick={handleToggleLeftEyeOption}
                    />
                  ) : (
                    <Input
                      p="L"
                      type="checkbox"
                      outline="none"
                      border="1px solid #E4E4E7"
                      borderRadius="L"
                      color="textInverted"
                      mr={['NONE', 'S']}
                      ml={['NONE', 'S']}
                      minWidth={['100%', '5rem']}
                      width={['5rem']}
                      bg="transparent"
                      nFocus={{
                        borderColor: '#4763E4',
                      }}
                      onClick={handleToggleLeftEyeOption}
                    />
                  )}
                </Box>
                <Input
                  type="number"
                  p="L"
                  outline="none"
                  border="1px solid #E4E4E7"
                  borderRadius="M"
                  color="textInverted"
                  mr={['NONE', 'S']}
                  ml={['NONE', 'S']}
                  minWidth={['100%', '6.1rem']}
                  width={['6.1rem']}
                  bg="transparent"
                  placeholder="Esf."
                  nFocus={{
                    borderColor: '#4763E4',
                  }}
                  {...register('leftSpherical', {
                    min: {
                      value: -35,
                      message: 'O valor mínimo deve ser maior ou igual a -35',
                    },
                    max: {
                      value: 20,
                      message: 'O valor máximo deve ser menor ou igual a 20',
                    },
                  })}
                  disabled={!selectLeftEye}
                />
                {errors.leftSpherical && (
                  <Typography className="alertDanger">
                    {errors.leftSpherical.message}
                  </Typography>
                )}
                <Input
                  type="number"
                  p="L"
                  outline="none"
                  border="1px solid #E4E4E7"
                  borderRadius="M"
                  color="textInverted"
                  mr={['NONE', 'S']}
                  ml={['NONE', 'S']}
                  minWidth={['100%', '6.1rem']}
                  width={['6.1rem']}
                  bg="transparent"
                  placeholder="Cil."
                  nFocus={{
                    borderColor: '#4763E4',
                  }}
                  {...register('leftCylinder', {
                    min: {
                      value: -6,
                      message: 'O valor mínimo deve ser maior ou igual a -6',
                    },
                    max: {
                      value: 7,
                      message: 'O valor máximo deve ser menor ou igual a 7',
                    },
                  })}
                  disabled={!selectLeftEye}
                />
                {errors.leftCylinder && (
                  <Typography className="alertDanger">
                    {errors.leftCylinder.message}
                  </Typography>
                )}
                <Input
                  type="number"
                  p="L"
                  outline="none"
                  border="1px solid #E4E4E7"
                  borderRadius="M"
                  color="textInverted"
                  mr={['NONE', 'S']}
                  ml={['NONE', 'S']}
                  minWidth={['100%', '6.1rem']}
                  width={['6.1rem']}
                  bg="transparent"
                  placeholder="Eix."
                  nFocus={{
                    borderColor: '#4763E4',
                  }}
                  {...register('leftAxis', {
                    min: {
                      value: 0,
                      message: 'O valor mínimo deve ser maior ou igual a 0',
                    },
                    max: {
                      value: 180,
                      message: 'O valor máximo deve ser menor ou igual a 180',
                    },
                  })}
                  disabled={!selectLeftEye}
                />
                {errors.leftAxis && (
                  <Typography className="alertDanger">
                    {errors.leftAxis.message}
                  </Typography>
                )}
              </Box>
            </Box>
            <Box
              as="div"
              width="auto"
              display="flex"
              flexDirection="row"
              alignItems="flex-start"
              justifyContent="flex-start"
            >
              <Box
                as="div"
                width="auto"
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                justifyContent="flex-start"
                marginLeft="3rem"
              >
                <Typography padding="0.5rem">Geometria/Superfície</Typography>
                <Box
                  as="div"
                  display="flex"
                  flexDirection="column"
                  justifyContent="flex-start"
                  alignItems="center"
                  padding="0.5rem"
                >
                  <select
                    className="selectType"
                    {...register('geometry', {
                      required: 'O campo de geometria deve ser preenchido',
                    })}
                  >
                    {geometryData.map((geo) => {
                      const { id, value } = geo;
                      return (
                        <option key={id} value={value}>
                          {value}
                        </option>
                      );
                    })}
                  </select>
                  {errors.geometry && (
                    <Typography className="alertDanger">
                      {errors.geometry.message}
                    </Typography>
                  )}
                </Box>
              </Box>
              <Box as="div" width="auto" display="flex" flexDirection="column">
                <Typography padding="0.5rem">Índice de refração</Typography>
                <Box
                  as="div"
                  display="flex"
                  flexDirection="column"
                  justifyContent="flex-start"
                  alignItems="center"
                  padding="0.5rem"
                >
                  <select
                    className="selectType"
                    {...register('indiceOfRefraction', {
                      min: {
                        value: '',
                        message:
                          'O campo de índice de refração deve ser preenchido',
                      },
                    })}
                  >
                    {refractionData.map((item) => {
                      const { id, size } = item;
                      return (
                        <option key={id} value={size}>
                          {size}
                        </option>
                      );
                    })}
                  </select>
                  {errors.indiceOfRefraction && (
                    <Typography className="alertDanger">
                      {errors.indiceOfRefraction.message}
                    </Typography>
                  )}
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            as="div"
            width="auto"
            display="flex"
            flexDirection="row"
            alignItems="flex-start"
            justifyContent="flex-start"
          >
            <Box
              as="div"
              width="auto"
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              justifyContent="flex-start"
              mt="0.5rem"
            >
              <Typography padding="0.5rem">Olho direito</Typography>
              <Box
                as="div"
                display="flex"
                flexDirection="row"
                alignItems="flex-start"
                justifyContent="flex-start"
              >
                <Box
                  as="div"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  height="3.5rem"
                >
                  {selectRightEye ? (
                    <Input
                      p="L"
                      type="checkbox"
                      checked
                      outline="none"
                      border="1px solid #E4E4E7"
                      borderRadius="L"
                      color="textInverted"
                      mr={['NONE', 'S']}
                      ml={['NONE', 'S']}
                      minWidth={['100%', '5rem']}
                      width={['5rem']}
                      bg="transparent"
                      nFocus={{
                        borderColor: '#4763E4',
                      }}
                      onClick={handleToggleRightEyeOption}
                    />
                  ) : (
                    <Input
                      p="L"
                      type="checkbox"
                      outline="none"
                      border="1px solid #E4E4E7"
                      borderRadius="L"
                      color="textInverted"
                      mr={['NONE', 'S']}
                      ml={['NONE', 'S']}
                      minWidth={['100%', '5rem']}
                      width={['5rem']}
                      bg="transparent"
                      nFocus={{
                        borderColor: '#4763E4',
                      }}
                      onClick={handleToggleRightEyeOption}
                    />
                  )}
                </Box>
                <Input
                  type="number"
                  p="L"
                  outline="none"
                  border="1px solid #E4E4E7"
                  borderRadius="M"
                  color="textInverted"
                  mr={['NONE', 'S']}
                  ml={['NONE', 'S']}
                  minWidth={['100%', '6.1rem']}
                  width={['6.1rem']}
                  bg="transparent"
                  placeholder="Esf."
                  nFocus={{
                    borderColor: '#4763E4',
                  }}
                  {...register('rightSpherical', {
                    min: {
                      value: -35,
                      message: 'O valor mínimo deve ser maior ou igual a -35',
                    },
                    max: {
                      value: 20,
                      message: 'O valor máximo deve ser menor ou igual a 20',
                    },
                  })}
                  disabled={!selectRightEye}
                />
                {errors.rightSpherical && (
                  <Typography className="alertDanger">
                    {errors.rightSpherical.message}
                  </Typography>
                )}
                <Input
                  type="number"
                  p="L"
                  outline="none"
                  border="1px solid #E4E4E7"
                  borderRadius="M"
                  color="textInverted"
                  mr={['NONE', 'S']}
                  ml={['NONE', 'S']}
                  minWidth={['100%', '6.1rem']}
                  width={['6.1rem']}
                  bg="transparent"
                  placeholder="Cil."
                  nFocus={{
                    borderColor: '#4763E4',
                  }}
                  {...register('rightCylinder', {
                    min: {
                      value: -6,
                      message: 'O valor mínimo deve ser maior ou igual a -6',
                    },
                    max: {
                      value: 7,
                      message: 'O valor máximo deve ser menor ou igual a 7',
                    },
                  })}
                  disabled={!selectRightEye}
                />
                {errors.rightCylinder && (
                  <Typography className="alertDanger">
                    {errors.rightCylinder.message}
                  </Typography>
                )}
                <Input
                  type="number"
                  p="L"
                  min="0"
                  max="180"
                  outline="none"
                  border="1px solid #E4E4E7"
                  borderRadius="M"
                  color="textInverted"
                  mr={['NONE', 'S']}
                  ml={['NONE', 'S']}
                  minWidth={['100%', '6.1rem']}
                  width={['6.1rem']}
                  bg="transparent"
                  placeholder="Eix."
                  nFocus={{
                    borderColor: '#4763E4',
                  }}
                  {...register('rightAxis', {
                    min: {
                      value: 0,
                      message: 'O valor mínimo deve ser maior ou igual a 0',
                    },
                    max: {
                      value: 180,
                      message: 'O valor máximo deve ser menor ou igual a 180',
                    },
                  })}
                  disabled={!selectRightEye}
                />
                {errors.rightAxis && (
                  <Typography className="alertDanger">
                    {errors.rightAxis.message}
                  </Typography>
                )}
              </Box>
            </Box>
            <Box
              as="div"
              width="auto"
              display="flex"
              flexDirection="row"
              alignItems="flex-start"
              justifyContent="flex-start"
            >
              <Box
                as="div"
                width="auto"
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                justifyContent="flex-start"
                marginLeft="3rem"
              >
                <Typography padding="0.5rem">Tipo/Cor</Typography>
                <Box
                  as="div"
                  display="flex"
                  flexDirection="column"
                  justifyContent="flex-start"
                  alignItems="center"
                  padding="0.5rem"
                >
                  <select
                    className="selectType"
                    {...register('color', {
                      required: 'Campo  de cor é obrigatório',
                    })}
                  >
                    {colorData.map((item) => {
                      const { id, value } = item;
                      return (
                        <option key={id} value={value}>
                          {value}
                        </option>
                      );
                    })}
                  </select>
                  {errors.color && (
                    <Typography className="alertDanger">
                      {errors.color.message}
                    </Typography>
                  )}
                </Box>
              </Box>
              <Box
                as="div"
                width="auto"
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                justifyContent="flex-start"
              >
                <Typography padding="0.5rem">Tratamento</Typography>
                <Box
                  as="div"
                  display="flex"
                  flexDirection="column"
                  justifyContent="flex-start"
                  alignItems="center"
                  padding="0.5rem"
                >
                  <select
                    className="selectType"
                    {...register('treatment', {
                      required: 'Campo de tratamento é obrigatório',
                    })}
                  >
                    {treatmentData.map((item) => {
                      const { id, value } = item;
                      return (
                        <option key={id} value={value}>
                          {value}
                        </option>
                      );
                    })}
                  </select>
                  {errors.treatment && (
                    <Typography className="alertDanger">
                      {errors.treatment.message}
                    </Typography>
                  )}
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            as="div"
            display="flex"
            alignItems="flex-start"
            justifyContent="flex-start"
          >
            <Box
              as="div"
              display="flex"
              flexDirection="column"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Typography textAlign="left" padding="0.5rem">
                Nome do paciente
              </Typography>
              <Input
                p="L"
                type="text"
                outline="none"
                border="1px solid #E4E4E7"
                borderRadius="M"
                color="textInverted"
                mr={['NONE', 'S']}
                ml={['NONE', 'S']}
                minWidth={['100%', '10rem']}
                width={['24.7rem']}
                bg="transparent"
                placeholder="Lucas Mateus"
                {...register('patientName', {
                  required: 'Campo nome do paciente é obrigatório',
                  maxLength: {
                    value: 16,
                    message:
                      'Campo nome do paciente deve ter no máximo 16 caracteres',
                  },
                  minLength: {
                    value: 6,
                    message:
                      'Campo nome do paciente deve ter no mínimo 6 caracteres',
                  },
                })}
                nFocus={{
                  borderColor: '#4763E4',
                }}
              />
              {errors.patientName && (
                <Typography className="alertDanger">
                  {errors.patientName.message}
                </Typography>
              )}
            </Box>
            <Box
              as="div"
              marginLeft="3.5rem"
              display="flex"
              flexDirection="column"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Typography textAlign="left" padding="0.5rem">
                Diâmetro
              </Typography>
              <Input
                p="L"
                type="number"
                outline="none"
                borderRadius="M"
                border="1px solid #E4E4E7"
                color="textInverted"
                mr={['NONE', 'S']}
                ml={['NONE', 'S']}
                minWidth={['100%', '5rem']}
                width={['7.5rem']}
                bg="transparent"
                placeholder="70mm"
                {...register('diameter', {
                  min: {
                    value: 50,
                    message: 'O valor mínimo deve ser maior ou igual a 50',
                  },
                  max: {
                    value: 80,
                    message: 'O valor máximo deve ser menor ou igual a 80',
                  },
                })}
                nFocus={{
                  borderColor: '#4763E4',
                }}
              />
              {errors.diameter && (
                <Typography className="alertDanger">
                  {errors.diameter.message}
                </Typography>
              )}
            </Box>
            <Box
              as="div"
              marginLeft="0.5rem"
              display="flex"
              flexDirection="column"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Typography textAlign="left" padding="0.5rem">
                Altura mínima
              </Typography>
              <select
                defaultValue="17"
                className="selectAdition"
                {...register('alway', {
                  required: 'Campo de altura mínima obrigatório',
                })}
              >
                <option value="13">13</option>
                <option value="15">15</option>
                <option value="17">17</option>
                <option value="19">19</option>
                <option value="21">21</option>
              </select>
              {errors.alway && (
                <Typography className="alertDanger">
                  {errors.alway.message}
                </Typography>
              )}
            </Box>
            <Box
              as="div"
              marginLeft="0.5rem"
              display="flex"
              flexDirection="column"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Typography textAlign="left" padding="0.5rem">
                Coloração
              </Typography>
              <select
                defaultValue="Não"
                className="selectAdition"
                {...register('coloring', {
                  required: 'Campo de coloração obrigatório',
                })}
              >
                <option value="Sim<">Sim</option>
                <option value="Não">Não</option>
              </select>
              {errors.coloring && (
                <Typography className="alertDanger">
                  {errors.coloring.message}
                </Typography>
              )}
            </Box>
            <Box
              as="div"
              marginLeft="0.5rem"
              display="flex"
              flexDirection="column"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Typography textAlign="left" padding="0.5rem">
                Prisma
              </Typography>
              <select
                defaultValue="Não"
                className="selectAdition"
                {...register('prism', {
                  required: 'Campo de prisma é obrigatório',
                })}
              >
                <option value="Sim">Sim</option>
                <option value="Não">Não</option>
              </select>
              {errors.prism && (
                <Typography className="alertDanger">
                  {errors.prism.message}
                </Typography>
              )}
            </Box>
            <Box
              as="div"
              marginLeft="0.5rem"
              display="flex"
              flexDirection="column"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Typography textAlign="left" padding="0.5rem">
                Precal
              </Typography>
              <select
                defaultValue="Não"
                className="selectAdition"
                {...register('precal', {
                  required: 'Campo de precal é obrigatório',
                })}
              >
                <option value="Sim">Sim</option>
                <option value="Não">Não</option>
              </select>
              {errors.precal && (
                <Typography className="alertDanger">
                  {errors.precal.message}
                </Typography>
              )}
            </Box>
          </Box>
          <Box
            as="div"
            display="flex"
            alignItems="flex-start"
            justifyContent="flex-start"
            mt="0.5rem"
          >
            <Box
              as="div"
              display="flex"
              flexDirection="column"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Typography textAlign="left" padding="0.5rem">
                Referência de trabalho
              </Typography>
              <Input
                p="L"
                type="text"
                outline="none"
                borderRadius="M"
                border="1px solid #E4E4E7"
                color="textInverted"
                mr={['NONE', 'S']}
                ml={['NONE', 'S']}
                minWidth={['100%', '10rem']}
                width={['12.5rem']}
                bg="transparent"
                placeholder="23SW34B"
                {...register('jobReference', {
                  required:
                    'Referência de trabalho  é obrigatório e deve conter letras maísculas e números',
                  maxLength: {
                    value: 8,
                    message: 'O campo deve conter no máximo de 8 caracteres',
                  },
                  minLength: {
                    value: 4,
                    message: 'O campo deve conter no mínimo de 4 caracteres',
                  },

                  pattern: /^[A-Z0-9]+$/,
                })}
                nFocus={{
                  borderColor: '#4763E4',
                }}
              />
              {errors.jobReference && (
                <Typography className="alertDanger">
                  {errors.jobReference.message}
                </Typography>
              )}
            </Box>
            <Box
              as="div"
              display="flex"
              flexDirection="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              mt="2.1rem"
            >
              <FileName />
            </Box>
            <Box
              as="div"
              display="flex"
              flexDirection="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              marginLeft="3.5rem"
            >
              <Typography textAlign="left" padding="0.5rem">
                Observações
              </Typography>
              <Box
                as="textarea"
                p="L"
                rows="4"
                cols="50"
                maxlength="50"
                borderRadius="M"
                border="1px solid #E4E4E7"
                color="textInverted"
                mr={['NONE', 'S']}
                ml={['NONE', 'S']}
                minWidth={['100%', '10rem']}
                width={['41.5rem']}
                bg="transparent"
                {...register('observation', {
                  maxLength: {
                    value: 50,
                    message: 'Deve conter no máximo 50 caracteres',
                  },
                })}
                placeholder="Deixa aqui as suas observações"
              />
              {errors.observation && (
                <Typography className="alertDanger">
                  {errors.observation.message}
                </Typography>
              )}
            </Box>
          </Box>
          <Typography as="h4" padding="0.5rem">
            Subtotal: {totalAmount}, 00 AOA
          </Typography>
          <Box
            as="div"
            width="98%"
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
          >
            <Button
              p="L"
              type="button"
              effect="hover"
              display="flex"
              variant="primary"
              fontWeight="bold"
              color="#FFF"
              borderRadius="M"
              border="none"
              bg="#4763E4"
              ml="1rem"
              mt="1rem"
              justifyContent="center"
              width={['10rem', 'NONE']}
              minWidth={['100%', '10rem']}
              alignItems="center"
              onClick={handleSubmit(onSubmit)}
            >
              Prosseguir
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default RequestModal;
