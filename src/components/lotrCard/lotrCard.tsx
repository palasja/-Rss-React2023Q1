import React from 'react';
import './lotrCard.css';
type LotrCardProp = {
  name: string,
  race: string,
  wikiUr: string
}
const LotrCard = (props: LotrCardProp) => {
  return (
    <div className='lotr-card'>
      <h3>{props.name} (<a href={props.wikiUr}>wiki </a>)</h3>
      <p>Race: {props.race}</p>
      
    </div>
  )

}

export default LotrCard