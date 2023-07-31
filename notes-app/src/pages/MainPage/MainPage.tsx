import React from 'react'
import TableComponent from '../../components/TableComponent/TableComponent'
import MainButton from '../../UI/buttons/MainButton/MainButton'
import { useAppSelector } from '../../store/hooks'
import { selectActiveNotes } from '../../store/selectors'

const MainPage: React.FC = () => {
  const notes = useAppSelector(selectActiveNotes)

  return (
    <div className='container'>
      <h1>Your Notes</h1>
      <TableComponent role='content' notes={notes} />
      <div className='create-note__container'>
        <MainButton type='button'>Create note</MainButton>
      </div>
    </div>
  )
}

export default MainPage
