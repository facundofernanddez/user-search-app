import React from 'react'
import SearchIcon from '@/components/icons/SearchIcon'

const Home = () => {
  return (
    <>
    <form className='flex'>
      <span>
        <SearchIcon/>
      </span>
      <input type="text" />
      <button>Search</button>
    </form>
    <article>Todo el chamu de la pag</article>
    </>
  )
}

export default Home