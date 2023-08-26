import React from 'react'
import {  NavLink, useLocation } from 'react-router-dom'

const PairAddress = () => {
  const location=useLocation();

  return (
    <div className='d-flex justify-content-between  token-container' style={{ marginTop:'1.2rem' , width:288,height:65,color:'white',background:`${location.pathname === '/pair' ? '#F30050' : ''}`}}>
    <img src="images/fluent_pair-24-filled.svg" alt="token-icon" style={{fill: '#FFF',color:'#FFFFFF',marginLeft:'1rem'}}   width={24} height={24}/>
    
    <NavLink to='/pair' className='pair mt-2 nav-link' >Pair Address</NavLink>
      </div>  )
}

export default PairAddress