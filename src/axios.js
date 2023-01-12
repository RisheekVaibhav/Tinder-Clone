import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://Amber Heard:8001/'
})

export default instance;