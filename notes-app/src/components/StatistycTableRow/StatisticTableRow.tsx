import React from 'react'

import { type StatisticNote } from '../../types/interfaces'
import { selectCategoryIcon } from '../../utils/selectCategoryIcon'

import '../TableRow/tableRow.css'

interface StatisticTableRowProps {
  data: StatisticNote
}

const StatisticTableRow: React.FC<StatisticTableRowProps> = ({ data }) => {
  const { active, archived, category } = data
  const categoryIcon = selectCategoryIcon(category)
  return (
    <tr className='row'>
      <td >
        <div className="category-sell">
          <div className='category-icon'>
            <img src={categoryIcon} alt={category} />
          </div>
          <span className='category-name'>{category}</span>
        </div>
      </td>
      <td>
        {active}
      </td>
      <td>
        {archived}
      </td>
    </tr>
  )
}

export default StatisticTableRow
