import axios from 'axios'

const backendApi = axios.create({
  // baseURL: 'http://54.78.229.191:8800/',
  // baseURL: 'http://localhost:8800',
  baseURL: 'https://api.boostnboom.com',
})

export default backendApi
