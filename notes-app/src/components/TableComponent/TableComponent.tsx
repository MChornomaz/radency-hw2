import React from 'react'
import editIcon from '../../assets/icons/pencil-svgrepo-com.svg'
import trashIcon from '../../assets/icons/trash-bin-trash-svgrepo-com.svg'
import archiveIcon from '../../assets/icons/archive-down-svgrepo-com.svg'

import './tableComponent.css'
import TableRow from '../TableRow/TableRow'

interface TableComponentProps {
  role: 'content' | 'statistic'
  title: string
}

const notes = [
  { id: '1', name: 'Shopping list', created: 'April 20, 2021', category: 'Task', content: 'Tomatoes, bread', dates: ['2021-05-23', '2021-05-23'], archived: false },
  { id: '2', name: 'The theory of evolution', created: 'April 27, 2021', category: 'Random Thought', content: 'The evolution ...The evolution ...The evolution The evolution ...The evolution ...The evolution ...The evolution ...', dates: [], archived: true },
  { id: '3', name: 'New Feature', created: 'May 05, 2021', category: 'Idea', content: 'Implement new', dates: ['2021-05-23'], archived: true },
  { id: '4', name: 'William Gaddis', created: 'May 07, 2021', category: 'Quote', content: 'Power doesn\'t come', dates: [], archived: false },
  { id: '5', name: 'Books', created: 'May 15, 2021', category: 'Task', content: ' The Lean Startup', dates: [], archived: true },
  { id: '6', name: 'Shopping list', created: 'May 20, 2021', category: 'Task', content: 'Tomatoes, bread', dates: ['2021-05-23'], archived: true },
  { id: '7', name: 'The theory of evolution', created: 'May 26, 2021', category: 'Random Thought', content: 'Development of the', dates: [], archived: true }
]

const TableComponent: React.FC<TableComponentProps> = ({ role, title }) => {
  return (
    <>
      <h2>{title}</h2>
      <table className="table">
        <thead className='table-header'>
          {role === 'content' && (<tr>
            <th>Name</th>
            <th>Created</th>
            <th>Category</th>
            <th>Content</th>
            <th>Dates</th>
            <th>
              <div className='table-header__icons'>
                <img src={editIcon} alt="" className='table-header__icon' />
                <img src={trashIcon} alt="" className='table-header__icon' />
                <img src={archiveIcon} alt="" className='table-header__icon' />
              </div>
            </th>
          </tr>)}
          {role === 'statistic' && (
            <tr className="card-panel teal lighten-2">
              <th>Note Category</th>
              <th>Active</th>
              <th>Archived</th>
            </tr>
          )}
        </thead>
        <tbody>
          {role === 'content' && notes.map(note => <TableRow data={note} key={note.id} />)}
        </tbody>
      </table>
    </>
  )
}

export default TableComponent
