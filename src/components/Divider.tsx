export default function Divider({title}:{title:string}) {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t-2 border-slate-400/25" />
      </div>
      <div className="relative flex justify-start">
        <span className="bg-white pr-3 text-lg font-display font-semibold leading-6 text-gray-900 uppercase">{title}</span>
      </div>
    </div>
  )
}
