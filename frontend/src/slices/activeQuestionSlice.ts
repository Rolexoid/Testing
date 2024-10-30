import { createSlice } from '@reduxjs/toolkit';
import { PURGE } from "redux-persist";
import type {PayloadAction} from "@reduxjs/toolkit"

const initialState = {
  activeId: 1,
  progressId: 1,
  testIsActive: false,
};

const activeQuestionSlice = createSlice({
  name: 'appControl',
  initialState,
  reducers: {
    setActiveQuestionId (state, action: PayloadAction<number>) {
      state.activeId = action.payload;
    },
    setNextQuestionId (state) {
      state.progressId += 1;
      state.activeId = state.progressId;
    },
    setIsActiveTest (state, action: PayloadAction<boolean>) {
      state.testIsActive = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => {
      return initialState;
    });
  },
});

export const { setActiveQuestionId, setNextQuestionId, setIsActiveTest } = activeQuestionSlice.actions;
export default activeQuestionSlice.reducer;