import React from 'react'
import { NavLink } from 'react-router-dom'
import PathConstants from '../../routes/PathConstants'

import './header.css'

const Header: React.FC = () => {
  return (
    <header className='header'>
      <nav className='header__navigation'>
        <ul className='header__list'>
          <li className='header__link'>
            <NavLink to={PathConstants.HOME} className={(navData) =>
              navData.isActive ? 'active' : ''}
              >Notes</NavLink>
          </li>
          <li className='header__link'>
            <NavLink to={PathConstants.ARCHIVE} className={(navData) =>
              navData.isActive ? 'active' : ''}
              >Archive</NavLink>
          </li>
          <li className='header__link'>
            <NavLink to={PathConstants.STATISTIC} className={(navData) =>
              navData.isActive ? 'active' : ''}
              >Statistic</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
