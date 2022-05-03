import axios from "axios";
import NProgress from 'nprogress'
import "nprogress/nprogress.css"
import {BASEURL} from './config'
const requests = axios.create({
    baseURL: BASEURL,
    timeout: 5000,
})

requests.interceptors.request.use((config) => {
    NProgress.start()
    return config
})

requests.interceptors.response.use((res) => {
    NProgress.done()
    return res.data

}, (err) => {
    return Promise.reject(new Error(err))
})

export default requests