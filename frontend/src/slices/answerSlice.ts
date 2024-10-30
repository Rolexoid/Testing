import { createSlice } from '@reduxjs/toolkit'
import { PURGE } from "redux-persist"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { Answer, AnswerState } from '../types'

const initialState: AnswerState = {
  answers: [],
};

const answerSlice = createSlice({
  name: 'answers',
  initialState,
  reducers: {
    setAnswer (state, action: PayloadAction<Answer>) {
      state.answers = state.answers.filter((item: Answer) => item.id !== action.payload.id);
      state.answers.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => {
      return initialState;
    });
  },
});

export const { setAnswer } = answerSlice.actions;
export default answerSlice.reducer;