import React from 'react';
import './modalConent.css'
import LotrFullCard from '../lotrFullCard/lotrFullCard';

type ModalContentProps = {
  charId:string;
  onClose: () => void;
}

const ModalContent = (props: ModalContentProps) => {
  return (
    <div className="modal" onClick={(e) => {e.stopPropagation(); props.onClose}}>
      <div className='modal_content' >
        <a href="#" className="close" onClick={props.onClose}/>
        <LotrFullCard characterId={props.charId} />
      </div>
    </div>
  );
}

export default ModalContent;