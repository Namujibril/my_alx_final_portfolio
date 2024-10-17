const PersonForm = ({
  addPersonHandler,
  newName,
  setNewName,
  number,
  setNumber,
}) => {
  return (
    <form onSubmit={addPersonHandler}>
      <div className='flex flex-col mb-2'>
        <label htmlFor='name' className='mb-1 text-xl text-accent'>
          Name:
        </label>
        <input
          type='text'
          name='name'
          id='name'
          required
          placeholder='enter a name'
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          className='input'
        />
      </div>
      <div className='flex flex-col mb-2'>
        <label htmlFor='number' className='mb-1 text-xl text-accent'>
          Number:
        </label>
        <input
          type='number'
          name='number'
          id='number'
          required
          placeholder='enter a number'
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className='input'
        />
      </div>
      <div className='w-full mt-2 mb-5 btn btn-accent'>
        <button type='submit'>Add person</button>
      </div>
    </form>
  )
}

export default PersonForm
