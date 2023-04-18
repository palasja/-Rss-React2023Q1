export const checkNaNValue = (val: string) => (val === 'NaN' ? undefined : val);

export const assertDefined = <Type,>(value: Type): NonNullable<Type> => {
  if (value === undefined || value === null) throw new Error('Asserted value is not defined!');
  return value as NonNullable<Type>;
};
