import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? 'https://boostme.com' : 'http://localhost:8800',
})

export default instance
