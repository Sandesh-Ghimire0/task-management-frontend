import {configureStore} from "@reduxjs/toolkit"
import taskReducer from './taskSlice'
import uiReducer from './uiSlice'

export const store = configureStore({
    reducer:{
        task:taskReducer,
        ui:uiReducer
    }
})