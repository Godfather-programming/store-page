import axios from "axios";

const api = axios.create({baseURL : "https://fakestoreapi.com/"})

api.interceptors.request.use( request => {return request},  err => {
    console.log(err.message) 
    return Promise.reject(err)
})

api.interceptors.response.use(response => {return response.data}, (err) => {
    console.log(err.message)
    return Promise.reject(err)
} )


export {api}