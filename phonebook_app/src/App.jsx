import { useEffect, useState } from 'react'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Persons from './components/Persons'
import personService from './services/personService'
import Modal from './components/Modal'
import { nanoid } from 'nanoid'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [number, setNumber] = useState('')
  const [search, setSearch] = useState('')
  const [message, setMessage] = useState(null)

  // fetching of data using useEffect
  useEffect(() => {
    personService.getAll().then((response) => {
      setPersons(response)
    })
  }, [])

  const addPersonHandler = (e) => {
    e.preventDefault()
    // if person exist in the phonebook
    const findPerson = persons.find(
      (person) =>
        person.name.toLowerCase() === newName.toLowerCase() &&
        person.number === number
    )
    const findPersonNumber = persons.find(
      (person) =>
        person.name.toLowerCase() === newName.toLowerCase() &&
        person.number !== number
    )
    if (findPerson) {
      setMessage(`${newName} is already added to the phonebook`)
      setTimeout(() => {
        setMessage(null)
      }, 5000)
      setNewName('')
      setNumber('')
    } else if (findPersonNumber) {
      setMessage(
        `${newName} is already added to the phonebook, replace the old number with the new one`
      )
    } else {
      const newPerson = {
        name: newName,
        number: number,
        id: nanoid(),
      }

      personService.create(newPerson).then((response) => {
        // console.log(response);
        setPersons(persons.concat(response))
      })
      // console.log(newPerson);
      setPersons(persons.concat(newPerson))
      setMessage(`Added ${newName}`)
      setTimeout(() => {
        setMessage(null)
      }, 5000)
      setNewName('')
      setNumber('')
    }
  }

  const searchHandler = (e) => {
    setSearch(e.target.value)
  }

  const deletePerson = (pers) => {
    personService.deletePerson(pers)
    const deletePersonObj = persons.filter((person) => person.id !== pers.id)
    setPersons(deletePersonObj)
    setMessage(null)
  }

  // update person function
  const updatePersonNumber = (findPersonNumber) => {
    personService
      .update(findPersonNumber.id, { ...findPersonNumber, number: number })
      .then((res) => {
        setPersons((prevPerson) => [
          ...prevPerson.map((person) =>
            person.name !== res.name ? person : res
          ),
        ])
      })
    setNewName('')
    setNumber('')
    setMessage(null)
  }
  return (
    <div className='container p-20 text-white'>
      {message && (
        <Modal
          message={message}
          newName={newName}
          updatePersonNumber={updatePersonNumber}
          persons={persons}
          number={number}
          setMessage={setMessage}
          setNumber={setNumber}
          setNewName={setNewName}
          deletePerson={deletePerson}
        />
      )}
      <div className='container py-8 shadow-lg bg-slate-950 shadow-slate-600'>
        <h2 className='mb-3 text-3xl text-center text-white underline underline-offset-8 '>
          Phonebook App
        </h2>
        <p className='mb-10 text-xl text-center text-white'>
          An app that help peoples saves their phone numbers
        </p>
        <Filter search={search} searchHandler={searchHandler} />
        <PersonForm
          addPersonHandler={addPersonHandler}
          newName={newName}
          number={number}
          setNumber={setNumber}
          setNewName={setNewName}
        />
        <h2 className='mb-5 text-3xl text-center text-white underline underline-offset-8'>
          contact list
        </h2>
        <Persons search={search} persons={persons} setMessage={setMessage} />
      </div>
    </div>
  )
}

export default App
