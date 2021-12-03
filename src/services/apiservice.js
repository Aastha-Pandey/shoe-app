import { shoes } from '../database/mockdata';

export const getAllShoes = () => {
  return shoes;
};

export const getShoesByLowToHigh = () => {
  let result = shoes.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
  return result;
};

export const getShoesByHighToLow = () => {
  let result = shoes.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
  return result;
};

export const getShoesByCategory = () => {
  return shoes;
};

export const getShoesBySize = () => {
  return shoes;
};
