import qs from 'qs'

const BASE_API_URL = process.env.API_URL || 'http://localhost:1337'

export function apiUrl(resource, params = {}) {
  const query = qs.stringify(params)

  return `${BASE_API_URL}/api/${resource}?${query}`
} 