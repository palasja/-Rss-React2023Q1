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
<div className="modal" onClick={(e) => {props.onClose()}}>

</div>
      <div className="modal_content">
      <div className="close" onClick={props.onClose} ></div>
      <LotrFullCard characterId={props.charId} />
    </div></>
  );
};

export default ModalContent;
