import React, { createRef } from 'react';
import { Component, FormEvent, ReactNode } from 'react';
import { Item } from '../../types';
import { Tags, TypeFood } from '../../types/item';
import { InputField, SelectField, CheckboxField, RadioButtonField } from '../formComponents';
import './newCardForm.css';

type NewCardFormProp = {
  newCardId: number;
  saveCard: (i: Item) => void;
  confirmAction: () => void;
};
type NewCardFormState = {
  errors: object;
};
class NewCardForm extends Component<NewCardFormProp, NewCardFormState> {
  maxRating = 5;
  refForm = createRef<HTMLFormElement>();
  refCardName = createRef<HTMLInputElement>();
  refCardImage = createRef<HTMLInputElement>();
  refCardRating = createRef<HTMLSelectElement>();
  refCardWeight = createRef<HTMLInputElement>();
  refCardCost = createRef<HTMLInputElement>();
  refCardCalories = createRef<HTMLInputElement>();
  refCardStartSellDate = createRef<HTMLInputElement>();
  refsTagArr = Object.values(Tags).map(() => createRef<HTMLInputElement>());
  refsTypeArr = Object.values(TypeFood).map(() => createRef<HTMLInputElement>());
  constructor(props) {
    super(props);
    this.state = { errors: {} };
  }
  getEnumValues<T>(arr: string[] | T[]): string[] {
    const enumValues = arr.slice(0, arr.length / 2);
    return enumValues.map((val) => `${val}`);
  }
  getRatingValues() {
    return [...Array(this.maxRating)].map((v, i) => `${i + 1}`);
  }
  assertDefined<Type>(value: Type): NonNullable<Type> {
    if (value === undefined || value === null) throw new Error('Asserted value is not defined!');
    return value as NonNullable<Type>;
  }
  validateForm(): { [string: string]: string } {
    const curentError = {};

    const name = this.refCardName.current?.value;
    if (name === undefined || name.length == 0) {
      curentError['cost'] = 'Cost has to be filled';
    } else if (!/[A-Z]/.test(this.assertDefined(name)[0])) {
      curentError['name'] = 'First letter mus be uppercase';
    }

    const cost = this.refCardCost.current?.value;
    if (cost === undefined || cost.length == 0) {
      curentError['cost'] = 'Cost has to be filled';
    } else if (Number(cost) <= 0) {
      curentError['cost'] = 'Cost has to be more than 0';
    } else if (Number(cost) > 20) {
      curentError['cost'] = `${cost} so muth, recheck value cost`;
    }

    const startSell = this.refCardStartSellDate.current?.value;
    if (startSell === undefined || startSell.length == 0) {
      curentError['startSale'] = 'Start sale has to be in field';
    } else if (Date.parse(startSell) < Date.now()) {
      curentError['startSale'] = 'Start sale has to be begins tomorrow at least';
    }

    const rating = this.refCardRating.current?.value;
    if (rating === undefined || rating.length == 0) {
      curentError['rating'] = 'Rating has to be chosen';
    }

    const image = this.refCardImage.current?.value;
    if (image === undefined || image.length == 0) {
      curentError['image'] = 'Image has to be filled';
    } else if (!/\.jpg$/.test(image)) {
      curentError['image'] = 'Format image has to be jpg';
    }

    const calories = this.refCardCalories.current?.value;
    if (calories === undefined || calories.length == 0) {
      curentError['calories'] = 'Calories has to be filled';
    }
    const weight = this.refCardWeight.current?.value;
    if (weight === undefined || weight.length == 0) {
      curentError['weight'] = 'Weight has to be filled';
    } else if (Number(weight) <= 0) {
      curentError['weight'] = 'Weight has to be more 0';
    }

    const type = this.refsTypeArr.find((t) => t.current?.checked);
    if (type === undefined) {
      curentError['type'] = 'Type has to be chosen';
    }
    const tags = this.refsTagArr.filter((t) => t.current?.checked);
    if (tags.length === 0) {
      curentError['tags'] = 'Need to choose one tag at least';
    }
    return curentError;
  }
  submitAction = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.setState({ errors: {} });
    const validateResult = this.validateForm();
    if (Object.keys(validateResult).length !== 0) {
      this.setState({ errors: this.validateForm() });
    } else {
      const tags: Tags[] = this.refsTagArr
        .filter((t) => t.current?.checked)
        .map((t) => Tags[this.assertDefined(t.current?.name)]);
      const type = this.refsTypeArr.find((t) => t.current?.checked);
      const newItem: Item = {
        id: this.props.newCardId,
        type: TypeFood[this.assertDefined(type?.current?.defaultValue)],
        name: this.refCardName.current?.value,
        cost: this.refCardCost.current?.value,
        countPerWeek: 0,
        rating: this.refCardRating.current?.value,
        calories: this.refCardCalories.current?.value,
        img: URL.createObjectURL(this.assertDefined(this.refCardImage.current?.files)[0]),
        weght: this.refCardWeight.current?.value,
        tags: tags,
        startSell: Date.parse(this.assertDefined(this.refCardStartSellDate.current?.value)),
      };
      this.props.confirmAction();
      setTimeout(() => {
        this.props.confirmAction();
        this.props.saveCard(newItem);
        this.refForm.current?.reset();
      }, 1000);
    }
  };
  render(): ReactNode {
    return (
      <form
        noValidate
        className="new-card-form"
        ref={this.refForm}
        onSubmit={(e) => this.submitAction(e)}
      >
        <InputField
          labelProp="Name"
          type="text"
          refProp={this.refCardName}
          errorMessagee={this.state.errors['name']}
        />

        <InputField
          labelProp="Image (jpg)"
          type="file"
          refProp={this.refCardImage}
          errorMessagee={this.state.errors['image']}
        />
        <InputField
          labelProp="Cost"
          type="number"
          refProp={this.refCardCost}
          errorMessagee={this.state.errors['cost']}
        />
        <InputField
          labelProp="Start Sale"
          type="date"
          refProp={this.refCardStartSellDate}
          errorMessagee={this.state.errors['startSale']}
        />
        <SelectField
          labelProp="Start rating"
          refProp={this.refCardRating}
          values={this.getRatingValues()}
          defaultValue=""
          errorMessagee={this.state.errors['rating']}
        />
        <CheckboxField
          legendProp="Tags"
          values={this.getEnumValues(Object.values(Tags))}
          refArr={this.refsTagArr}
          errorMessagee={this.state.errors['tags']}
        />
        <RadioButtonField
          legendProp="Type"
          values={this.getEnumValues(Object.values(TypeFood))}
          refArr={this.refsTypeArr}
          errorMessagee={this.state.errors['type']}
        />
        <InputField
          labelProp="Weight"
          type="number"
          refProp={this.refCardWeight}
          errorMessagee={this.state.errors['weight']}
        />
        <InputField
          labelProp="Calories"
          type="number"
          refProp={this.refCardCalories}
          errorMessagee={this.state.errors['calories']}
        />
        <button className="new-card-form__submit" type="submit">
          Sent
        </button>
      </form>
    );
  }
}

export default NewCardForm;
