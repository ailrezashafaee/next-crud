import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import NavItem from './NavItem'
const Header:React.FC = ()=> {
  return (
    <nav className='w-full flex h-20 bg-neutral-800 text-lg justify-evenly items-center'>
      <NavItem label='Home' link='./'/>
      <NavItem label='About' link='./about'/>
      
    </nav>
  )
}

export default Header