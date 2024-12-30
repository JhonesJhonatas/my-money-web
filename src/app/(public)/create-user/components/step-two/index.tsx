'use client'

import { Button, StepContentProps } from '@components'

export function StepTwo({ handleNextStep }: StepContentProps) {
  return (
    <div className="flex flex-col gap-2">
      <span>Dados Pessoais</span>
      <Button type="button" onClick={handleNextStep}>
        Próximo
      </Button>
    </div>
  )
}
