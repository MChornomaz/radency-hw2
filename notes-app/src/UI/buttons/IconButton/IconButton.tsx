import React from 'react'

import editIcon from '../../../assets/icons/pencil-svgrepo-com.svg'
import archiveIcon from '../../../assets/icons/archive-down-svgrepo-com.svg'
import trashIcon from '../../../assets/icons/trash-bin-trash-svgrepo-com.svg'

import './iconButton.css'

interface IconButtonProps {
  type: 'edit' | 'archive' | 'delete'
  onClick?: () => void
}

const IconButton: React.FC<IconButtonProps> = ({ type, onClick }) => {
  let icon = ''

  if (type === 'archive') icon = archiveIcon
  if (type === 'delete') icon = trashIcon
  if (type === 'edit') icon = editIcon

  return (
    <button onClick={onClick} className='icon-button'>
      <img src={icon} alt={`${type} button`} />
    </button>
  )
}

export default IconButton
