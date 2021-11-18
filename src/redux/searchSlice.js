import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name: "compareDetail",
    initialState: {
      text: ""
    },
  
    reducers: {
      add: (state, action) => {
        state.text = action.payload.text
      },
      remove: (state) => (state = {})
    }
  });
  
  export const { add, remove } = searchSlice.actions;
  export default searchSlice.reducer;
  