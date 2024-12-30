'use client'

import { ReactNode, useCallback, useState } from 'react'
import { IconType } from 'react-icons'
import { tv } from 'tailwind-variants'

const stepIconVariants = tv({
  base: 'p-1 rounded-full',
  variants: {
    status: {
      current: 'bg-blue-600',
      completed: 'bg-green-600',
      pending: 'bg-slate-700',
    },
  },
  defaultVariants: {
    status: 'pending',
  },
})

export interface StepContentProps {
  currentStep: number
  handleNextStep: () => void
  handlePreviousStep: () => void
}

type Step = {
  header: {
    title: string
    icon?: IconType
  }
  content: (props: StepContentProps) => ReactNode
}

interface MultistepProps {
  steps: Step[]
}

export function Multistep({ steps }: MultistepProps) {
  const [currentStep, setCurrentStep] = useState(0)

  const handleNextStep = useCallback(() => {
    setCurrentStep((prev) => {
      if (prev >= steps.length) return prev

      return prev + 1
    })
  }, [steps])

  const handlePreviousStep = useCallback(() => {
    setCurrentStep((prev) => {
      if (prev <= 0) return prev

      return prev - 1
    })
  }, [])

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4 justify-center">
        {steps.map(({ header: { icon: Icon, title } }, index) => {
          const stepStatus =
            currentStep === index
              ? 'current'
              : currentStep > index
                ? 'completed'
                : 'pending'

          return (
            <div key={index} className="flex flex-col items-center gap-1">
              {Icon && (
                <Icon
                  className={stepIconVariants({
                    status: stepStatus,
                  })}
                  size={28}
                />
              )}
              <span className="text-sm text-zinc-50">{title}</span>
            </div>
          )
        })}
      </div>
      <div>
        {steps[currentStep].content({
          currentStep,
          handleNextStep,
          handlePreviousStep,
        })}
      </div>
    </div>
  )
}
