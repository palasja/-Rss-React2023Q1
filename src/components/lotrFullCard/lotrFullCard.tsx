import { useEffect, useState } from 'react'
import './lotrFullCard.css'
import { CardFullInfo, Character, LotrResponse, Movie, Quote } from '../../types'
import React from 'react'
import API from '../../helper/contsAPI'

type LotrFullCardProp = {
  characterId: string
}
const LotrFullCard = (props: LotrFullCardProp) => {
  const [cardInfo, setCardInfo] = useState<CardFullInfo | null>(null);
  const undefinedInfo = <span className='unknow'>Unknown</span>
  useEffect( () => {
    const fetchData = async () => {
        let fullInfo: CardFullInfo = {
          name: '',
          race: undefined,
          wikiUrl: '',
          birth: undefined,
          death: undefined,
          gender: undefined,
          hair: undefined,
          height: undefined,
          realm: undefined,
          spouse: undefined,
          dialog: undefined,
          movie: undefined
        };
        const respChar = await fetch(`${API.host}/character?_id=${props.characterId}`, {headers: API.headers});
        const arrChar:LotrResponse  = await respChar.json();
        const char = arrChar.docs[0] as Character;
        Object.assign(fullInfo, char);
        const respQuote = await fetch(`${API.host}/character/${props.characterId}/quote`, {headers: API.headers});
        const arrQoute:LotrResponse  = await respQuote.json();
        const quote = arrQoute.docs.length === 0 ? null : arrQoute.docs[Math.floor(Math.random() * arrQoute.docs.length)] as Quote;
        fullInfo.dialog = quote?.dialog;
        if(quote){
          const respMovie = await fetch(`${API.host}/movie/${quote.movie}`, {headers: API.headers});
          const arrMovie:LotrResponse = await respMovie.json();
          const movie = arrMovie.docs[0] as Movie;
          fullInfo.movie = movie.name;
        }
        
        // const movie = arrMovie;
        setCardInfo(fullInfo)
    }

    fetchData();
  }, []);

  return(
    <div>
      
      
      <div className='full-info'>
        {!cardInfo && <p>Loading...</p>}
{cardInfo && 
        <>
        <a className='full-info_name' href={cardInfo.wikiUrl}>{cardInfo.name}</a>
        <div className='full-info_detail'>
          <p>Race: {cardInfo.race  || undefinedInfo }</p>
          <p>Birth Date: {cardInfo.birth || undefinedInfo }</p>
          <p>Death Date: {cardInfo.death || undefinedInfo }</p>
          <p>Gender: {cardInfo.gender || undefinedInfo }</p>
          <p>Hair: {cardInfo.hair || undefinedInfo }</p>
          <p>Heght: {cardInfo.height || undefinedInfo }</p>
          <p>Realm: {cardInfo.realm || undefinedInfo }</p>
          <p>Spouse: {cardInfo.spouse || undefinedInfo }</p>
        </div>

        {cardInfo.dialog && <div>
            <span className='full-info_quote'>{cardInfo.dialog}</span >
            <span className='full-info_movie'>{cardInfo.movie}</span>
          </div>}</>
       }   
      </div>
      
    </div>
  );
}

export default LotrFullCard;