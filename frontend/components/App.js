import React from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
 // ❗ Create state to hold the data from the API
 const [characters, setCharacters] = React.useState([])

 // ❗ Create effects to fetch the data and put it in state
 React.useEffect(() => {
   const fetchCharacters = async () => {
     try {
       const response = await axios.get(urlPeople)
       setCharacters(response.data)
     } catch (error) {
       console.error('Error fetching characters:', error)
     }
   }

   fetchCharacters()
 }, [])

 return (
   <div>
     <h2>Star Wars Characters</h2>
     <p>See the README of the project for instructions on completing this challenge</p>
     {/* ❗ Map over the data in state, rendering a Character at each iteration */}
     {characters.map(character => (
       <Character key={character.id} {...character} />
     ))}
   </div>
 )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
