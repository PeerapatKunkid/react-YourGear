import { createSlice } from "@reduxjs/toolkit";

export const compareDetailSlice = createSlice({
  name: "compareDetail",
  initialState: {
    mouse: [],
    keyboard:  [],
    headset:  [],
    mousepad: [],
    microphone: [],
  },
  reducers: {
    add: (state, action) => {
      // state.headset.push(action.payload.headset);
      state.headset = action.payload.headset;
      
    },
    remove: (state) => (state = {})
  }
});

export const { add, remove } = compareDetailSlice.actions;
export default compareDetailSlice.reducer;
