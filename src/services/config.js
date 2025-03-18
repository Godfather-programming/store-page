import axios from "axios";
import { createContext } from "react";

const DataContext = createContext()

const api = axios.create({baseURL : "https://fakestoreapi.com/"})

api.interceptors.request.use( request => {return request},  err => {
    return Promise.reject(err)
})

api.interceptors.response.use(response => response.data, err => {
    return Promise.reject(err)
} )


export {api}