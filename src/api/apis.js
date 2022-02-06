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


const getEmpleados = async () => {
  const { data } = await axios.get(`${API_URL_2}/Empleados`)
  return data
}

const getOneEmpleado = async (id) => {
  const { data } = await axios.get(`${API_URL_2}/Empleados/${id}`)
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
  getOneEmpleado
  /* createPost,
  editPost,
  deletePost, */
}
