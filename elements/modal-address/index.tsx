import styled from '@emotion/styled';
import React from 'react';

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  max-width: 90%;
  max-height: 80%;
  width: 85%;
  height: 85%;
  background-color: #fff;
  border-radius: 0.5rem;
  padding: 20px;
  overflow-x: scroll;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;

type ModalAddressProps = {
  isOpen: () => void;
  onClose: () => void;
  children: React.ReactNode;
};

const ModalAddress: React.FC<ModalAddressProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <ModalBackdrop onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalContent>
    </ModalBackdrop>
  );
};

export default ModalAddress;
