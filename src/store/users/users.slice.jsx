import { createSlice } from "@reduxjs/toolkit";

export const { actions: userAction, reducer: userReducer } = createSlice({
    name: "user",
    initialState: {
        user:[],
    },
    reducers: {
        setUser: (state, { payload }) => {
            state.user = payload
        }
    }
})