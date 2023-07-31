import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type Note } from '../../types/interfaces'

export interface NotesState {
  notes: Note[]
}

const initialState: NotesState = {
  notes: [
    { id: '1', name: 'Shopping list', created: 'April 20, 2021', category: 'Task', content: 'Some potatoes and milk', dates: ['2021-05-23', '2021-05-23'], archived: false },
    { id: '2', name: 'The theory of evolution', created: 'April 27, 2021', category: 'Random Thought', content: 'Evolutionary biology is the subfield of biology that studies the evolutionary processes (natural selection, common descent, speciation) that produced the diversity of life on Earth. It is also defined as the study of the history of life forms on Earth.', dates: [], archived: true },
    { id: '3', name: 'New Feature', created: 'May 05, 2021', category: 'Idea', content: 'Implement new', dates: ['2021-05-23'], archived: false },
    { id: '4', name: 'William Gaddis', created: 'May 07, 2021', category: 'Quote', content: 'Power doesn\'t come', dates: [], archived: false },
    { id: '5', name: 'Books', created: 'May 15, 2021', category: 'Task', content: ' The Lean Startup', dates: [], archived: false },
    { id: '6', name: 'Shopping list', created: 'May 20, 2021', category: 'Task', content: 'Tomatoes, bread', dates: ['2021-05-23'], archived: false },
    { id: '7', name: 'The theory of evolution', created: 'May 26, 2021', category: 'Random Thought', content: 'Development of the', dates: [], archived: true }
  ]
}

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    createNote (state, action: PayloadAction<Note>) {
      state.notes = [action.payload, ...state.notes]
    },
    archiveNote (state, action: PayloadAction<string>) {
      const selectedNote = state.notes.find(el => el.id === action.payload)
      if (selectedNote != null) {
        selectedNote.archived = true
      }
    },
    unarchiveNote (state, action: PayloadAction<string>) {
      const selectedNote = state.notes.find(el => el.id === action.payload)
      if (selectedNote != null) {
        selectedNote.archived = false
      }
    },
    deleteNote (state, action: PayloadAction<string>) {
      const filteredNotes = state.notes.filter(el => el.id !== action.payload)
      state.notes = filteredNotes
    },
    updateNote (state, action: PayloadAction<Note>) {
      let selectedNote = state.notes.find(el => el.id === action.payload.id)
      const restOfState = state.notes.filter(el => el.id !== action.payload.id)
      if (selectedNote != null) {
        selectedNote = action.payload
        state.notes = [...restOfState, selectedNote]
      }
    }
  }
})

export const notesActions = notesSlice.actions

export default notesSlice.reducer
