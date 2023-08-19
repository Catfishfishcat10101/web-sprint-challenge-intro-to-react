const express = require('express')
const StarWars = require('../helpers')

const router = express.Router()

router.get('/people', async (req, res) => {
  try {
    const people = await StarWars.getPeople()
    res.json(people)
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching people.' })
  }
})

router.get('/planets', async (req, res) => {
  try {
    const planets = await StarWars.getPlanets()
    res.json(planets)
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching planets.' })
  }
})

module.exports = router