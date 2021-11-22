import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    group: "",
    userID: "",
    type: "",
  },
  reducers: {
    update: (state, action) => {
      state.name = action.payload.name;
      state.group = action.payload.group;
    },
    remove: (state) => (state = {}),
    add: (state, action) => {
      state.userID = action.payload.userID;
    },
    addtype: (state, action) => {
      state.type = action.payload.type;
    },
  },
});

export const { update, remove, add,addtype } = userSlice.actions;
export default userSlice.reducer;
