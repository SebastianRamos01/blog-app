export default function Button({action}: {action: string}) {
  return (
    <div className="flex items-center justify-center gap-1 w-24 h-7 bg-white my-2">
        <div className="bg-[#1a1a1a] size-1 rounded">
        </div>
        <p className="text-[#1a1a1a] text-xs font-medium">{action}</p>
    </div>
  )
}
