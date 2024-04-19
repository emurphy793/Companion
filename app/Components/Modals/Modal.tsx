"use client"

import { useGlobalState } from '@/app/context/globalProvider'
import React from 'react'
import styled from 'styled-components';

interface Props {
    content: React.ReactNode;
}

function Modal({content}: Props) {
    const {closeModal, theme} = useGlobalState();

  return (
    <ModalStyled theme={theme}>
        <div className="modal-overlay" onClick={closeModal}></div>
        <div className='modal-content'>{content}</div>
    </ModalStyled>
  );
}

const ModalStyled = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 0;
    height: 100vh;
    z-index: 100;

    display: flex;
    justify-contnet: center;
    align-items: center;

    .modal-overlay {
        position: absolute;
        top 0;
        left: 0;
        width: 100%;
        height: 100vh
        background-color: rgba(0, 0, 0, 0.45);
        filter: blur(4px);
    }

    .modal-content {
        padding: 2rem;
        position: relative;
        max-width: 630px;
        width: 100%;
        z-index: 100;
    }
`;

export default Modal
