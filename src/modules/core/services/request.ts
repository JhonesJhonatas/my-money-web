/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from '@modules/core/services/api'

type RequestProps = {
  url: string
  method?: 'get' | 'post' | 'put' | 'delete'
  body?: any
  params?: any
  cacheTime?: number
}

type Respose<T> = {
  code: number
  data: T
}

export async function request<T>({
  url,
  method = 'get',
  body,
  params,
}: RequestProps): Promise<Respose<T>> {
  const query = {}

  if (method === 'get') {
    Object.assign(query, { params })
  }

  if (method === 'post' || method === 'put') {
    Object.assign(query, body)
  }

  const response = await api[method](url, query)

  return {
    code: response.status,
    data: response.data,
  }
}
