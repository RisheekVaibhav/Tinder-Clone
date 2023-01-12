import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://splendid-gumption-2d1133.netlify.app'
})

export default instance;