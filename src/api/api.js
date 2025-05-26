import axios from 'axios'


const api = axios.create({
    baseURL:"/api"
})


export async function getTasks(){
    try {
        return await api.get('/task/tasks')
    } catch (error) {
        console.log(error)
    }
}


export async function postTask(data){
    try {
        const res = await api.post('/task/add-task',data)
        return res
    } catch (error) {
        console.error("Failed to add task:",error)
    }
}


export async function deleteTask(_id){
    try {
        const res = await api.post('/task/delete-task',{_id})
        return res
    } catch (error) {
        console.error("Failed to delete task:",error)

    }
}

export async function updateTask(updatedTask){
    try {
        const res = await api.put('/task/update-task',updatedTask)
        return res
    } catch (error) {
        console.log("Failed to update task: ",error)
    }
}



export async function loginUser(user){
    try {
        const res = await api.post('/user/login',user)
        return res
    } catch (error) {
        console.log(error.response.data.message)
        return error
    }
}


export async function logoutUser(){
    try {
        const res = await api.post('/user/logout',{})
    } catch (error) {
        console.log("logoutFailed",error)
    }
}


export async function signUpUser(user){
    try {
        const res = await api.post('/user/signup',user)
        return res
    } catch (error) {
        console.log(error.response.data.message)
        return error
    }
}