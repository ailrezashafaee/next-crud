"use client";
import { updateFilter } from '@/app/redux/features/Filter-slice';
import React from 'react'
import { useDispatch } from 'react-redux';

function SearchBar() {
    const dispatch = useDispatch()
    return (
    <div className='h-10 space-x-3 m-auto text-lg px-2 flex items-center mb-6 w-full'>
      <label htmlFor="button">Search by name:</label>
      <input name='search' onChange={(e)=>dispatch(updateFilter(e.target.value))} className='flex-1 transition bg-transparent focus:outline-none focus:border-b-rose-700 px-3 text-white font-thin py-[2px] border-b-2 border-b-neutral-300 '/>
    
    </div>
  )
}

export default SearchBar
