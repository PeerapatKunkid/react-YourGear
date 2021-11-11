import { createSlice } from '@reduxjs/toolkit'



export const userSlice = createSlice({
    name: "user",
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
})

export const { update, remove } = userSlice.actions
export default userSlice.reducer


