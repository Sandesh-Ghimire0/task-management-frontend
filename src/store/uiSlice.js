
import { createSlice } from "@reduxjs/toolkit";


const uiSlice = createSlice({
    name:'ui',
    initialState:{
        showTaskForm:false
    },
    reducers:{
        openTaskForm:(state)=>{
            state.showTaskForm = true
        },
        closeTaskForm:(state)=>{
            state.showTaskForm = false
        }
    }
})


export const {openTaskForm, closeTaskForm} = uiSlice.actions
export default uiSlice.reducer