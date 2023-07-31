import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../../store/hooks'
import { selectNotesArray } from '../../store/selectors'
import { type StatisticNote } from '../../types/interfaces'
import { getStatistic } from '../../utils/getStatistic'
import TableComponent from '../../components/TableComponent/TableComponent'

const StatisticPage: React.FC = () => {
  const notes = useAppSelector(selectNotesArray)
  const [statistic, setStatistic] = useState<StatisticNote[]>([])

  useEffect(() => {
    const statisticInfo = getStatistic(notes)
    setStatistic(statisticInfo)
  }, [notes])

  return (
    <div className='container'>
      <h1>Your Statistic</h1>
      <TableComponent role='statistic' statistic={statistic} />
    </div>
  )
}

export default StatisticPage
