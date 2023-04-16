import { useEffect, useState } from 'react';
import './lotrFullCard.css';
import { CardFullInfo, Quote } from '../../types';
import React from 'react';
import { fullCardLoader } from '../../helper/loaders';
import { checkNaNValue } from '../../helper/helpers';
import { useLazyGetCharactersByIdQuery, useLazyGetMovieByQuoteQuery, useLazyGetQuotesByCharacterIdQuery } from '../../store/slicer/apiSlice';


type LotrFullCardProp = {
  characterId: string;
};
const LotrFullCard = (props: LotrFullCardProp) => {
  const [cardInfo, setCardInfo] = useState<CardFullInfo | null>(null);
  const [getCharacter] = useLazyGetCharactersByIdQuery();
  const [getQuotes] = useLazyGetQuotesByCharacterIdQuery();
  const [getMovie] = useLazyGetMovieByQuoteQuery();
  const undefinedInfo = <span className="unknow">Unknown</span>;

  useEffect(() => {
    const fullInfoInit: CardFullInfo = {
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
      movie: undefined,
    };
    getCharacter(props.characterId)
      .unwrap()
      .then((char) => {
        fullInfoInit.name = char.name;
        fullInfoInit.race = checkNaNValue(char.race);
        fullInfoInit.wikiUrl = char.wikiUrl;
        fullInfoInit.birth = checkNaNValue(char.birth);
        fullInfoInit.death = checkNaNValue(char.death);
        fullInfoInit.gender = checkNaNValue(char.gender);
        fullInfoInit.hair = checkNaNValue(char.hair);
        fullInfoInit.height = checkNaNValue(char.height);
        fullInfoInit.realm = checkNaNValue(char.realm);
        fullInfoInit.spouse = checkNaNValue(char.spouse);
      })
      .then(() => getQuotes(props.characterId).unwrap())
      .then((arrQuote) => {
        const quote =
          arrQuote.length === 0
            ? null
            : (arrQuote[Math.floor(Math.random() * arrQuote.length)] as Quote);
        fullInfoInit.dialog = quote?.dialog;
        return quote;
      })
      .then((quote) => {
        if (quote) return getMovie(quote.movie).unwrap();
      })
      .then((movie) => {
        if (movie) fullInfoInit.movie = movie?.name;
      })
      .then(() => setCardInfo(fullInfoInit));
  }, [getCharacter, getMovie, getQuotes, props.characterId]);

  return (
    <div>
      <div className="full-info">
        <>
          {!cardInfo && fullCardLoader}
          {cardInfo && (
            <>
              <a className="full-info_name" href={cardInfo.wikiUrl}>
                {cardInfo.name}
              </a>
              <div className="full-info_detail">
                <p>Birth Date: {cardInfo.birth || undefinedInfo}</p>
                <p>Death Date: {cardInfo.death || undefinedInfo}</p>
                <p>Race: {cardInfo.race || undefinedInfo}</p>
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
      </div>
    </div>
  );
};

export default LotrFullCard;
