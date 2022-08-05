import { configureStore } from '@reduxjs/toolkit';
import { mainReducer } from './reducer';

export const store = configureStore({ reducer: mainReducer });

//{ reducer,
// devTools: process.env.NODE_ENV === 'development',
// middleware: getDefaultMiddleware =>
//   getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }), }