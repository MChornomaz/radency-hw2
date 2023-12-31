import React from 'react'

import { selectCategoryIcon } from '../../utils/selectCategoryIcon'

import { type Note } from '../../types/interfaces'

import IconButton from '../../UI/buttons/IconButton/IconButton'

import './tableRow.css'

interface TableRowProps {
  data: Note
  onArchive: () => void
  onDeleteNote: () => void
  onEditNote: () => void
}

const TableRow: React.FC<TableRowProps> = ({ data, onArchive, onDeleteNote, onEditNote }) => {
  const { category, content, created, dates, name } = data

  const visibleContent = content.length > 60 ? `${content.slice(0, 55)}...` : content

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
        <div>{visibleContent}</div>
      </td>
      <td>
        <div className='note-dates'>
          {dates.map((date) => <p key={Math.random()}>{date}</p>)}
        </div>
      </td>
      <td >
        <div className="icons-container">
          <IconButton type='edit' onClick={onEditNote} />
          <IconButton type='archive' onClick={onArchive} />
          <IconButton type='delete' onClick={onDeleteNote}/>
          </div>
      </td>

    </tr>
  )
}

export default TableRow
