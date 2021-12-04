import { shoes } from '../database/mockdata';

export const getShoes = (query = 'all', categories, min, max, sizes) => {
  if (query === 'all') {
    return shoes;
  }
  if (query === 'high') {
    let result = [...shoes].sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    return result;
  }
  if (query === 'low') {
    let result = [...shoes].sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    return result;
  }
  if (query === 'apply three filters') {
    return applyThreeLevelFilter(categories, min, max, sizes);
  }
};

export const applyThreeLevelFilter = (categories, min, max, sizes) => {
  let numericSize = sizes.map((s) => parseInt(s));
  let result = [...shoes].filter((shoe) => {
    if (
      categories.includes(shoe.category) &&
      numericSize.some((i) => shoe.sizes.includes(i)) &&
      shoe.price >= min &&
      shoe.price <= max
    ) {
      return shoe;
    }
  });

  return result;
};

export const getShoesByRange = (min, max) => {
  return [...shoes].filter((item) => {
    if (item.price >= min && item.price <= max) {
      return item;
    }
  });
};

export const getShoesBySize = (sizes) => {
  let numericSize = sizes.map((s) => parseInt(s));
  let result = [...shoes].filter((shoe) => {
    if (numericSize.some((i) => shoe.sizes.includes(i))) {
      return shoe;
    }
  });

  return result;
};

export const getShoesByCategory = (categories) => {
  let result = [...shoes].filter((shoe) => {
    if (categories.includes(shoe.category)) {
      return shoe;
    }
  });
  return result;
};

export const getCategory = () => {
  let array = [];
  shoes.map((item) => array.push(item.category));
  let unique = [...new Set(array)];
  return unique;
};

export const getSizes = () => {
  return [3, 4, 5, 6, 7, 8, 9, 10];
};
