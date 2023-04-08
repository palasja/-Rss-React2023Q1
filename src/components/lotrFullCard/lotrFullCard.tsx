import { useEffect, useState } from 'react';
import './lotrFullCard.css';
import { CardFullInfo, Character, LotrResponse, Movie, Quote } from '../../types';
import React from 'react';
import API from '../../helper/contsAPI';
import ContentLoader from 'react-content-loader';

type LotrFullCardProp = {
  characterId: string;
};
const LotrFullCard = (props: LotrFullCardProp) => {
  const [cardInfo, setCardInfo] = useState<CardFullInfo | null>(null);
  const undefinedInfo = <span className="unknow">Unknown</span>;
  useEffect(() => {
    const fetchData = async () => {
      const respChar = await fetch(`${API.host}/character?_id=${props.characterId}`, {
        headers: API.headers,
      });
      const arrChar: LotrResponse = await respChar.json();
      const char = arrChar.docs[0] as Character;

      const respQuote = await fetch(`${API.host}/character/${props.characterId}/quote`, {
        headers: API.headers,
      });
      const arrQoute: LotrResponse = await respQuote.json();
      const quote =
        arrQoute.docs.length === 0
          ? null
          : (arrQoute.docs[Math.floor(Math.random() * arrQoute.docs.length)] as Quote);
      let movie: Movie | undefined = undefined;
      if (quote) {
        const respMovie = await fetch(`${API.host}/movie/${quote.movie}`, { headers: API.headers });
        const arrMovie: LotrResponse = await respMovie.json();
        movie = arrMovie.docs[0] as Movie;
      }
      const checkValue = (val: string) => (val === 'NaN' ? undefined : val);
      const getFullInfo = () => {
        const fullInfo: CardFullInfo = {
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
        };
        return fullInfo;
      };

      setCardInfo(getFullInfo());
    };

    fetchData();
  }, [props.characterId]);
  const loader = () => {
    return (
      <ContentLoader
        speed={1}
        width={700}
        height={260}
        viewBox="0 0 700 260"
        backgroundColor="#431dcd"
        foregroundColor="#0cd3ed"
        data-testid="loader"
      >
        <rect x="150" y="8" rx="3" ry="3" width="400" height="30" />
        <rect x="0" y="58" rx="3" ry="3" width="300" height="30" />
        <rect x="348" y="58" rx="3" ry="3" width="300" height="30" />
        <rect x="0" y="108" rx="3" ry="3" width="300" height="30" />
        <rect x="348" y="108" rx="3" ry="3" width="300" height="30" />
        <rect x="0" y="158" rx="3" ry="3" width="300" height="30" />
        <rect x="348" y="158" rx="3" ry="3" width="300" height="30" />
        <rect x="0" y="208" rx="3" ry="3" width="300" height="30" />
        <rect x="348" y="208" rx="3" ry="3" width="300" height="30" />
      </ContentLoader>
    );
  };

  return (
    <div>
      <div className="full-info">
        {!cardInfo && loader()}
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
      </div>
    </div>
  );
};

export default LotrFullCard;
