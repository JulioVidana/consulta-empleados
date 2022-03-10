import axios from 'axios'
const API = process.env.NEXT_PUBLIC_API_URL

//activos e inactivos
const getEmpleados = async (tipo, token) => {
  axios.defaults.headers.Authorization = `Bearer ${token}`
  const { data } = await axios.get(`${API}/api/empleados/${tipo}`)
  return data
}

const getOneEmpleado = async (clave, token) => {
  axios.defaults.headers.Authorization = `Bearer ${token}`
  const { data } = await axios.get(`${API}/api/empleados/${clave}`)
  return data
}

const getExpediente = async (id) => {
  const { data } = await axios.get(`${API}/api/empleados/${id}/expediente`)
  return data
}

const getFamilia = async (id) => {
  const { data } = await axios.get(`${API}/api/empleados/${id}/familia`)
  return data
}

const getAdscripciones = async () => {
  const { data } = await axios.get(`${API}/api/catalogos/adscripciones`)
  return data
}

const getTotales = async () => {
  const { data } = await axios.get(`${API}/api/dashboard/totales`)
  return data
}

const getEdades = async () => {
  const { data } = await axios.get(`${API}/api/dashboard/edades`)
  return data
}

/* const createPost = (post) => {
  return fetchApi('POST', 'posts', post);
}

const editPost = ({ id, post }) => {
  return fetchApi('PUT', `posts/${id}`, post);
}

const deletePost = (id) => {
  return fetchApi('DELETE', `posts/${id}`);
} */

export {
  getEmpleados,
  getOneEmpleado,
  getExpediente,
  getFamilia,
  getAdscripciones,
  getTotales,
  getEdades
}
