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
  required?: boolean
}

const Select: React.FC<SelectProps> = ({ name, value, onChange, options, required }) => {
  return (
    <label className="select">
      <select
      name={name}
      value={value}
      required={required}
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
