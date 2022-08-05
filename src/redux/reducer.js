import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { addAction, deleteAction, filterAction } from './ItemsActions';
import { itemsInitialState } from './items-init-state';

const itemsReducer = createReducer(itemsInitialState.add, {
  [addAction]: (state, action) => [...state, action.payload],
  [deleteAction]: (state, action) =>
    state.filter(item => item.id !== action.payload),
});

const filterReducer = createReducer(itemsInitialState.filter, {
  [filterAction]: (_, action) => action.payload,
});

export const mainReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
