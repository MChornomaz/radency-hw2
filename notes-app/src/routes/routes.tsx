import React from 'react'

import PathConstants from './PathConstants'

import MainPage from '../pages/MainPage/MainPage'
import ArchivePage from '../pages/ArchivePage/ArchivePage'
import StatisticPage from '../pages/StatisticPage/StatisticPage'
import NoteDetailsPage from '../pages/NoteDetailsPage/NoteDetailsPage'

const routes = [
  { path: PathConstants.HOME, element: <MainPage /> },
  { path: PathConstants.ARCHIVE, element: <ArchivePage /> },
  { path: PathConstants.STATISTIC, element: <StatisticPage /> },
  { path: PathConstants.NEW_NOTE, element: <NoteDetailsPage /> },
  { path: PathConstants.NOTE_DETAILS, element: <NoteDetailsPage /> }
]

export default routes
