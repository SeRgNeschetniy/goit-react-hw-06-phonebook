export const getFilteredContacts = ({ contacts }) => {
  console.log(contacts);

  const { items, filter } = contacts;
  if (!filter) {
    return items;
  }

  const normalizedFilter = filter.toLocaleLowerCase();
  const filteredContacts = items.filter(({ name, number }) => {
    const normalizedTitle = name.toLocaleLowerCase();
    const result =
      normalizedTitle.includes(normalizedFilter) ||
      number.includes(normalizedFilter);
    return result;
  });

  return filteredContacts;
};
