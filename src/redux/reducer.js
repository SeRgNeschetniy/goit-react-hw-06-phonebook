import { combineReducers } from '@reduxjs/toolkit';

import items from 'redux/itemsSlice';
import filter from 'redux/filterSlice';

const contactReducer = combineReducers({
  items,
  filter,
});

export default contactReducer;
