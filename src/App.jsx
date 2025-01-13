import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMultiplePokemonById } from './RTK/thunk'

function App() {


  const dispatch = useDispatch()
  const pokemonData = useSelector(state => state.pokemon)
  console.log(pokemonData)

  useEffect(() => {
    dispatch(fetchMultiplePokemonById(151))
  }, [])


  return (
    <>
      <h1 className='text-[40px] text-center'>a</h1>
    </>
  )
}

export default App
