import React from 'react'
import './Header.scss';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { NAV_ITEMS } from '../common/constants'

const Header = () => {
  const currentLocation = window.location.pathname

  return (
    <header className='header'>
      <h1>Washing Machine Lite</h1>
      <Nav
        pills
      >
        {NAV_ITEMS.map(({ label, href }, index) => (
          <NavItem key={index}>
            <NavLink
              active={currentLocation === href}
              href={href}
            >
              {label}
            </NavLink>
          </NavItem>
        ))}
      </Nav>
    </header>
  )
}

export default Header