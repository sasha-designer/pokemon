import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMultiplePokemonById = createAsyncThunk(
    'prokemon/fetchMultiplePokemonById',
    async (maxPokemonId) => {
          // 1부터 151까지의 숫자 배열을 생성한다.
    const numberArray = Array.from({ length: maxPokemonId }, (_, i) => i + 1)
    // console.log(numberArray)

    const fetchAPI = async (pokemonId) => {

      const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`)
      const data = await response.json()
    //   console.log(data.flavor_text_entries.find(el => el.language.name === 'ko').flavor_text)
    //   console.log(data)
      
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


    //   return pokemonDatas = await Promise.all(numberArray.map((el) => 
        // pokemonDatas = 지우니까 데이터가 잘 넘어옴
        return await Promise.all(numberArray.map((el) => 
        fetchAPI(el)))  // Promise.all()을 이용하여 비동기 함수를 동기적으로 실행한다.



    }
)