import React from 'react'
import { selectCategoryIcon } from '../../utils/selectCategoryIcon'

import './tableRow.css'
import { type Note } from '../../types/interfaces'
import IconButton from '../../UI/buttons/IconButton/IconButton'

interface TableRowProps {
  data: Note
  onArchive: () => void
  onDeleteNote: () => void
}

const TableRow: React.FC<TableRowProps> = ({ data, onArchive, onDeleteNote }) => {
  const { category, content, created, dates, name } = data

  const categoryIcon = selectCategoryIcon(category)
  return (
    <tr className='row'>
      <td >
        <div className="category-sell">
          <div className='category-icon'>
            <img src={categoryIcon} alt={category} />
          </div>
          <span className='category-name'>{name}</span>
        </div>
      </td>
      <td>
        <span>{created}</span>
      </td>

      <td>
        {category}
      </td>
      <td className="content-cell">
            <div>{content}</div>
      </td>
      <td>
        <div className='note-dates'>
          {dates.map((date, index) => <p key={Math.random()}>{date}</p>)}
        </div>
      </td>
      <td >
        <div className="icons-container">
          <IconButton type='edit' />
          <IconButton type='archive' onClick={onArchive} />
          <IconButton type='delete' onClick={onDeleteNote}/>
          </div>
      </td>

    </tr>
  )
}

export default TableRow
