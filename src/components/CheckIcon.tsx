export function CheckIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" {...props} stroke="currentColor">
      <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" strokeWidth={2} strokeLinejoin="round" />
    </svg>
  )
}