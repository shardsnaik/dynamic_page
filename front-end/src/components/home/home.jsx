import React from 'react'
import './home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
const home = () => {
  return (
    <>
    <div className='main-first-div'>
        <div>
            <Link to='/Page1' >
            <FontAwesomeIcon icon={faPlus} beat size="2xl" /></Link>
            
            </div>
        
            <Link to='/Page2' ><div>
            <FontAwesomeIcon icon={faPlus} beat size="2xl" />
            </div>
            </Link>
        
        <div><FontAwesomeIcon icon={faPlus} beat size="2xl" /></div>
    </div>
    <div className='main-first-div'>
        <div><FontAwesomeIcon icon={faPlus} beat size="2xl" /></div>
        <div><FontAwesomeIcon icon={faPlus} beat size="2xl" /></div>
        <div><FontAwesomeIcon icon={faPlus} beat size="2xl" /></div>
    </div>
    
    </>
  )
}

export default home