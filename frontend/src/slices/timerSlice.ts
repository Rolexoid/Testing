import { createSlice } from '@reduxjs/toolkit';
import { PURGE } from "redux-persist";
import type {PayloadAction} from "@reduxjs/toolkit"
import { timer } from '../data/index'

const initialState = {
  seconds: timer,
};

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    decrement (state, action: PayloadAction<number>) {
      state.seconds = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => {
      return initialState;
    });
  },
});

export const { decrement } = timerSlice.actions;
export default timerSlice.reducer;