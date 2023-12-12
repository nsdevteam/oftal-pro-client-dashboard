import styled from '@emotion/styled';
import React, { FC } from 'react';

const ModalBackdrop = styled.div`
  top: 4rem;
  right: 2.5rem;
  position: fixed;
  width: auto;
  height: auto;
  background-color: transparent;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  z-index: 999;
`;

const ModalContent = styled.div`
  top: 0;
  right: 0;
  width: auto;
  height: auto;
  position: relative;
  background-color: #fff;
  border-radius: 0.5rem;
  overflow-x: auto;
  overflow-y: auto;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;

type ModalMenu = {
  children: React.ReactNode;
};

const ModalModal: FC<ModalMenu> = ({ children }) => {
  return (
    <ModalBackdrop>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalContent>
    </ModalBackdrop>
  );
};

export default ModalModal;
