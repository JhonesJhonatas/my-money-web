import { useCallback, useState } from 'react'

import { createUser } from '@modules/user/services/user-services'

import { CreateUserProps, CreateUserResponse } from '@modules/user/types'

interface Properties {
  loading: boolean
}

interface HandleCreateUserProps {
  data: CreateUserProps
  onSuccess?: (data: CreateUserResponse) => void
  onError?: (error: Error) => void
}

export function useUser() {
  const [properties, setProperties] = useState<Properties>({
    loading: false,
  })

  const handleSetProperties = useCallback(
    (newProperties: Partial<Properties>) => {
      setProperties((prevProperties) => ({
        ...prevProperties,
        ...newProperties,
      }))
    },
    [],
  )

  const handleCreateUser = useCallback(
    async ({ data, onSuccess, onError }: HandleCreateUserProps) => {
      handleSetProperties({ loading: true })

      try {
        const response = await createUser(data)

        if (onSuccess) {
          onSuccess(response.data)
          return
        }

        return response
      } catch (error) {
        if (onError) {
          onError(error as Error)
          return
        }

        console.error(error)
      } finally {
        handleSetProperties({ loading: false })
      }
    },
    [handleSetProperties],
  )

  return {
    loading: properties.loading,
    handlers: {
      handleCreateUser,
    },
  }
}
