import React, { type ChangeEvent } from 'react'
import './input.css'

interface InputProps {
  label: string
  name: string
  type: string
  value: string | number
  required: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onBlur?: () => void
  hasError?: boolean
  errorText?: string
  autoComplete?: string
  testId?: string
  min?: number
  max?: number
}

const Input: React.FC<InputProps> = ({ label, name, autoComplete, type, onChange, onBlur, hasError, errorText, required, testId, value, max, min }) => {
  return (
    <label className="input">
      <span className="input__heading">{label}</span>
      <input
        data-test-id={testId}
        name={name}
        type={type}
        value={value}
        autoComplete={autoComplete}
        required={required}
        onChange={onChange}
        onBlur={onBlur}
        min={min}
        max={max}
      />
      {hasError !== undefined && hasError && (
        <p className="error-text">
          {errorText}
        </p>
      )}
    </label>
  )
}

export default Input
