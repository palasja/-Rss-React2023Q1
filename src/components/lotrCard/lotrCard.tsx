import React from 'react';
import './lotrCard.css';
type LotrCardProp = {
  name: string,
  race: string,
  wikiUrl: string
}
const LotrCard = (props: LotrCardProp) => {
  const { name, race, wikiUrl} = props; 
  return (
    <div className='lotr-card'>
      <h3>{name} (<a href={wikiUrl}>wiki </a>)</h3>
      <p>Race: {race === 'NaN' ? 'Unknown' : race}</p>
    </div>
  )

}

export default LotrCard