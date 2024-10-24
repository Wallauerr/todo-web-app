import clsx from 'clsx'
import { Trash2 } from 'lucide-react'

interface CardProps {
  task: string
  onDeletedTask?: (id: number) => void
  checked: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onDelete: () => void
}

export function Card({ task, onDelete, checked, ...props }: CardProps) {
  return (
    <div
      className={clsx(
        'flex items-center justify-between gap-3 rounded-lg bg-slate-200 p-4 text-sm text-slate-950 hover:bg-slate-200/70',
        checked && 'bg-transparent ring ring-slate-500',
      )}
    >
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={checked}
          className="size-5 cursor-pointer rounded-full border-none text-lime-500 outline-none focus:ring-0"
          {...props}
        />
        <p className={clsx(checked && 'text-slate-500 line-through')}>{task}</p>
      </div>
      <button onClick={onDelete}>
        <Trash2 className="size-5 text-slate-500" />
      </button>
    </div>
  )
}
