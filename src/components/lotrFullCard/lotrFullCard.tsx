import { useEffect, useState } from 'react';
import './lotrFullCard.css';
import { CardFullInfo, Character, LotrResponse, Movie, Quote } from '../../types';
import React from 'react';
import API from '../../helper/contsAPI';
import { fullCardLoader } from '../../helper/loaders';
import { getFetchData } from '../../helper/fetchData';

type LotrFullCardProp = {
  characterId: string;
};
const LotrFullCard = (props: LotrFullCardProp) => {
  const [cardInfo, setCardInfo] = useState<CardFullInfo | null>(null);
  const [errorResponse, setErrorResponse] = useState<string | null>(null);
  const undefinedInfo = <span className="unknow">Unknown</span>;
  useEffect(() => {
    const fetchData = async () => {
     try {
      const arrCharacter = await getFetchData(`${API.host}/character?_id=${props.characterId}`);
      const char = arrCharacter[0] as Character;

      const arrQuote = await getFetchData(`${API.host}/character/${props.characterId}/quote`);
      const quote =
      arrQuote.length === 0
          ? null
          : (arrQuote[Math.floor(Math.random() * arrQuote.length)] as Quote);

      let movie: Movie | undefined = undefined;
      if (quote) {
        const arrMovie = await getFetchData(`${API.host}/movie/${quote.movie}`);
        movie = arrMovie[0] as Movie;
      }
      const checkValue = (val: string) => (val === 'NaN' ? undefined : val);

      setCardInfo({
        name: char.name,
        race: checkValue(char.race),
        wikiUrl: char.wikiUrl,
        birth: checkValue(char.birth),
        death: checkValue(char.death),
        gender: checkValue(char.gender),
        hair: checkValue(char.hair),
        height: checkValue(char.height),
        realm: checkValue(char.realm),
        spouse: checkValue(char.spouse),
        dialog: movie?.name,
        movie: movie?.name,
      })
     } catch(e) {
      setErrorResponse(e.message);
     }
    };

    fetchData();
  }, [props.characterId]);

  return (
    <div>
      <div className="full-info">
      {errorResponse ? <p className="errorMessge">{errorResponse}</p> : 
        <>
        {!cardInfo && fullCardLoader}
        {cardInfo && (
          <>
            <a className="full-info_name" href={cardInfo.wikiUrl}>
              {cardInfo.name}
            </a>
            <div className="full-info_detail">
              <p>Race: {cardInfo.race || undefinedInfo}</p>
              <p>Birth Date: {cardInfo.birth || undefinedInfo}</p>
              <p>Death Date: {cardInfo.death || undefinedInfo}</p>
              <p>Gender: {cardInfo.gender || undefinedInfo}</p>
              <p>Hair: {cardInfo.hair || undefinedInfo}</p>
              <p>Heght: {cardInfo.height || undefinedInfo}</p>
              <p>Realm: {cardInfo.realm || undefinedInfo}</p>
              <p>Spouse: {cardInfo.spouse || undefinedInfo}</p>
            </div>

            {cardInfo.dialog && (
              <div>
                <span className="full-info_quote">{cardInfo.dialog}</span>
                <span className="full-info_movie">{cardInfo.movie}</span>
              </div>
            )}
          </>
        )}
        </>
      }
      </div>
    </div>
  );
};

export default LotrFullCard;
