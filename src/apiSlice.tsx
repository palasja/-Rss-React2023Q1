import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Character, Movie, Quote } from './types'

// Define a service using a base URL and expected endpoints
export const lotrApiSlice = createApi({
  reducerPath: 'lotrApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://the-one-api.dev/v2/',
  prepareHeaders: (headers) => {
    headers.set('authorization', `Bearer BTQ_p0KTKzxQIhvXZ2u6`)
    headers.set('accept', `application/json`)
  return headers
},
 }),

  endpoints: (builder) => ({
    getCharactersByName: builder.query<Character[], string>({
      query: (searchValue) => `character?name=/^${searchValue}/i`,
    }),
    getCharactersById: builder.query<Character, string>({
      query: (characterId) => `character?_id=${characterId}`,
    }),
    getQuotesByCharacterId: builder.query<Quote[], string>({
      query: (characterId) => `character/${characterId}/quote`,
    }),
    getMovieByQuote: builder.query<Movie, string>({
      query: (quote) => `movie/${quote}`,
    }),
  }),
  
})

export const {
  useGetCharactersByNameQuery,
  useGetCharactersByIdQuery,
  useGetQuotesByCharacterIdQuery,
  useGetMovieByQuoteQuery,
} = lotrApiSlice