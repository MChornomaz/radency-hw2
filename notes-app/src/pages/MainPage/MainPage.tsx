import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import TableComponent from '../../components/TableComponent/TableComponent'
import MainButton from '../../UI/buttons/MainButton/MainButton'

import { useAppSelector } from '../../store/hooks'
import { selectActiveNotes } from '../../store/selectors'

import PathConstants from '../../routes/PathConstants'

const MainPage: React.FC = () => {
  const notes = useAppSelector(selectActiveNotes)
  const navigate = useNavigate()

  const createNoteClickHandler = useCallback(() => {
    navigate(PathConstants.NEW_NOTE)
  }, [])

  return (
    <div className='container'>
      <h1>Your Notes</h1>
      <TableComponent role='content' notes={notes} />
      <div className='create-note__container'>
        <MainButton type='button' onClick={createNoteClickHandler}>Create note</MainButton>
      </div>
    </div>
  )
}

export default MainPage
