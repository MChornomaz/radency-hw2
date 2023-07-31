import { createSelector } from '@reduxjs/toolkit'
import { type Note } from '../types/interfaces'
import { type RootState } from './store'

export const selectNotesArray = (state: RootState): Note[] => state.notes.notes

export const selectActiveNotes = createSelector(
  [selectNotesArray],
  (notes: Note[]) => notes.filter(note => !note.archived)
)

export const selectArchivedNotes = createSelector(
  [selectNotesArray],
  (notes: Note[]) => notes.filter(note => note.archived)
)
