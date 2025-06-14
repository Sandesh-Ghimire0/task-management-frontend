import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTasks, updateTask } from "../api/api";

export const fetchTasks = createAsyncThunk('task/fetchTasks',async () => {
    try {
        const res = await getTasks()
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

        removeTask:(state, action)=>{
            state = state.filter(task => task._id !== action.payload)
            return state
        },
        editTask:(state, action)=>{
            return state.map(task => (   // map should return the value
                task._id !== action.payload._id
                    ?task
                    :action.payload
            ))
        }
    },
    extraReducers:(builder) =>{
        builder.addCase(fetchTasks.fulfilled, (state, action)=>{
            return action.payload
        })
    }
})

export const {addTask, removeTask,editTask } = taskSlice.actions
export default taskSlice.reducer