import axios from 'axios'


const api = axios.create({
    baseURL:"/api"
})


export function getTasks(){
    try {
        return api.get('/task/tasks')
    } catch (error) {
        console.log(error)
    }
}

