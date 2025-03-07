import React from 'react'
import GenreList from '../Components/GenreList'

function Home() {
  return (
    <div className='grid grid-cols-4'>
      <div className='bg-red-400 h-full hidden md:block p-1'>
        <GenreList/>
      </div>
      <div className='col-span-4 md:col-span-3 bg-blue-400 p-1'>Game list</div>
    </div>

  )
}

export default Home