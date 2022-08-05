import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { AddAction, deleteAction, filterAction } from './ItemsActions';
import { itemsInitialState } from './items-init-state';

const itemsReducer = createReducer(itemsInitialState.add, {
  [AddAction]: (state, action) => [...state, action.payload],
  [deleteAction]: (state, action) =>
    state.filter(item => item.id !== action.payload),
});

const filterReducer = createReducer(itemsInitialState.filter, {
  [filterAction]: (state, action) => action.payload,
});

export const reducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
