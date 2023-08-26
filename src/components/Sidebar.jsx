import React from 'react'
import Brand from './Brand'
import TokenAddress from './TokenAddress'
import PairAddress from './PairAddress'
import SocialIcon from './SocialIcon'

const Sidebar = () => {
  return (
   <div className=''>
    <Brand />
    <TokenAddress />
    <PairAddress />
    <SocialIcon />
   </div>
  )
}

export default Sidebar