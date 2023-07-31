import { type Note, type StatisticNote } from '../types/interfaces'
import { categories } from '../data/constants'

export const getStatistic = (notesArray: Note[]): StatisticNote[] => {
  const sortedArray = []
  for (let i = 0; i < categories.length; i++) {
    const category = categories[i]
    const categoryNotes = notesArray.filter(note => note.category === category)
    if (categoryNotes.length > 0) {
      const activeNotes = categoryNotes.filter(note => !note.archived).length
      const archivedNotes = categoryNotes.filter(note => note.archived).length
      const statisticItem: StatisticNote = { category, active: activeNotes, archived: archivedNotes }
      sortedArray.push(statisticItem)
    }
  }

  return sortedArray
}
