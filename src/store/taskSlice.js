import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTasks } from "../api/api";

export const fetchTasks = createAsyncThunk('task/fetchTasks',async () => {
    try {
        const res = await getTasks()
        console.log(res.data.data)
        return res.data.data
    } catch (error) {
        console.log(error.message)
    }
})



const taskSlice = createSlice({
    name:'task',
    initialState:[],
    reducers:{
        addTask:(state, action)=>{
            state.push(action.payload)
        },

        deleteTask:(state, action)=>{
            state = state.filter(task => task._id !== action.payload)
        }
    },
    extraReducers:(builder) =>{
        builder.addCase(fetchTasks.fulfilled, (state, action)=>{
            return action.payload
        })
    }
})

export const {addTask, deleteTask} = taskSlice.actions
export default taskSlice.reducer