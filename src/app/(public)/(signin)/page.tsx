import { Button, Input } from '@components'
import Image from 'next/image'

import loginBanner from '@assets/login-banner.png'

export default function SignIn() {
  return (
    <main className="flex h-screen w-screen items-center justify-center">
      <div className="p-4 flex rounded bg-slate-800 gap-4 w-5/12">
        <div className="flex flex-col gap-4 flex-1 justify-center px-4">
          <form className="flex flex-col gap-4">
            <Input label="Email" placeholder="seuemail@gmail.com" />
            <Input label="Password" placeholder="********" />
            <Button type="submit">Entrar</Button>
          </form>
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
