enum TypeFood {
  'drink',
  'food',
}
enum Tags {
  '<2',
  '<5',
  'changing reception',
  'delivery',
}
type Item = {
  id: number;
  type: TypeFood;
  name: string;
  cost: number;
  countPerWeek: number;
  rating: number;
  calories: number;
  img: string;
  weight: number;
  tags: Tags[];
  startSell: Date;
};

type FormValues = {
  name: string;
  image: FileList | null;
  imageBlob: string;
  cost: number;
  startDate: string;
  weight: number;
  calories: number;
  startRating: number;
  type: TypeFood | null;
  tags: Tags[];
};

type NewCards = {
  cards: Item[];
};
export { Item, TypeFood, Tags, FormValues, NewCards };
