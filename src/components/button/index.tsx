import { ReactNode } from 'react'
import { tv } from 'tailwind-variants'

const buttonVariants = tv({
  base: 'bg-blue-500 p-2 rounded',
  variants: {
    block: {
      true: 'w-full',
    },
  },
})

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  block?: boolean
}

export function Button({ children, block, ...rest }: ButtonProps) {
  return (
    <button className={buttonVariants({ block })} {...rest}>
      {children}
    </button>
  )
}
