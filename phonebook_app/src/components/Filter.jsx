import React from 'react'

const Filter = ({ search, searchHandler }) => {
  return (
    <div className='flex flex-col mb-2'>
      <label htmlFor='search' className='mb-1 text-xl text-accent'>
        Find person:
      </label>
      <input
        id='search'
        type='search'
        onChange={searchHandler}
        value={search}
        className='input'
      />
    </div>
  )
}

export default Filter
