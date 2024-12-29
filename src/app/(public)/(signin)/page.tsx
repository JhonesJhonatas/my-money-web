'use client'

import { useForm } from 'react-hook-form'
import Image from 'next/image'
import { z } from 'zod'

import { Button, Input } from '@components'

import loginBanner from '@assets/login-banner.png'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

export default function SignIn() {
  const { register, handleSubmit } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <main className="flex h-screen w-screen items-center justify-center">
      <div className="p-4 flex rounded bg-slate-800 gap-4 w-5/12">
        <div className="flex flex-col gap-4 flex-1 justify-center px-4">
          <form className="flex flex-col gap-4" onSubmit={onSubmit}>
            <Input
              {...register('email')}
              label="Email"
              placeholder="seuemail@gmail.com"
            />
            <Input
              {...register('password')}
              label="Password"
              placeholder="********"
            />
            <Button type="submit">Entrar</Button>
          </form>
          <div className="flex justify-center gap-4">
            <Link
              className="text-sm text-slate-400 hover:text-slate-300"
              href="/create-user"
            >
              Criar conta
            </Link>
            <Link
              className="text-sm text-slate-400 hover:text-slate-300"
              href="/forgot-password"
            >
              Esqueci minha senha
            </Link>
          </div>
        </div>
        <div className="flex-1">
          <Image
            src={loginBanner}
            className="w-full h-full object-cover rounded"
            alt="Login Banner"
            width={500}
            height={500}
          />
        </div>
      </div>
    </main>
  )
}
