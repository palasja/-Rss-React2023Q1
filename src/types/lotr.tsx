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
type CharacterResponse = {
  docs:Character[]
  limit:number
  offset:number
  page:number
  pages:number
  total:number
}
export {Character, CharacterResponse}