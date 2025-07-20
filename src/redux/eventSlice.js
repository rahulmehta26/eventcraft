import { createSlice } from "@reduxjs/toolkit";
import { getEventsFromStorage, saveEventsToStorage } from "../utils/recurrenceUtils";

const initialState = getEventsFromStorage();

const eventSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    addEvent: (state, action) => {
      state.push(action.payload);
      saveEventsToStorage(state);
    },
  },
});

export const { addEvent } = eventSlice.actions;
export default eventSlice.reducer;