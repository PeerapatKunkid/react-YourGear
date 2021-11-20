import { createSlice } from "@reduxjs/toolkit";

export const buildDeatilSlice = createSlice({

  name: "buildDetail",
  initialState: {
    id:"",
    userId:"",
    mouse: "",
    keyboard: "",
    headset: "",
    mousepad: "",
    microphone: "",
  },
  reducers: {
    add: (state, action) => {
      state.id = action.payload.id;
      state.userId = action.payload.userId;
      state.mouse = action.payload.mouse;
      state.keyboard = action.payload.keyboard;
      state.headset = action.payload.headset;
      state.mousepad = action.payload.mousepad;
      state.microphone = action.payload.microphone;
    },
    remove: (state) => (state = {}),
    updateUserID: (state, action) => {
      state.userId = action.payload.userId;
    }
  }
});

export const { add, remove ,updateUserID} = buildDeatilSlice.actions;
export default buildDeatilSlice.reducer;
