import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  // 비동기 함수를 이용하여 API를 호출하고 데이터를 가져온다.
  useEffect(() => {

    const numberArray = Array.from({ length: 151 }, (_, i) => i + 1)
    console.log(numberArray)

    const fetchAPI = async (pokemonId) => {

      const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`)
      const data = await response.json()
      console.log(data.flavor_text_entries.find(el => el.language.name === 'ko').flavor_text)
      console.log(data)
      
        // .then(response => response.json())
        // .then(data => console.log(data))

        const pokemonData = {
          id: pokemonId,
          name: data.names.find(el => el.language.name === 'ko').name,
          description: data.flavor_text_entries.find(el => el.language.name === 'ko').flavor_text,
          front: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`,
          back:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemonId}.png`,
        }
        return pokemonData
    }

    const fetchPokemonDatas = async () => { 

      const pokemonDatas = await Promise.all(numberArray.map(el => 
        fetchAPI(el)))  // Promise.all()을 이용하여 비동기 함수를 동기적으로 실행한다.
      console.log(pokemonDatas)

    }

    fetchPokemonDatas()
  }, [])

  return (
    <>
      <h1>a</h1>
    </>
  )
}

export default App
