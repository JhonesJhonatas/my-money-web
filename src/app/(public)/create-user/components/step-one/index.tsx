'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button, Input, StepContentProps } from '@components'

const formSchema = z.object({
  email: z.string().email(),
})

type FormSchema = z.infer<typeof formSchema>

export function StepOne({ handleNextStep }: StepContentProps) {
  const { register, handleSubmit } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = handleSubmit(() => {
    handleNextStep()
  })

  return (
    <form className="flex flex-col gap-2" onSubmit={onSubmit}>
      <Input
        placeholder="exemplo@email.com"
        label="Email"
        {...register('email')}
      />
      <Button type="submit">Próximo</Button>
    </form>
  )
}
