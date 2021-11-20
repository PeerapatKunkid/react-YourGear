import { createSlice } from '@reduxjs/toolkit'



export const userSlice = createSlice({
    name: "user",
    initialState: {
      name: "",
      group:"",
      userID:"",
    },
    reducers: {
      update: (state, action) => {
          state.name = action.payload.name
          state.group = action.payload.group
          
      },
      remove: (state) => state = {       
      },
      add: (state, action) => {
        state.userID = action.payload.userID
    },
      
  }
})

export const { update, remove,add } = userSlice.actions
export default userSlice.reducer


