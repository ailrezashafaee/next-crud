import Link from 'next/link'
import React from 'react'
interface NavItemProps{
    label : string,
    active ?: boolean,
    link : string,
}
const NavItem :React.FC<NavItemProps> =({label , active,link})=> {
  return (
    <Link href={link} className='text-gray-200 font-bold text-2xl hover:decoration-solid'>
      {label}
    </Link> 
  )
}

export default NavItem