const BASE_URL = 'api/article'


export const create = ($axios, params = {}) => {
  return $axios.post(`${BASE_URL}/create`, params)
}

export const update = ($axios, params = {}) => {
  return $axios.put(`${BASE_URL}/detail/${params.id}`, params)
}

export const list = ($axios, params = {}) => {
  return $axios.get(`${BASE_URL}/list`, { params })
}

export const getById = ($axios, id) => {
  return $axios.get(`${BASE_URL}/detail/${id}`)
}

export const remove = ($axios, id) => {
  return $axios.delete(`${BASE_URL}/detail/${id}`)
}