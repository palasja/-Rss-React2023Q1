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
  useEffect( () => {
    const fetchData = async () => {
        let fullInfo: CardFullInfo = {
          name: '',
          race: '',
          wikiUrl: '',
          birth: '',
          death: '',
          gender: '',
          hair: '',
          height: '',
          realm: '',
          spouse: '',
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
      {!cardInfo && <p>Loading...</p>}
      {cardInfo && 
      <div>
        <p>{cardInfo.name}</p>
        <p>Race: {cardInfo.race}</p>
        <p><a href={cardInfo.wikiUrl}>LOTR Wiki</a></p>
        <p>Birth Date: {cardInfo.birth}</p>
        <p>Death Date: {cardInfo.death}</p>
        <p>Gender: {cardInfo.gender}</p>
        <p>Hair: {cardInfo.hair}</p>
        <p>Heght: {cardInfo.height}</p>
        <p>Realm: {cardInfo.realm}</p>
        <p>Spouse: {cardInfo.spouse}</p>
        {cardInfo.dialog && <div>
            <p>{cardInfo.dialog}</p>
            <p>{cardInfo.movie}</p>
          </div>}
      </div>
      }
    </div>
  );
}

export default LotrFullCard;