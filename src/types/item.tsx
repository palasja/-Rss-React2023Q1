type TypeFood = "drink"|"food";

type Item = {
	id: number
	type: TypeFood,
	name: string,
	cost: number,
	countPerWeek: number,
	rating: number,
	calories: number,
	img: string,
	weght: number
}

export default Item;