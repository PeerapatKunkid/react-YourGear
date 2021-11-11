import { createSlice } from "@reduxjs/toolkit";

export const compareDetailSlice = createSlice({
  name: "compareDetail",
  initialState: {
    items: []
  },

  reducers: {
    add: (state, action) => {
      if (!state.items) {
        state.items = [action.payload.items];
      } else {
        state.items.push(action.payload.items);
      }
    },
    remove: (state) => (state = {})
  }
});

export const { add, remove } = compareDetailSlice.actions;
export default compareDetailSlice.reducer;
