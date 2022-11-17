import { createSlice } from '@reduxjs/toolkit';

export const imageslice = createSlice({
    name: "addImage",
    initialState: [],

    reducers: {
        addImage: (state, action) => {
            //console.log(action.payload)
            return action.payload
        },
    }

});
export const { addImage } = imageslice.actions
export default imageslice.reducer