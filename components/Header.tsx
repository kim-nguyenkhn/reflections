import React from 'react'
import { ThemeMode } from './ThemeMode'

export default function Header() {
  return (
    <div className='flex top-0 sticky px-2 py-2  dark:shadow-none dark:border-neutral-800'>
        <ThemeMode/>
    </div>
  )
}
