import React, { type ReactNode } from 'react'
import './mainButton.css'

interface ButtonProps {
  type: 'submit' | 'button'
  children: ReactNode
  onClick?: () => void
  title?: string
  className?: string
}

const MainButton: React.FC<ButtonProps> = ({ type, onClick, children, title, className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      title={title}
      className={`button-main ${className ?? ''}`}
    >
      {children}
    </button>
  )
}

export default MainButton
