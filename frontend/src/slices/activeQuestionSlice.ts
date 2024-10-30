import { createSlice } from '@reduxjs/toolkit';
import { PURGE } from "redux-persist";
import type {PayloadAction} from "@reduxjs/toolkit"

const initialState = {
  activeId: 1,
  progressId: 1
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
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => {
      return initialState;
    });
  },
});

export const { setActiveQuestionId, setNextQuestionId } = activeQuestionSlice.actions;
export default activeQuestionSlice.reducer;