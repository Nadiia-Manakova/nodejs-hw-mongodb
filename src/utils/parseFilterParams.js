const parseType = (type) => {
  if (typeof type === 'string' && ['work', 'home', 'personal'].includes(type)) {
    return type;
  }
  return;
};

const parseFavorite = (isFavorite) => {
  if (isFavorite === 'true') return true;
  if (isFavorite === 'false') return false;
  return;
};

export const parseFilterParams = (query) => {
  const { type, isFavorite } = query;

  const parsedType = parseType(type);
  const parsedFavorite = parseFavorite(isFavorite);

  return {
    type: parsedType,
    isFavorite: parsedFavorite,
  };
};
