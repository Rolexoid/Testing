import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux'
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
import storage from "redux-persist/lib/storage";
import activeQuestionReducer from './activeQuestionSlice';
import answerSliceReducer from './answerSlice';
import timerSliceReducer from './timerSlice';

const rootReducer = combineReducers({
  appControl: activeQuestionReducer,
  answers: answerSliceReducer,
  timer: timerSliceReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof rootReducer>

export const persistor = persistStore(store);