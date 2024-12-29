import { User } from '@modules/user/types/user'

export interface CreateUserProps {
  name: string
  email: string
  password: string
}

export type CreateUserResponse = User
