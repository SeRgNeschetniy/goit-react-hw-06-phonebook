import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// reducers
import contactReducer from 'redux/reducer';

const booksPersistConfig = {
  key: 'root',
  storage,
  blacklist: ['filter'],
};

const persistedBooksReducer = persistReducer(
  booksPersistConfig,
  contactReducer
);

export const store = configureStore({
  reducer: {
    contacts: persistedBooksReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
