import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMultiplePokemonById } from './RTK/thunk'
import { Routes, Route } from 'react-router-dom'
import Main from './pages/Main'
import Detail from './pages/Detail'
import Search from './pages/Search'
import Favorite from './pages/Favorite'
import { Link } from 'react-router-dom'


function App() {


  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(fetchMultiplePokemonById(151))
  }, [])


  return (
    <>
      <h1 className='text-[40px] text-center'>포케몬 도감</h1>
      <nav className='flex gap-[20px] justify-center'>
        <Link to='/'>메인</Link>
        {/* <Link to='/detail/1'>상세정보</Link> */}
        {/* <Link to='/search'>검색</Link> */}
        <Link to='/favorite'>찜목록</Link>
        <input className='w-[120px] border-b border-[darkgray]' type="text" />
        <span>🔍</span>
      </nav>
      <main className='flex flex-wrap gap-[20px] justify-center pt-[20px]'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/detail/:pokemonId' element={<Detail />} />
          <Route path='/search' element={<Search />} />
          <Route path='/favorite' element={<Favorite />} />
        </Routes>
      </main>
      
    </>
  )
}

export default App
