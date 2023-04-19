import React, { BaseSyntheticEvent, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Item } from '../../types';
import { FormValues, Tags, TypeFood } from '../../types/item';
import { InputField, SelectField, CheckboxField, RadioButtonField } from '../formComponents';
import './newCardForm.css';
import { useDispatch, useSelector } from 'react-redux';

import { assertDefined } from '../../helper/helpers';
import { formState, formReset, formSave } from '../../store/slicer/formSlice';
import { addItem } from '../../store/slicer/newCardSlicer';

type NewCardFormProp = {
  newCardId: number;
  confirmAction: (show: boolean) => void;
};

const NewCardForm = (props: NewCardFormProp) => {
  const MAX_RATING = 5;
  const CUR_DATE = Date.now();
  const form = useSelector(formState);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      name: form.name,
      cost: form.cost,
      calories: form.calories,
      startRating: form.startRating,
      weight: form.weight,
      startDate: form.startDate,
      tags: form.tags,
      type: form.type,
    },
  });

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      const save = () => {
        const file = assertDefined(getValues().image)[0];
        let blob = '';
        if (file !== undefined) {
          blob = URL.createObjectURL(file);
        } else if (file === undefined && form.imageBlob.length !== 0) {
          blob = form.imageBlob;
        }

        const date = isNaN(Date.parse(getValues().startDate))
          ? ''
          : new Date(getValues().startDate).toISOString().slice(0, 10);

        const tags = getValues().tags.map((v) =>
          isNaN(Number[Tags[v]]) ? Tags[v] : Tags[Tags[v]]
        );

        const curForm: FormValues = {
          name: getValues().name,
          image: null,
          imageBlob: blob,
          cost: getValues().cost,
          startDate: date,
          weight: getValues().weight,
          calories: getValues().calories,
          startRating: getValues().startRating,
          type: getValues().type,
          tags: tags,
        };
        dispatch(formSave(curForm));
      };
      save();
    };
  }, [dispatch, form.imageBlob, getValues]);

  const getEnumValues = <T,>(arr: string[] | T[]): string[] => {
    const enumValues = arr.slice(0, arr.length / 2);
    return enumValues.map((val) => `${val}`);
  };

  const getTypeData = (): { values: string[]; choosen: string | undefined } => {
    const arr = getEnumValues(Object.values(TypeFood));
    return { values: arr, choosen: form.type?.toString() };
  };

  const getTagsData = (): { value: string; choosen: boolean }[] => {
    const arr = getEnumValues(Object.values(Tags));
    return arr.map((val) => {
      return {
        value: val,
        choosen: [...form.tags].some((v) => v == Tags[val]),
      };
    });
  };

  const getRatingValues = () => {
    return [...Array(MAX_RATING)].map((v, i) => `${i + 1}`);
  };

  const submitAction = async (data: FormValues, e: BaseSyntheticEvent | undefined) => {
    const newItem: Item = {
      id: props.newCardId,
      type: assertDefined(data.type),
      name: data.name,
      cost: data.cost,
      countPerWeek: 0,
      rating: data.startRating,
      calories: data.calories,
      img:
        data.image?.length !== 0
          ? URL.createObjectURL(assertDefined(data.image)[0])
          : form.imageBlob,
      weight: data.weight,
      tags: data.tags,
      startSell: new Date(data.startDate),
    };
    props.confirmAction(true);
    setTimeout(() => {
      props.confirmAction(false);
      dispatch(addItem(JSON.stringify(newItem)));
      dispatch(formReset());
      e?.target.reset();
    }, 1000);
  };

  return (
    <form
      noValidate
      className="new-card-form"
      onSubmit={handleSubmit(submitAction)}
      data-testid="new-card-form"
    >
      <InputField
        labelProp="Name"
        type="text"
        refProp={register('name', {
          required: 'Cost has to be filled',
          pattern: { value: /^[A-Z]/, message: 'First letter mus be uppercase' },
        })}
        error={errors.name}
      />
      <InputField
        labelProp="Image (jpg)"
        type="file"
        refProp={register('image', {
          validate: {
            blob: (value) => {
              return (
                (value || form.imageBlob.length !== 0 ? true : false) || 'Image has to be filled'
              );
            },
          },
        })}
        error={errors.image}
      >
        {form.imageBlob.length === 0 ? null : (
          <img src={form.imageBlob} className="img-field"></img>
        )}
      </InputField>
      <InputField
        labelProp="Cost"
        type="number"
        refProp={register('cost', {
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
          required: 'Weight has to be filled',
          min: { value: 1, message: 'Weight has to be more 0' },
        })}
        error={errors.weight}
      />
      <InputField
        labelProp="Calories"
        type="number"
        refProp={register('calories', {
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
