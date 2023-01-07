import axios, {AxiosInstance} from 'axios'

export const createAxios = ():AxiosInstance => {
   return axios.create({
        baseURL: "http://localhost:8000"
    })
}