import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Navbar = () => {
  return (
    <header>
        <nav>
            <div className='dribble'>
                <h2>Dribble</h2>
                <ul className='ins'>
                    <li>Inspiration</li>
                    <li>Find work</li>
                    <li>Learn Design</li>
                    <li>Go pro</li>
                    <li>Hire designer</li>
                </ul>
            </div>
            <div className='sign'>
                <p>
                 
                <FaSearch className='fa'/>
                </p>
                <p>Sign in</p>
                <button>Sign up</button>
            </div>
        </nav>
    </header>
  )
}

export default Navbar