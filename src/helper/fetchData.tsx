import { Character, LotrResponse, Movie, Quote } from "../types";
import API from "./contsAPI";

export const getFetchData = async (link: string): Promise<Character[] | Quote[] | Movie[]> => {
  let data:Character[] | Quote[] | Movie[] = [];
  const resp = await fetch(link, { headers: API.headers });
  if (resp.status === 200) {
    const arrChar: LotrResponse = await resp.json();
    data = arrChar.docs;
  } else if (resp.status === 429) {
    throw new Error('Too Many Requests. That API requirement, try reload page later');
  }
  return data;
}
