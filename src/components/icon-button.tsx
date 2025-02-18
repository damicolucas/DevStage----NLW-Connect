import type React from 'react'
import type { ComponentProps } from 'react'

interface ButtonProps extends ComponentProps<'button'> {
  children?: React.ReactNode
}

export function IconButton(props: ButtonProps) {
  return (
    <button
      className="p-1.5 bg-gray-500 text-blue rounded-md cursor-pointer hover:bg-blue hover:text-gray-900 transition-colors duration-300"
      {...props}
    />
  )
}
