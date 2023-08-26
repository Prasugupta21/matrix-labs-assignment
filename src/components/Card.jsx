import { CCard, CCardBody, CCardLink, CCardSubtitle, CCardText, CCardTitle } from '@coreui/react'
import React from 'react'

const Card = ({data}) => {
    
  return (
<CCard style={{ width: '279px',marginTop:'1.5rem',color: '#F5F5F5',background:'#390554',
fontFamily: 'Poppins',
fontSize: '12px',
fontStyle: 'normal',
fontWeight: 500,
lineHeight:' normal'}}>
  <CCardBody>
    <CCardTitle style={{fontSize:13}}>{data?.baseToken?.name}</CCardTitle>
    <div style={{display:'flex', flexDirection:'column'}}>
    <CCardSubtitle className="mb-2 text-small-emphasis d-flex justify-content-around  " style={{fontSize:12}} ><div >Pair created at</div> <div >{data.pairCreatedAt}</div></CCardSubtitle>
    <CCardSubtitle className="mb-2 text-small-emphasis d-flex justify-content-around  "  style={{textIndent:'-36px',fontSize:12}}><div >Symbol</div> <div >{data?.baseToken?.symbol}</div></CCardSubtitle>
    <CCardSubtitle className="mb-2 text-small-emphasis d-flex justify-content-around  "   style={{textIndent:'-10px',fontSize:12}}> <div >Dex ID</div> <div  style={{textIndent:'15px'}} >{data.dexId}</div></CCardSubtitle>
    <CCardSubtitle className="mb-2 text-small-emphasis d-flex justify-content-around  "   style={{textIndent:'-35px',fontSize:12}}><div >Price USD</div><div >{data.priceUsd}</div></CCardSubtitle>
    
    </div>
  </CCardBody>
</CCard>  )
}

export default Card