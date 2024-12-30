'use client'

import { Multistep } from '@components'
import { GoLock, GoMail, GoPerson } from 'react-icons/go'
import { StepOne } from './components/step-one'
import { StepTwo } from './components/step-two'
import { StepThree } from './components/step-three'

export default function CreateUser() {
  return (
    <main className="flex h-screen w-screen items-center justify-center">
      <div className="p-4 flex flex-col rounded bg-slate-800 gap-4 w-3/12">
        <Multistep
          steps={[
            {
              header: {
                title: 'Email',
                icon: GoMail,
              },
              content: StepOne,
            },
            {
              header: {
                title: 'Dados Pessoais',
                icon: GoPerson,
              },
              content: StepTwo,
            },
            {
              header: {
                title: 'Segurança',
                icon: GoLock,
              },
              content: StepThree,
            },
          ]}
        />
      </div>
    </main>
  )
}
