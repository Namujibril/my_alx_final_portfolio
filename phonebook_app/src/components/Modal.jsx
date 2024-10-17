const Modal = ({
  message,
  newName,
  updatePersonNumber,
  persons,
  number,
  setMessage,
  setNewName,
  setNumber,
  deletePerson,
}) => {
  const findPersonNumber = persons.find(
    (person) =>
      person.name.toLowerCase() === newName.toLowerCase() &&
      person.number !== number
  )

  const peronToDelete = persons.find(
    (pers) => pers.name.toLowerCase() === message.split(' ')[1].toLowerCase()
  )

  if (message === null) {
    return null
  } else if (
    message ===
      `${newName} is already added to the phonebook, replace the old number with the new one` ||
    message === `Delete ${message.split(' ')[1]}`
  ) {
    return (
      <div role='alert' className='alert alert-success'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          className='w-6 h-6 stroke-info shrink-0'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
          ></path>
        </svg>
        <span>{message}?</span>
        <div>
          <button
            className='btn btn-sm'
            onClick={
              message === `Delete ${message.split(' ')[1]}`
                ? () => deletePerson(peronToDelete)
                : () => updatePersonNumber(findPersonNumber)
            }
          >
            Yes
          </button>
          <button
            className='btn btn-sm btn-primary'
            onClick={() => {
              setMessage(null)
              setNewName('')
              setNumber('')
            }}
          >
            No
          </button>
        </div>
      </div>
    )
  } else {
    return (
      <div className='toast toast-top toast-center'>
        <div className='alert alert-info'>
          <span>{message}.</span>
        </div>
      </div>
    )
  }
}

export default Modal
