export const required = (value) => {
  if (!value) return 'Поле обязательно для заполнения';
  return undefined;
};

export const maxLength
 = (number) => (value) => {
  if (value.length > number) return `Максимальная длина ${number} символов`;
  return undefined;
};
