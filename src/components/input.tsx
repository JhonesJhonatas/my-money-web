import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  placeholder?: string
}

export function Input({ label, error, placeholder, ...rest }: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <span className="text-sm">{label}</span>
        <span className="text-red-500 text-sm">{error}</span>
      </div>
      <input
        type="text"
        className="rounded bg-slate-700 border-2 border-slate-600 outline-none p-2"
        placeholder={placeholder}
        {...rest}
      />
    </div>
  )
}
