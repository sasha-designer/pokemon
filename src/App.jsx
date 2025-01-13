import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  // 비동기 함수를 이용하여 API를 호출하고 데이터를 가져온다.
  useEffect(() => {
  const fetchAPI = async () => {

    const response = await fetch('https://pokeapi.co/api/v2')
    const data = await response.json()
    console.log(data)
    
      // .then(response => response.json())
      // .then(data => console.log(data))
   }
   fetchAPI();
  }, [])

  return (
    <>
      <h1>a</h1>
    </>
  )
}

export default App
