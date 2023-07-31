import React from 'react'

import { useAppSelector } from '../../store/hooks'
import { selectArchivedNotes } from '../../store/selectors'

import TableComponent from '../../components/TableComponent/TableComponent'

const ArchivePage: React.FC = () => {
  const notes = useAppSelector(selectArchivedNotes)

  return (
    <div className='container'>
      <h1>Your Notes</h1>
      <TableComponent role='content' notes={notes} />
    </div>
  )
}

export default ArchivePage
