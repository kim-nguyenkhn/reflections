import React from 'react'
import { ThemeMode } from './ThemeMode'

export default function Header() {
  return (
    <div className='flex px-2 py-2 border-b shadow-sm border-neutral-200 dark:shadow-none dark:border-neutral-800'>
        <ThemeMode/>
    </div>
  )
}