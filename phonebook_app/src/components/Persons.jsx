const Persons = ({ search, persons, setMessage }) => {
  return (
    <div>
      {search ? (
        <table className='table'>
          <thead>
            <tr className='text-xl text-cyan-300'>
              <th>Name</th>
              <th>Number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {persons
              .filter((person) =>
                person.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((person) => (
                <tr key={person.id} className='text-xl'>
                  <td>{person.name}</td>
                  <td>{person.number}</td>
                  <td>
                    <button
                      onClick={() => setMessage(`Delete ${person.name}`)}
                      className='btn btn-accent btn-sm'
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      ) : (
        <table className='table'>
          <thead>
            <tr className='text-xl text-cyan-300'>
              <th>Name</th>
              <th>Number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {persons.map((person) => {
              return (
                <tr key={person.id} className='text-xl'>
                  <td>{person.name}</td>
                  <td>{person.number}</td>
                  <td>
                    <button
                      onClick={() => setMessage(`Delete ${person.name}`)}
                      className='btn btn-accent btn-sm'
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default Persons
