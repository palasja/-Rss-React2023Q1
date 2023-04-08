import React from 'react';
import './modalConent.css';
import LotrFullCard from '../lotrFullCard/lotrFullCard';

type ModalContentProps = {
  charId: string;
  onClose: () => void;
};

const ModalContent = (props: ModalContentProps) => {
  return (
    <>
      <div
        className="modal"
        onClick={() => {
          props.onClose();
        }}
        data-testid="overlay"
      ></div>
      <div className="modal_content">
        <button className="close" onClick={props.onClose} data-testid="close_modal"></button>
        <LotrFullCard characterId={props.charId} />
      </div>
    </>
  );
};

export default ModalContent;
