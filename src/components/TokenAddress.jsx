import React from 'react'
import {  NavLink, useLocation } from 'react-router-dom'

const TokenAddress = () => {
  const location=useLocation();
  return (

    <div className={`d-flex justify-content-between  token-container `}      style={{ marginTop:'1rem' , width:288,height:65,background:`${location.pathname === '/' ? '#F30050' : ''}`} }>
    <img src="images/ic_baseline-token.svg" alt="token-icon" style={{fill: '#FFF',color:'#FFFFFF',marginLeft:'1rem'}}   width={24} height={24}/>
    <NavLink to='/' className='token mt-2 nav-link active' >Token Address</NavLink>

      </div>  )
}

export default TokenAddress