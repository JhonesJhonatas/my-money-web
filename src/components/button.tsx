import { ReactNode } from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export function Button({ children }: ButtonProps) {
  return <button className="bg-blue-500 p-2 rounded">{children}</button>
}
