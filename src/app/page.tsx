import React from 'react'
import SearchIcon from '@/components/icons/SearchIcon'

const Home = () => {
  return (
    <>
    <form className='flex bg-blue-900 p-2 rounded-xl'>
      <span>
        <SearchIcon className='fill-blue-500'/>
      </span>
      <input type="text" placeholder='Search Github username'/>
      <button>Search</button>
    </form>
    <article>Todo el chamu de la pag</article>
    </>
  )
}

export default Home