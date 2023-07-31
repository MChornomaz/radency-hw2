import React, { type ChangeEvent } from 'react'
import './textArea.css'

interface TextAreaProps {
  label: string
  name: string
  value: string
  required: boolean
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
  onBlur?: () => void
  hasError?: boolean
  errorText?: string
  autoComplete?: string
}

const TextArea: React.FC<TextAreaProps> = ({ label, name, autoComplete, onChange, onBlur, hasError, errorText, required, value }) => {
  return (
    <label className='textarea__container'>
      <span className="textarea__heading">{label}</span>
      <textarea
        name={name}
        value={value}
        autoComplete={autoComplete}
        required={required}
        onChange={onChange}
        onBlur={onBlur}
        className="textarea"
      />
      {hasError !== undefined && hasError && (
        <p className="error-text">
          {errorText}
        </p>
      )}
    </label>
  )
}

export default TextArea
