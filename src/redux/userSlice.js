import { createSlice } from '@reduxjs/toolkit'



export const userSlice = createSlice({
    name: "user",
    initialState: {
      name: ""
    },
    reducers: {
      update: (state, action) => {
          state.name = action.payload.name
      },
      remove: (state) => state = {}
  }
})

export const { update, remove } = userSlice.actions
export default userSlice.reducer


