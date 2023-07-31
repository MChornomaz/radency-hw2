import React, { type ChangeEvent } from 'react'
import arrowIcon from '../../assets/icons/arrow-down.svg'
import './select.css'

interface SelectProps {
  name: string
  options: Array<{
    value: string
    visible: string
  }>
  value: string
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void
  description?: string
  testId?: string
}

const Select: React.FC<SelectProps> = ({ name, value, onChange, description, options, testId }) => {
  return (
    <label className="select">
      {<span className="visually-hidden">{description}</span>}
      <select
      data-test-id={testId}
      name={name}
      value={value}
      onChange={onChange}
        style={{ backgroundImage: `url(${arrowIcon})` }}
      >
        {options.map(option => (<option value={option.value} key={option.value}>
            {option.visible}
          </option>))}
      </select>
    </label>
  )
}

export default Select
