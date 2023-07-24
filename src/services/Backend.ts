import axios from 'axios'
import { BACKEND_URL } from "../constants"

export const BackendService = axios.create({
  baseURL: BACKEND_URL,
  timeout: 10_000,
})
