import React from 'react';
import './lotrCard.css';
type LotrCardProp = {
  id:string,
  name: string,
  race: string,
  wikiUrl: string,
  clickAction: (id:string) => void
}
const LotrCard = (props: LotrCardProp) => {
  const { id, name, race, wikiUrl} = props; 
  return (
    <div className='lotr-card' onClick={() => {props.clickAction(id)}}>
      <h3>{name} (<a href={wikiUrl}>wiki </a>)</h3>
      <p>Race: {race === 'NaN' ? 'Unknown' : race}</p>
    </div>
  )

}

export default LotrCard