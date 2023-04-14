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
  // id: number;
  // type: TypeFood;
  name: string;
  cost: number;
//   countPerWeek: number;
//   rating: number;
  calories: number;
//   img: string;
weight: number;
//   tags: Tags[];
//   startSell: Date;
};

type FormValues = {
  name: string;
  // image: FileList;
  cost: number;
  // startDate: Date;
  weight: number;
  calories: number;
  // startRating: number;
  // type: TypeFood;
  // tags: Tags[];
};

export { Item, TypeFood, Tags, FormValues };
