import { configureStore } from "@reduxjs/toolkit";
import { useReducer } from "react";
import taskReducer from "./reducers/taskSlice";
import userReducer from "./reducers/userslice";
import ImageReducer from "./reducers/imageslice";
import logger from 'redux-logger';

export default configureStore({
    reducer: {
        tasks: taskReducer,
        users: userReducer,
       imageslice: ImageReducer,
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(logger),
})
