type BadgeProps = {
  children: React.ReactNode
}

export const Badge = ({ children, ...props }: BadgeProps) => {
  return (
    <span
      className="text-xs px-2 py-1 bg-white rounded-lg text-blue-600 font-bold uppercase shadow-sm"
      {...props}
    >
      {children}
    </span>
  )
}
