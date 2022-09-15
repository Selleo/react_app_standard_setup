import axios from '../axios'

export const fetchResources = () => axios.get('/resources')

export const fetchResource = ({ queryKey }) =>
  axios.get(`/resource/${queryKey[1].resourceId}`)

export const createResource = (data) => axios.post(`/resources`, data)
