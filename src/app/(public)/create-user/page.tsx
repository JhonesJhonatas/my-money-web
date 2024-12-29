'use client'

import { z } from 'zod'
import Link from 'next/link'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { GoArrowLeft } from 'react-icons/go'

import { Button, Input } from '@components'

const formSchema = z
  .object({
    name: z.string().min(3, { message: 'Mínimo de 3 caracteres' }),
    email: z.string().email({ message: 'Email inválido' }),
    password: z.string().min(8, { message: 'Mínimo de 8 caracteres' }),
    confirmPassword: z.string().min(8, { message: 'Mínimo de 8 caracteres' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'As senhas não correspondem',
  })

type FormSchema = z.infer<typeof formSchema>

export default function CreateUser() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <main className="flex h-screen w-screen items-center justify-center">
      <div className="p-4 flex flex-col rounded bg-slate-800 gap-4 w-3/12">
        <div className="flex items-center justify-between border-b border-slate-700 pb-4">
          <div className="flex items-center gap-1 hover:text-slate-300 cursor-pointer">
            <GoArrowLeft />
            <Link href="/">Voltar</Link>
          </div>
        </div>
        <div className="flex flex-col gap-4 flex-1 justify-center p-4">
          <form className="flex flex-col gap-4" onSubmit={onSubmit}>
            <Input
              {...register('name')}
              label="Nome"
              placeholder="Seu nome"
              error={errors.name?.message}
            />
            <Input
              {...register('email')}
              label="Email"
              placeholder="seuemail@gmail.com"
              error={errors.email?.message}
            />
            <Input
              {...register('password')}
              label="Senha"
              placeholder="********"
              error={errors.password?.message}
            />
            <Input
              {...register('confirmPassword')}
              label="Confirmar senha"
              placeholder="********"
              error={errors.confirmPassword?.message}
            />
            <Button type="submit">Criar conta</Button>
          </form>
        </div>
      </div>
    </main>
  )
}
