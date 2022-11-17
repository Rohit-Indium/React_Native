import {createSlice} from '@reduxjs/toolkit'
import taskSlice from './taskSlice';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const getUsers = createAsyncThunk(
    'users/getUsers',
    async (thunkAPI)=>{
        const res = await fetch('https://reqres.in/api/users?page=2').then(
            (res1) => res1.json()
        )
        return res.data
    })

    export const userSlice = createSlice({
        name:"users",
        initialState:[],
        reducers:{
            // addTask:(state,action)=>{
            //     state.push(action.payload)
            // },
            // removeTask:(state,action)=>{
            //     console.log(action.payload)
            //     return action.payload
            // }
        },
        extraReducers:{
            [getUsers.pending]:(state)=>{
            console.log("inthunk")
                //    state.loading=true
            },
            [getUsers.fulfilled]:(state,{payload})=>{
                console.log("inthunk",payload)
            //    state.loading=false
            //    state.entities=payload
            return [...payload]
            },
            [getUsers.rejected]:(state)=>{
            //    state.loading=false
            
            },
        },

    });

//export const {addTask,removeTask}=taskSlice.actions
export default userSlice.reducer
