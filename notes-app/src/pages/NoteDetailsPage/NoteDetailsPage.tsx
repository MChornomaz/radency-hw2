import React, { type ChangeEvent, useCallback, useState, useEffect } from 'react'
import Input from '../../UI/Input/Input'
import { categories } from '../../data/constants'
import Select from '../../UI/Select/Select'
import TextArea from '../../UI/TextArea/TextArea'
import MainButton from '../../UI/buttons/MainButton/MainButton'
import { useNavigate, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { selectNotesArray } from '../../store/selectors'

import './noteDetails.css'
import { extractDatesFromString } from '../../utils/extractDatesFromStrin'
import { type Note } from '../../types/interfaces'
import { notesActions } from '../../store/notes/notesSlice'
import PathConstants from '../../routes/PathConstants'

const NoteDetailsPage: React.FC = () => {
  const [date, setDate] = useState('')
  const [name, setName] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [noteText, setNoteText] = useState('')
  const [noteData, setNoteData] = useState<Note>({
    id: '',
    category: '',
    content: '',
    created: '',
    dates: [],
    name: '',
    archived: false
  })

  const notesCategories = categories.map(category => ({
    value: category,
    visible: category
  }))

  const params = useParams()
  const noteId = params.noteId
  const notes = useAppSelector(selectNotesArray)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (noteId !== undefined) {
      const selectedNote = notes.find(note => note.id === noteId)
      if (selectedNote !== undefined) {
        setNoteData(selectedNote)
        setName(selectedNote.name)
        if (selectedNote.dates.length > 0) {
          setDate(selectedNote.dates[0])
        }
        setSelectedCategory(selectedNote.category)
        setNoteText(selectedNote.content)
      }
    }
  }, [noteId])

  notesCategories.unshift({ value: '', visible: 'Select note category' })

  const nameChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }, [])

  const dateChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value)
  }, [])

  const categoryChangeHandler = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value)
  }, [])

  const noteTextChangeHandler = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    setNoteText(e.target.value)
  }, [])

  const pageText = noteId !== undefined ? 'Update Note' : 'Create Note'

  const formSubmitHandler = (e: React.FormEvent): void => {
    e.preventDefault()
    const extractedDates = extractDatesFromString(noteText)

    if (noteId === undefined) {
      const formattedDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' })
      const createdNote: Note = {
        id: Math.random().toString(),
        category: selectedCategory,
        content: noteText,
        created: formattedDate,
        dates: date !== '' ? [date, ...extractedDates] : [...extractedDates],
        name,
        archived: false
      }

      dispatch(notesActions.createNote(createdNote))
    } else {
      const createdNote: Note = {
        id: noteId,
        category: selectedCategory,
        content: noteText,
        created: noteData.created,
        dates: date !== '' ? [date, ...extractedDates] : [...extractedDates],
        name,
        archived: noteData.archived
      }
      dispatch(notesActions.updateNote(createdNote))
    }
    navigate(-1)
  }

  return (
    <div className='container'>
      <h1>{pageText}</h1>
      <form onSubmit={formSubmitHandler} className='edit-form'>
        <div className='inputs__container'>
          <Input
            label='Enter note name'
            name='name'
            required={true}
            type='text'
            onChange={nameChangeHandler}
            value={name}
          />
          <Input
            label='Enter date'
            name='date'
            required={false}
            type='date'
            onChange={dateChangeHandler}
            value={date}
          />
          <Select
            name='category'
            options={notesCategories}
            value={selectedCategory}
            onChange={categoryChangeHandler}
            required
          />
        </div>
        <TextArea
          label='Enter your note'
          name='note'
          required
          value={noteText}
          onChange={noteTextChangeHandler}
        />
        <MainButton
        type='submit'
        >{pageText}</MainButton>
      </form>
    </div>
  )
}

export default NoteDetailsPage
