import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Character, LotrResponse, Movie, Quote } from './types';

export const lotrApiSlice = createApi({
  reducerPath: 'lotrApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://the-one-api.dev/v2/',
    prepareHeaders: (headers) => {
      headers.set('authorization', `Bearer BTQ_p0KTKzxQIhvXZ2u6`);
      headers.set('accept', `application/json`);
      return headers;
    },
  }),
  tagTypes: ['Character'],
  endpoints: (builder) => ({
    getCharactersByName: builder.query<Character[], string>({
      query: (searchValue) => `character?name=/^${searchValue}/i`,
      providesTags: (result) =>
        result
          ? [...result.map(({ _id }) => ({ type: 'Character' as const, _id })), 'Character']
          : ['Character'],
      transformResponse: (response: LotrResponse) => response.docs as Character[],
    }),
    getCharactersById: builder.query<Character, string>({
      query: (characterId) => `character?_id=${characterId}`,
      transformResponse: (response: LotrResponse) => response.docs[0] as Character,
    }),
    getQuotesByCharacterId: builder.query<Quote[], string>({
      query: (characterId) => `character/${characterId}/quote`,
      transformResponse: (response: LotrResponse) => response.docs as Quote[],
    }),
    getMovieByQuote: builder.query<Movie, string>({
      query: (quote) => `movie/${quote}`,
      transformResponse: (response: LotrResponse) => response.docs[0] as Movie,
    }),
  }),
});

export const {
  useGetCharactersByNameQuery,
  useLazyGetCharactersByNameQuery,
  useLazyGetCharactersByIdQuery,
  useLazyGetQuotesByCharacterIdQuery,
  useLazyGetMovieByQuoteQuery,
} = lotrApiSlice;
