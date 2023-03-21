enum TypeFood {'drink', 'food'};
enum Tags {"<2" , "<5" , "changing reception" , "delivery"}
type Item = {
  id: number;
  type: TypeFood;
  name: string;
  cost: number;
  countPerWeek: number;
  rating: number;
  calories: number;
  img: string;
  weght: number;
  tags: Tags[]
};

export  { Item, TypeFood, Tags}
