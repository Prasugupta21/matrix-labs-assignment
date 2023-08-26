import React, {  useState } from "react";
import Sidebar from "../components/Sidebar";
import Searchbar from "../components/Searchbar";
import Card from "../components/Card";
import axios from "axios";

const Token = () => {
    const [data,setData]=useState('');

   
    const handleSearch = async(searchTerm) => {
      try {
        const res=   await axios.get(`https://api.dexscreener.com/latest/dex/tokens/${searchTerm}`);

   
   
      if(res){
        setData(res.data);
        console.log(res);
      
      } 
      else console.log('error in fetching data'); 
      } catch (error) {
        console.log('error',error); 
      }
      
        
      };
     
  return (
    <div className="row">
      <div className="column-md-3" style={{ color: "white" }}>
        <Sidebar />
      </div>
      <div className="col-md-9 background"  >  
      <Searchbar onSearch={handleSearch} setData={setData}/>
      <div className="row" style={{marginTop:'5rem'}}>
      <div className="d-flex flex-column justify-content-between col-md-3 "  style={{height:'20vh', }}>
    
       { data?.pairs?.slice(0,3).map((e)=>(
        <Card data={e}/>
       ))}
           </div>
      <div className="d-flex flex-column justify-content-between col-md-3   "  style={{height:'20vh' }}>
     
       { data?.pairs?.slice(3,6).map((e)=>(
        <Card data={e}/>
       ))}
           </div>
      <div className="d-flex flex-column justify-content-between col-md-3   "  style={{height:'20vh' }}>
     
       { data?.pairs?.slice(6,9).map((e)=>(
        <Card data={e}/>
       ))}
           </div>
      <div className="d-flex flex-column justify-content-between col-md-3   "  style={{height:'20vh' }}>
     
       { data?.pairs?.slice(9,12).map((e)=>(
        <Card data={e}/>
       ))}
           </div>
          
  
    
      </div>
      </div>
      <div style={{ width: "1516px", height: "68px",background:'#F30050' }}>
      
      </div>
    </div>
  );
};

export default Token;
