import React, { useCallback } from 'react'
import editIcon from '../../assets/icons/pencil-svgrepo-com.svg'
import trashIcon from '../../assets/icons/trash-bin-trash-svgrepo-com.svg'
import archiveIcon from '../../assets/icons/archive-down-svgrepo-com.svg'

import './tableComponent.css'
import TableRow from '../TableRow/TableRow'
import { type StatisticNote, type Note } from '../../types/interfaces'
import StatisticTableRow from '../StatistycTableRow/StatisticTableRow'
import { useAppDispatch } from '../../store/hooks'
import { notesActions } from '../../store/notes/notesSlice'

interface TableComponentProps {
  role: 'content' | 'statistic'
  notes?: Note[]
  statistic?: StatisticNote[]
}

const TableComponent: React.FC<TableComponentProps> = ({ role, notes, statistic }) => {
  const dispatch = useAppDispatch()

  const archiveNoteHandler = useCallback((id: string, archived: boolean) => {
    if (archived) {
      dispatch(notesActions.unarchiveNote(id))
    } else {
      dispatch(notesActions.archiveNote(id))
    }
  }, [])

  const deleteNoteHandler = useCallback((id: string) => {
    dispatch(notesActions.deleteNote(id))
  }, [])

  return (
    <>
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
          {role === 'content' && (notes != null) && notes.map(note => (
          <TableRow
          data={note}
          key={note.id}
          onArchive={() => { archiveNoteHandler(note.id, note.archived) } }
          onDeleteNote={() => { deleteNoteHandler(note.id) }}
          />))}
          {role === 'statistic' && (statistic != null) && statistic.map(el => <StatisticTableRow data={el} key={el.category} />)}
        </tbody>
      </table>
    </>
  )
}

export default TableComponent
