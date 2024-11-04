const parseBoolean = (value) => {
  if (typeof value === 'string') {
    return value.toLowerCase() === 'true';
  }
  return Boolean(value);
};

const parseType = (type) => {
  const isString = typeof type === 'string';
  if (!isString) return;
  const validTypes = ['work', 'home', 'personal'];
  if (validTypes.includes(type)) {
    return type;
  }
};

export const parseFilterParams = (query) => {
  const { isFavourite, type } = query;

  const parsedIsFavourite = parseBoolean(isFavourite);
  const parsedType = parseType(type);

  return {
    isFavourite: parsedIsFavourite,
    type: parsedType,
  };
};
