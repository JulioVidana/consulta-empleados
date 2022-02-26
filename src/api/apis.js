import axios from 'axios'
const API_URL_2 = 'http://pruebas.difson.gob.mx:1004'
const API_URL = 'http://10.0.0.99:1004'

/* const fetchApi = (method, path, body) => {
  return fetch(`${API_URL_2}/${path}`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method,
    body: JSON.stringify(body),
  })
    .then(response => response.json())
} */

//activos e inactivos
const getEmpleados = async (tipo) => {
  const { data } = await axios.get(`${API_URL_2}/api/empleados/${tipo}`)
  return data
}

const getOneEmpleado = async (clave) => {
  const { data } = await axios.get(`${API_URL_2}/api/empleados/${clave}`)
  return data
}

const getExpediente = async (id) => {
  const { data } = await axios.get(`${API_URL_2}/api/empleados/${id}/expediente`)
  return data
}

const getFamilia = async (id) => {
  const { data } = await axios.get(`${API_URL_2}/api/empleados/${id}/familia`)
  return data
}

/* const getInactivos = async () => {
  const { data } = await axios.get(`${API_URL_2}/api/empleados/inactivos`)
  return data
} */

const getAdscripciones = async () => {
  const { data } = await axios.get(`${API_URL_2}/api/catalogos/adscripciones`)
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
  getAdscripciones
}
