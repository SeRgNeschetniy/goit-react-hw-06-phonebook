import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const itemsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    addContact: {
      reducer: (store, { payload }) => {
        store.push(payload);
      },
      prepare: data => {
        return {
          payload: {
            ...data,
            id: nanoid(),
          },
        };
      },
    },
    removeContact: (store, { payload }) =>
      store.filter(({ id }) => id !== payload),
  },
});

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

export const { addContact, removeContact } = itemsSlice.actions;

export default itemsSlice.reducer;
