import axios from 'axios'

export const api = axios.create({
  baseURL: "https://foodexplorer-api-5hsc.onrender.com"
})