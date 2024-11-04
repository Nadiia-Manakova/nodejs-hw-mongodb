export const calculatePaginationData = (data, count, perPage, page) => {
  const totalPages = Math.ceil(count / perPage);
  const hasNextPage = Boolean(totalPages - page);
  const hasPreviousPage = page !== 1;

  return {
    data,
    page,
    perPage,
    totalItems: count,
    totalPages,

    hasPreviousPage,
    hasNextPage,
  };
};
