import React from 'react'
import Input from '../../UI/Input/Input'
import { categories } from '../../data/constants'
import Select from '../../UI/Select/Select'
import TextArea from '../../UI/TextArea/TextArea'
import './noteDetails.css'
import MainButton from '../../UI/buttons/MainButton/MainButton'

const NoteDetailsPage: React.FC = () => {
  const notesCategories = categories.map(category => ({
    value: category,
    visible: category
  }))

  notesCategories.unshift({ value: '', visible: 'Select note category' })

  return (
    <div className='container'>
      <h1>Create Note</h1>
      <form>
        <div className='inputs__container'>
          <Input
            label='Enter date'
            name='date'
            required={false}
            type='date'
            onChange={() => { }}
            value={''}
          />
          <Select
            name='category'
            options={notesCategories}
            value=''
            onChange={() => { }}
            required
          />
        </div>
        <TextArea
        label='Enter your note'
        name='note'
        required
        value='123'
        onChange={() => {}}
        />
        <MainButton
        type='submit'
        >Create Note</MainButton>
      </form>
    </div>
  )
}

export default NoteDetailsPage
