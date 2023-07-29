import React from 'react'
import NavItem from './NavItem'
const Header:React.FC = ()=> {
  return (
    <nav className='w-full shadow-[inset_-12px_-8px_40px_#46464620] flex h-20 bg-neutral-800 text-lg justify-evenly items-center'>
      <NavItem label='Home' link='./'/>
      <NavItem label='About' link='./about'/>
      
    </nav>
  )
}

export default Header