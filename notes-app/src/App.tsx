import React from 'react'
import TableComponent from './components/TableComponent/TableComponent'

import './App.css'
import MainButton from './UI/buttons/MainButton/MainButton'

const App: React.FC = () => {
  return (
    <main>
      <div className='container'>
        <TableComponent role='content' title='Your Notes'/>
        <div className='create-note__container'>
          <MainButton type='button'>Create note</MainButton>
        </div>
      </div>
      <div className='container'>
        <TableComponent role='statistic' title="Notes Statistic" />
      </div>
    </main>
  )
}

export default App
