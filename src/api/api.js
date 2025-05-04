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