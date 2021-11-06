import { createSlice } from "@reduxjs/toolkit";

export const compareDetailSlice = createSlice({
  name: "compareDetail",
  initialState: {
    headset: [],
  },

  reducers: {
    add: (state, action) => {
      state.headset=action.payload.headset;
    },
    remove: (state) => (state = {}),
  },
});

export const { add, remove } = compareDetailSlice.actions;
export default compareDetailSlice.reducer;
