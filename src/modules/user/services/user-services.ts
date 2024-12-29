import { request } from '@modules/core/services/request'

import { CreateUserProps, CreateUserResponse } from '@modules/user/types'

export function createUser(data: CreateUserProps) {
  return request<CreateUserResponse>({
    url: '/user/create',
    method: 'post',
    body: data,
  })
}
