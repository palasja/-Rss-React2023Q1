import React, { BaseSyntheticEvent, createRef } from 'react';
import { useForm } from 'react-hook-form';
import { Item } from '../../types';
import { Tags, TypeFood } from '../../types/item';
import { InputField, SelectField, CheckboxField, RadioButtonField } from '../formComponents';
import './newCardForm.css';

type NewCardFormProp = {
  newCardId: number;
  saveCard: (i: Item) => void;
  confirmAction: () => void;
};

type FormValues = {
  name: string;
  image: FileList;
  cost: string;
  startDate: string;
  weight: string;
  calories: string;
  startRating: string;
  type: string;
  tags: string[],
};

const NewCardForm = (props: NewCardFormProp) => {
  const MAX_RATING = 5;
  const CUR_DATE = Date.now();
  const {register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const getEnumValues = <T,>(arr: string[] | T[]): string[] => {
    const enumValues = arr.slice(0, arr.length / 2);
    return enumValues.map((val) => `${val}`);
  }
  const getRatingValues = () => {
    return [...Array(MAX_RATING)].map((v, i) => `${i + 1}`);
  }

  const submitAction = async (data: FormValues, e: BaseSyntheticEvent | undefined) => {
     const newItem: Item = {
        id: props.newCardId,
        type: data.type,
        name: data.name,
        cost: data.cost,
        countPerWeek: 0,
        rating: data.startRating,
        calories: data.calories,
        img: URL.createObjectURL(data.image[0]),
        weght: data.weight,
        tags: data.tags,
        startSell: data.startDate,
      };
      console.log(data);
      props.confirmAction();
      setTimeout(() => {
        props.confirmAction();
        props.saveCard(newItem);
        e?.target.reset();
      }, 1000);
  };

    return (
      <form
        noValidate
        className="new-card-form"
        onSubmit={handleSubmit(submitAction)}
      >
        <InputField
          labelProp="Name"
          type="text"
          refProp={register("name", {required:"Cost has to be filled", pattern:{value:/^[A-Z]/, message:"First letter mus be uppercase"}}) }
          error={errors.name}
        />

        <InputField
          labelProp="Image (jpg)"
          type="file"
          refProp={register("image", {required: "Image has to be filled", validate:{ ch: value => { return /\.jpg$/.test(value[0].name) || "Format image has to be jpg"}}}) }
          error={errors.image}
        />
        <InputField
          labelProp="Cost"
          type="number"
          refProp={register('cost',  {required:"Cost has to be filled", min:{value: 0.1, message:"Cost has to be more than 0"}, max:{value: 20, message: "Cost so mutch recheck value cost"}}) }
          error={errors.cost}
        />
        <InputField
          labelProp="Start Sale"
          type="date"
          refProp={register('startDate', {required:"Start sale has to be in field", valueAsDate: true ,min:{value:CUR_DATE, message: "Start sale has to be begins tomorrow at least"}}) }
          error={errors.startDate}
        />
        <SelectField
          labelProp="Start rating"
          values={getRatingValues()}
          defaultValue=""
          refProp={register('startRating', {required:"Rating has to be chosen"}) }
          error={errors.startRating}
        />
        <CheckboxField
          legendProp="Tags"
          values={getEnumValues(Object.values(Tags))}
          refProp={register('tags', {required:"Need to choose one tag at least"}) }
          error={errors.tags}
        />
        <RadioButtonField
          legendProp="Type"
          values={getEnumValues(Object.values(TypeFood))}
          refProp={register('type', {required:"Type has to be chosen"}) }
          error={errors.type}
        /> 
        <InputField
          labelProp="Weight"
          type="number"
          refProp={register('weight', {required:"Weight has to be filled", min:{value:1, message:"Weight has to be more 0"}}) }
          error={errors.weight}
        />
        <InputField
          labelProp="Calories"
          type="number"
          refProp={register('calories', {required:"Calories has to be filled"}) }
          error={errors.calories}
        />
        <button className="new-card-form__submit" type="submit">
          Sent
        </button>
      </form>
    );
}

export default NewCardForm;
