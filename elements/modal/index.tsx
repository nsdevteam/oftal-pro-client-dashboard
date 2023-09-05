import { FC } from 'react';
//import ReactModal from 'react-modal';

import { ModalProps } from './modal.types';

//ReactModal.setAppElement('#__next');

const Modal: FC<ModalProps> = ({ modalProps, children, background }) => {
  return (
    <div
      {...modalProps}
      style={{
        overlay: {
          zIndex: 99999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          ...(background && { background }),
          boxShadow:
            'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
        },
        content: {
          padding: 0,
          border: 'none',
          maxWidth: '95vw',
          maxHeight: '95vh',
          borderRadius: '0',
          position: 'static',
          background: 'transparent',
        },
      }}
    >
      {children}
    </div>
  );
};

export default Modal;
