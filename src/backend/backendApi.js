import axios from 'axios'

const backendApi = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production' ? 'http://54.78.229.191:8800/' : 'http://localhost:8800',
})

export default backendApi
