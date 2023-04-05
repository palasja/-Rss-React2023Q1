type Character = {
  _id: string,
  name: string,
  race: string,
  wikiUrl: string,
  birth:string,
  death:string,
  gender: string,
  hair:string,
  height:string,
  realm:string,
  spouse:string,
}
type Movie = {
  academyAwardNominations: number,
  academyAwardWins: number,
  boxOfficeRevenueInMillions: number,
  budgetInMillions: number,
  name: string,
  rottenTomatoesScore: number,
  runtimeInMinutes: number,
  _id: string,
}
type Quote = {
  character:string
  dialog:string
  id:string
  movie:string
  _id:string
}

type CardFullInfo = {
  name: string,
  race: string,
  wikiUrl: string,
  birth:string,
  death:string,
  gender: string,
  hair:string,
  height:string,
  realm:string,
  spouse:string,
  dialog:string | undefined
  movie: string | undefined
}
type LotrResponse = {
  docs:Character[] | Quote[] | Movie[] 
  limit:number
  offset:number
  page:number
  pages:number
  total:number
}
export {Character, Quote, Movie, LotrResponse, CardFullInfo}