import React, { BaseSyntheticEvent, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Item } from '../../types';
import { FormValues, Tags, TypeFood } from '../../types/item';
import { InputField, SelectField, CheckboxField, RadioButtonField } from '../formComponents';
import './newCardForm.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  caloriesInput,
  costInput,
  nameInput,
  startDateInput,
  startRatingInput,
  tagsInput,
  typeInput,
  weightInput,
} from '../../formSlice';

type NewCardFormProp = {
  newCardId: number;
  saveCard: (i: Item) => void;
  confirmAction: (show: boolean) => void;
};

const NewCardForm = (props: NewCardFormProp) => {
  const MAX_RATING = 5;
  const CUR_DATE = Date.now();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormValues>();

  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(nameInput(getValues().name));
      dispatch(costInput(getValues().cost));
      dispatch(weightInput(getValues().weight));
      dispatch(caloriesInput(getValues().calories));
      dispatch(startRatingInput(getValues().startRating));
      dispatch(typeInput(getValues().type));
      dispatch(tagsInput(getValues().tags));
       dispatch(startDateInput(new Date(getValues().startDate).toISOString().slice(0,10)));
    };
  }, []);
  const nameVal = useSelector((state: FormValues) => state.name);
  const costVal = useSelector((state: FormValues) => state.cost);
  const weigthVal = useSelector((state: FormValues) => state.weight);
  const caloriesVal = useSelector((state: FormValues) => state.calories);
  const startRatingVal = useSelector((state: FormValues) => state.startRating);
  const typeVal = useSelector((state: FormValues) => state.type);
  const tagsVal = useSelector((state: FormValues) => state.tags);
  const startDateVal = useSelector((state: FormValues) => new Date(state.startDate).toISOString().slice(0,10));

  const getEnumValues = <T,>(arr: string[] | T[]): string[] => {
    const enumValues = arr.slice(0, arr.length / 2);
    return enumValues.map((val) => `${val}`);
  };

  const getTypeData = (): { values: string[]; choosen: string | undefined } => {
    const arr = getEnumValues(Object.values(TypeFood));
    return { values: arr, choosen: typeVal?.toString() };
  };

  const getTagsData = (): { value: string; choosen: boolean }[] => {
    const arr = getEnumValues(Object.values(Tags));
    return arr.map((val) => {
      return {
        value: val,
        choosen: [...tagsVal].some((v) => v == Tags[val]),
      };
    });
  };

  const getRatingValues = () => {
    return [...Array(MAX_RATING)].map((v, i) => `${i + 1}`);
  };

  const submitAction = async (data: FormValues, e: BaseSyntheticEvent | undefined) => {
    // const newItem: Item = {
    //   // id: props.newCardId,
    //   // type: data.type,
    //   name: data.name,
    //   // cost: data.cost,
    //   // countPerWeek: 0,
    //   // rating: data.startRating,
    //   // calories: data.calories,
    //   // img: URL.createObjectURL(data.image[0]),
    //   // weght: data.weight,
    //   // tags: data.tags,
    //   // startSell: data.startDate,
    // };
    // props.confirmAction(true);
    // setTimeout(() => {
    //   props.confirmAction(false);
    //   props.saveCard(newItem);
    //   e?.target.reset();
    // }, 1000);
  };

  return (
    <form noValidate className="new-card-form" onSubmit={handleSubmit(submitAction)}>
      <InputField
        labelProp="Name"
        type="text"
        refProp={register('name', {
          value: nameVal,
          required: 'Cost has to be filled',
          pattern: { value: /^[A-Z]/, message: 'First letter mus be uppercase' },
        })}
        error={errors.name}
      />
      {/* 
      <InputField
        labelProp="Image (jpg)"
        type="file"
        refProp={register('image', {
          required: 'Image has to be filled',
          validate: {
            ch: (value) => {
              return /\.jpg$/.test(value[0].name) || 'Format image has to be jpg';
            },
          },
        })}
        error={errors.image}
      />*/}
      <InputField
        labelProp="Cost"
        type="number"
        refProp={register('cost', {
          value: costVal,
          required: 'Cost has to be filled',
          min: { value: 0.1, message: 'Cost has to be more than 0' },
          max: { value: 20, message: 'Cost so mutch recheck value cost' },
        })}
        error={errors.cost}
      />
      <InputField
        labelProp="Start Sale"
        type="date"
        refProp={register('startDate', {
          value: startDateVal,
          required: 'Start sale has to be in field',
          valueAsDate: true,
          min: { value: CUR_DATE, message: 'Start sale has to be begins tomorrow at least' },
        })}
        error={errors.startDate}
      />
      <SelectField
        labelProp="Start rating"
        values={getRatingValues()}
        defaultValue=""
        refProp={register('startRating', {
          value: startRatingVal,
          required: 'Rating has to be chosen',
        })}
        error={errors.startRating}
      />
      <CheckboxField
        legendProp="Tags"
        data={getTagsData()}
        refProp={register('tags', { required: 'Need to choose one tag at least' })}
        error={errors.tags}
      />
      <RadioButtonField
        legendProp="Type"
        data={getTypeData()}
        refProp={register('type', { required: 'Type has to be chosen' })}
        error={errors.type}
      />
      <InputField
        labelProp="Weight"
        type="number"
        refProp={register('weight', {
          value: weigthVal,
          required: 'Weight has to be filled',
          min: { value: 1, message: 'Weight has to be more 0' },
        })}
        error={errors.weight}
      />
      <InputField
        labelProp="Calories"
        type="number"
        refProp={register('calories', {
          value: caloriesVal,
          required: 'Calories has to be filled',
        })}
        error={errors.calories}
      />
      <button className="new-card-form__submit" type="submit">
        Sent
      </button>
    </form>
  );
};

export default NewCardForm;
