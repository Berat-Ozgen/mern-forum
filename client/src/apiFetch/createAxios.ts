import axios from 'axios'

export const createAxios = () => {
   return axios.create({
        baseURL: "http://localhost:8000"
    })
}