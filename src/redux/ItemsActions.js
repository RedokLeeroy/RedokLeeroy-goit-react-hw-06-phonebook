import { createAction } from '@reduxjs/toolkit';

export const AddAction = createAction('add', (phone, name) => ({
  payload: {
    phone: phone,
    name: name,
  },
}));

export const deleteAction = createAction('delete');
export const filterAction = createAction('filter');
