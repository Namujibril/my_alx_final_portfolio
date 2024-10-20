import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then((response) => response.data)
}

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject)
  return request.then((response) => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then((response) => response.data)
}

const deletePerson = (person) => {
  const request = axios.delete(`${baseUrl}/${person.id}`)
  return request.then((response) => response.data)
}

const services = {
  getAll: getAll,
  create: create,
  update: update,
  deletePerson,
}

export default services
