import styled from '@emotion/styled';
import React, { FC } from 'react';

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  z-index: 1000;
`;

const ModalContent = styled.div`
  max-width: 80%;
  max-height: 80%;
  width: 25rem;
  height: 31rem;
  margin-top: 2rem;
  margin-right: 3rem;
  background-color: #fff;
  border-radius: 0.5rem;
  padding: 1rem;
  overflow-x: scroll;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;

type ModalNotificationProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const ModalNotification: FC<ModalNotificationProps> = ({
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

export default ModalNotification;
