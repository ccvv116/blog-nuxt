const BASE_URL = 'api/user'

export const login = ($axios, params = {}) => {
  return $axios.post(`${BASE_URL}/login`, params)
}

export const checkLogin = ($axios) => {
  return $axios.get(`${BASE_URL}/checkLogin`)
}
