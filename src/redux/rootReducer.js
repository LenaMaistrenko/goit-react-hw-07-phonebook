import { combineReducers } from '@reduxjs/toolkit';
import { contactReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

export const rootReducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
});
