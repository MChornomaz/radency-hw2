import React from 'react'
import PathConstants from './PathConstants'
import MainPage from '../pages/MainPage/MainPage'
import ArchivePage from '../pages/ArchivePage/ArchivePage'
import StatisticPage from '../pages/StatisticPage/StatisticPage'

const routes = [
  { path: PathConstants.HOME, element: <MainPage /> },
  { path: PathConstants.ARCHIVE, element: <ArchivePage /> },
  { path: PathConstants.STATISTIC, element: <StatisticPage /> }
]

export default routes
