import { PlusCircle } from 'lucide-react'
import { ButtonHTMLAttributes } from 'react'

export function Button({ ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className="flex h-full gap-3 rounded-lg bg-slate-400 px-6 py-4 font-bold text-white ring ring-slate-400 hover:bg-slate-400/70 hover:ring-slate-400/70 focus:ring-2 focus:ring-slate-600"
    >
      Criar <PlusCircle />
    </button>
  )
}
