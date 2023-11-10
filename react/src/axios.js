import axios from "axios";
import { error } from "laravel-mix/src/Log";

const axiosClient = axios.create({
    baseURL:`${import.meta.env.VITE_API_Base_URL}/api`
});import router from './router';


axiosClient.interceptors.request.use((Config){
    const token = '123'; //Todo
    Config.headers.Authorization = `Bearer ${token}`
});

axiosClient.interceptors.response.use(response =>{
    return response;
},error =>{
    if(error.response && error.response.status === 401){
        router.navigate('/login')
        return error;
    }
throw error;
})

export default axiosClient;
