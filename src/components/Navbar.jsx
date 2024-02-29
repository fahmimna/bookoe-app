import { NavLink, useNavigate } from 'react-router-dom'
import Logo from '../micro_components/Logo'
import { useState } from 'react'

const Navbar = () => {
  const [searchState, setSearchState] = useState("")

  const path = window.location.pathname
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    
    searchState.length > 0 ? navigate(`/search?keyword=${searchState}`) : alert("Type title that you want to find")
    setSearchState("")
  }

  return (
    <div className="flex flex-col lg:flex-row md:gap-5 justify-between items-center py-5 mb-4 sticky top-0 bg-[#1D232A] z-[1] font-poppins">
      <NavLink to={'/'}>
        <Logo />
      </NavLink>
      <ul className='flex md:flex-row flex-col gap-5 items-center'>
        <div className='flex gap-3 mt-3'>
          <li><NavLink to={'/'} className={`${path === "/" ? 'text-white font-semibold border-b-4 decoration-4' : 'text-gray-300'}`}>All</NavLink></li>
          <li><NavLink to={'/latest'} className={`${path === "/latest" ? 'text-white font-semibold border-b-4 decoration-4' : 'text-gray-300'}`}>Latest</NavLink></li>
          <li><NavLink to={'/top-picks'} className={`${path === "/top-picks" ? 'text-white font-semibold border-b-4 decoration-4' : 'text-gray-300'}`}>Top Picks</NavLink></li>
        </div>
        <li>
          <form onSubmit={handleSubmit}>
            <input className='border-[0.1rem] rounded-md pl-2 pr-10 py-1 w-full' type='text' value={searchState} onChange={(e) => setSearchState(e.target.value)} placeholder='🔍 Search by title or authors...'/>
          </form>
        </li>
        <li><button className='border-[0.1rem] border-[#8170F2] text-[#8170F2] rounded-md py-1 px-5'>Edit List</button></li>
      </ul>
    </div>
  )
}

export default Navbar